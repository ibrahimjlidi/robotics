import * as THREE from './vendor/three.module.js';

const WIDTH = 640;
const HEIGHT = 420;
const SCALE = 0.045;
const container = document.getElementById('scene-wrap');
const canvas = document.getElementById('c3d');
const warning = document.getElementById('scene-warning');
let renderer;

function startScene() {
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'low-power' });
  } catch (error) {
    console.error('The 3D robot scene could not start; keeping the 2D simulator view.', error);
    warning.hidden = false;
    return;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#e8f1fa');
  scene.fog = new THREE.Fog('#e8f1fa', 40, 90);

  const camera = new THREE.PerspectiveCamera(43, WIDTH / HEIGHT, 0.1, 120);
  const target = new THREE.Vector3(0, 0, 0);
  const orbit = { yaw: 0.55, pitch: 0.92, radius: 31 };
  function resizeRenderer() {
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  const resize = new ResizeObserver(resizeRenderer);

  scene.add(new THREE.HemisphereLight('#f8fbff', '#7d8da1', 2.1));
  const sun = new THREE.DirectionalLight('#ffffff', 2.6);
  sun.position.set(-10, 24, 13);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -20;
  sun.shadow.camera.right = 20;
  sun.shadow.camera.top = 20;
  sun.shadow.camera.bottom = -20;
  scene.add(sun);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setClearColor('#e8f1fa');
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(WIDTH * SCALE, HEIGHT * SCALE),
    new THREE.MeshStandardMaterial({ color: '#e9f2e5', roughness: 0.94 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.12;
  floor.receiveShadow = true;
  scene.add(floor);

  const grid = new THREE.GridHelper(32, 32, '#bbccba', '#d5dfd4');
  grid.position.y = -0.1;
  scene.add(grid);

  const boundaryMaterial = new THREE.MeshStandardMaterial({ color: '#52677c', roughness: 0.8 });
  const boundaryHeight = 0.24;
  const halfWidth = WIDTH * SCALE / 2;
  const halfDepth = HEIGHT * SCALE / 2;
  function addBoundary(width, depth, x, z) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(width, boundaryHeight, depth), boundaryMaterial);
    wall.position.set(x, boundaryHeight / 2 - 0.1, z);
    wall.castShadow = true;
    wall.receiveShadow = true;
    scene.add(wall);
  }
  addBoundary(WIDTH * SCALE, 0.16, 0, -halfDepth);
  addBoundary(WIDTH * SCALE, 0.16, 0, halfDepth);
  addBoundary(0.16, HEIGHT * SCALE, -halfWidth, 0);
  addBoundary(0.16, HEIGHT * SCALE, halfWidth, 0);

  const obstacleGroup = new THREE.Group();
  scene.add(obstacleGroup);
  let obstacleSignature = '';

  function makeCrate(width, depth, height, color) {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ color, roughness: 0.82 });
    const box = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    box.position.y = height / 2;
    box.castShadow = true;
    box.receiveShadow = true;
    group.add(box);
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(box.geometry),
      new THREE.LineBasicMaterial({ color: '#39485a', transparent: true, opacity: 0.55 })
    );
    edges.position.copy(box.position);
    group.add(edges);
    const top = new THREE.Mesh(
      new THREE.BoxGeometry(width * 0.92, 0.09, depth * 0.92),
      new THREE.MeshStandardMaterial({ color: '#f5bd68', roughness: 0.8 })
    );
    top.position.y = height + 0.025;
    top.castShadow = true;
    group.add(top);
    return group;
  }

  function makeBarrel(radius, height) {
    const group = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.88, radius, height, 16),
      new THREE.MeshStandardMaterial({ color: '#0e9f8a', roughness: 0.62, metalness: 0.08 })
    );
    body.position.y = height / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);
    for (const level of [height * 0.28, height * 0.72]) {
      const band = new THREE.Mesh(
        new THREE.TorusGeometry(radius * 0.88, 0.045, 6, 20),
        new THREE.MeshStandardMaterial({ color: '#b7f0e3', metalness: 0.2, roughness: 0.45 })
      );
      band.rotation.x = Math.PI / 2;
      band.position.y = level;
      group.add(band);
    }
    return group;
  }

  function makeBollard(radius, height) {
    const group = new THREE.Group();
    const post = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.42, radius, height, 10),
      new THREE.MeshStandardMaterial({ color: '#f97316', roughness: 0.75 })
    );
    post.position.y = height / 2;
    post.castShadow = true;
    group.add(post);
    const stripe = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.58, radius * 0.7, 0.2, 10),
      new THREE.MeshStandardMaterial({ color: '#fff7ed', roughness: 0.7 })
    );
    stripe.position.y = height * 0.58;
    stripe.castShadow = true;
    group.add(stripe);
    return group;
  }

  function syncObstacles(rectangles) {
    const nextSignature = rectangles.map(rectangle => rectangle.join(',')).join('|');
    if (nextSignature === obstacleSignature) return;
    obstacleSignature = nextSignature;
    obstacleGroup.traverse(object => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach(material => material.dispose());
      }
    });
    obstacleGroup.clear();
    rectangles.forEach((rectangle, index) => {
      const [x, z, pixelWidth, pixelDepth] = rectangle;
      const width = Math.max(0.9, pixelWidth * SCALE);
      const depth = Math.max(0.9, pixelDepth * SCALE);
      const height = [1.1, 1.5, 1.25, 0.95, 1.4][index % 5];
      const radius = Math.max(0.38, Math.min(width, depth) * 0.45);
      const obstacle = index % 5 === 1
        ? makeBarrel(radius, height)
        : index % 5 === 3
          ? makeBollard(radius, height)
          : makeCrate(width, depth, height, ['#64748b', '#0e9f8a', '#818cf8', '#f97316', '#475569'][index % 5]);
      obstacle.position.set((x + pixelWidth / 2 - WIDTH / 2) * SCALE, 0, (z + pixelDepth / 2 - HEIGHT / 2) * SCALE);
      obstacleGroup.add(obstacle);
    });
  }

  const robot = new THREE.Group();
  const chassis = new THREE.Mesh(
    new THREE.BoxGeometry(1.28, 0.48, 1.05),
    new THREE.MeshStandardMaterial({ color: '#2563eb', roughness: 0.58, metalness: 0.08 })
  );
  chassis.position.y = 0.45;
  chassis.castShadow = true;
  chassis.receiveShadow = true;
  robot.add(chassis);

  const topPlate = new THREE.Mesh(
    new THREE.BoxGeometry(0.72, 0.12, 0.78),
    new THREE.MeshStandardMaterial({ color: '#93c5fd', roughness: 0.55 })
  );
  topPlate.position.set(-0.05, 0.75, 0);
  topPlate.castShadow = true;
  robot.add(topPlate);

  const wheelMaterial = new THREE.MeshStandardMaterial({ color: '#172033', roughness: 0.88 });
  for (const side of [-1, 1]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.16, 18), wheelMaterial);
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(-0.12, 0.3, side * 0.62);
    wheel.castShadow = true;
    robot.add(wheel);
  }

  const sensor = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.2, 0.62),
    new THREE.MeshStandardMaterial({ color: '#fbbf24', roughness: 0.6 })
  );
  sensor.position.set(0.72, 0.48, 0);
  sensor.castShadow = true;
  robot.add(sensor);
  scene.add(robot);

  const trailLine = new THREE.Line(
    new THREE.BufferGeometry(),
    new THREE.LineBasicMaterial({ color: '#2563eb', transparent: true, opacity: 0.55 })
  );
  scene.add(trailLine);
  let trailSignature = '';

  const rayGeometry = new THREE.BufferGeometry();
  rayGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
  const ray = new THREE.Line(
    rayGeometry,
    new THREE.LineBasicMaterial({ color: '#ef4444', transparent: true, opacity: 0.72 })
  );
  scene.add(ray);

  const lineTrack = new THREE.Group();
  scene.add(lineTrack);
  const trackPoints = [];
  for (let index = 0; index <= 180; index++) {
    const angle = (index / 180) * Math.PI * 2;
    trackPoints.push(new THREE.Vector3(Math.cos(angle) * 240 * SCALE, 0.015, Math.sin(angle) * 130 * SCALE));
  }
  const trackCurve = new THREE.CatmullRomCurve3(trackPoints, true);
  const darkTrack = new THREE.Mesh(
    new THREE.TubeGeometry(trackCurve, 220, 0.38, 8, true),
    new THREE.MeshStandardMaterial({ color: '#202735', roughness: 0.95 })
  );
  darkTrack.receiveShadow = true;
  lineTrack.add(darkTrack);

  const sensorDots = [-1, 1].map(() => {
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 12, 8),
      new THREE.MeshStandardMaterial({ color: '#ef4444', emissive: '#7f1d1d', emissiveIntensity: 0.25 })
    );
    scene.add(dot);
    return dot;
  });

  const gift = new THREE.Group();
  const giftBody = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 0.9, 1.05),
    new THREE.MeshStandardMaterial({ color: '#ec4899', roughness: 0.62 })
  );
  giftBody.position.y = 0.53;
  giftBody.castShadow = true;
  giftBody.receiveShadow = true;
  gift.add(giftBody);
  const giftLid = new THREE.Mesh(
    new THREE.BoxGeometry(1.48, 0.2, 1.2),
    new THREE.MeshStandardMaterial({ color: '#f9a8d4', roughness: 0.58 })
  );
  giftLid.position.y = 1.08;
  giftLid.castShadow = true;
  gift.add(giftLid);
  const ribbonMaterial = new THREE.MeshStandardMaterial({ color: '#facc15', metalness: 0.12, roughness: 0.4 });
  const ribbonVertical = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.25, 1.24), ribbonMaterial);
  ribbonVertical.position.y = 0.67;
  gift.add(ribbonVertical);
  const ribbonHorizontal = new THREE.Mesh(new THREE.BoxGeometry(1.46, 0.16, 0.18), ribbonMaterial);
  ribbonHorizontal.position.y = 1.13;
  gift.add(ribbonHorizontal);
  const bow = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.07, 8, 16), ribbonMaterial);
  bow.position.set(0, 1.31, 0);
  gift.add(bow);
  scene.add(gift);

  function worldX(x) {
    return (x - WIDTH / 2) * SCALE;
  }
  function worldZ(z) {
    return (z - HEIGHT / 2) * SCALE;
  }
  function updateCamera() {
    camera.position.set(
      target.x + orbit.radius * Math.sin(orbit.pitch) * Math.sin(orbit.yaw),
      target.y + orbit.radius * Math.cos(orbit.pitch),
      target.z + orbit.radius * Math.sin(orbit.pitch) * Math.cos(orbit.yaw)
    );
    camera.lookAt(target);
  }
  updateCamera();

  let dragging = false;
  let lastPointer = null;
  canvas.addEventListener('pointerdown', event => {
    dragging = true;
    lastPointer = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointermove', event => {
    if (!dragging || !lastPointer) return;
    orbit.yaw -= (event.clientX - lastPointer.x) * 0.008;
    orbit.pitch = THREE.MathUtils.clamp(orbit.pitch + (event.clientY - lastPointer.y) * 0.006, 0.35, 1.35);
    lastPointer = { x: event.clientX, y: event.clientY };
    updateCamera();
  });
  canvas.addEventListener('pointerup', () => {
    dragging = false;
    lastPointer = null;
  });
  canvas.addEventListener('pointercancel', () => {
    dragging = false;
    lastPointer = null;
  });
  canvas.addEventListener('wheel', event => {
    event.preventDefault();
    orbit.radius = THREE.MathUtils.clamp(orbit.radius + event.deltaY * 0.025, 22, 55);
    updateCamera();
  }, { passive: false });

  resize.observe(container);
  container.classList.add('three-ready');
  resizeRenderer();

  window.robotScene3D = {
    render({ mode, obstacles, bot: position, sensorDistance, trail, trailPoints, giftTarget, leftOnLine, rightOnLine }) {
      syncObstacles(mode === 'line' ? [] : obstacles);
      robot.position.set(worldX(position.x), 0, worldZ(position.y));
      robot.rotation.y = -position.a;
      lineTrack.visible = mode === 'line';
      gift.visible = mode === 'gift';
      gift.position.set(worldX(giftTarget.x), 0, worldZ(giftTarget.y));

      const points = trail && trailPoints.length > 1
        ? trailPoints.map(point => new THREE.Vector3(worldX(point[0]), 0.04, worldZ(point[1])))
        : [];
      const nextTrailSignature = trail ? `${trailPoints.length}:${trailPoints.length ? trailPoints[trailPoints.length - 1].join(',') : ''}` : '';
      if (nextTrailSignature !== trailSignature) {
        trailLine.geometry.dispose();
        trailLine.geometry = new THREE.BufferGeometry().setFromPoints(points);
        trailSignature = nextTrailSignature;
      }
      trailLine.visible = trail && points.length > 1;

      const forwardX = Math.cos(position.a);
      const forwardZ = Math.sin(position.a);
      const startX = position.x + forwardX * 20;
      const startZ = position.y + forwardZ * 20;
      const endX = startX + forwardX * sensorDistance;
      const endZ = startZ + forwardZ * sensorDistance;
      const rayPositions = ray.geometry.attributes.position;
      rayPositions.setXYZ(0, worldX(startX), 0.13, worldZ(startZ));
      rayPositions.setXYZ(1, worldX(endX), 0.13, worldZ(endZ));
      rayPositions.needsUpdate = true;
      ray.geometry.computeBoundingSphere();
      ray.visible = mode !== 'line';

      const sides = [-1, 1];
      sensorDots.forEach((dot, index) => {
        const side = sides[index];
        const x = position.x + forwardX * 16 + side * Math.sin(position.a) * 8;
        const z = position.y + forwardZ * 16 - side * Math.cos(position.a) * 8;
        dot.position.set(worldX(x), 0.12, worldZ(z));
        dot.material.color.set((index === 0 ? leftOnLine : rightOnLine) ? '#22c55e' : '#ef4444');
      });
      sensorDots.forEach(dot => { dot.visible = mode === 'line'; });
      renderer.render(scene, camera);
    }
  };
}

startScene();
