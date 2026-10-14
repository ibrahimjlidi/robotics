# Robot Simulator

A browser robotics simulator for students. Static site, no build step, installable as a mobile app (PWA).

## Learn robotics
The Learn Robotics area contains 12 kid-friendly sessions in English and simple Arabic. Use the language button to switch languages; Arabic lessons display right-to-left. Each separate, shareable lesson page includes an expanded explanation, an everyday example, code with a step-by-step walkthrough, discussion questions, a hands-on challenge, photos from Unsplash, and a lesson-specific diagram. Use the Previous/Next controls to move between sessions or open the page's simulator example.

## Real-world obstacle-avoiding robot
The Real-World Project page is available in English and simple Arabic, including its step-by-step 2WD Arduino build, parts list, wiring table, test instructions, troubleshooting, and classroom safety guidance. The example uses an HC-SR04 distance sensor and TB6612FNG motor driver. Its illustrative photos and sensor diagram are from Wikimedia Commons; each image credit links to its source and license. The Instructables article is linked as optional further reading and its text and photos are not reproduced.

The simulator arena uses a local Three.js module for its 3D floor, robot, obstacles, and gift. Drag the scene to orbit the camera and scroll to zoom; the existing obstacle sensing, collision behavior, and movement controls are retained. A 2D canvas remains available as a fallback when WebGL is unavailable.

## Four-week full-stack formation
The Full-Stack Formation section provides a bilingual 20-session course for four weeks of three-hour sessions. It covers entry assessment and digital foundations, HTML/CSS/JavaScript, React and Node.js/Express, Git and code review, responsible AI-assisted development, a team capstone, mentoring, presentations, and career next steps. Learners can track completed sessions in their browser. The instructor's session plans, preparation checklist, project brief, and assessment rubric are in [FORMATION-GUIDE.md](./FORMATION-GUIDE.md).

## Run locally
    npx serve .        # then open http://localhost:3000

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. vercel.com > Add New > Project > import the repo.
3. Framework Preset: **Other**. Leave build command and output directory empty. Deploy.
(or from this folder: `npx vercel --prod`)

## Deploy on Render
1. Push this folder to a GitHub repo.
2. render.com > New > **Static Site** > select the repo.
3. Build Command: leave empty. Publish Directory: `.`  Deploy.
(or New > Blueprint, which reads `render.yaml`)

## Install on a phone
Open the deployed URL (HTTPS) > browser menu > **Add to Home Screen**.

## Files
index.html (app) | robot-scene.js + vendor/ (local Three.js engine and license) | manifest.webmanifest + sw.js (PWA/offline) | icon-*.png | sawsen-video-qr.png (gift mission video QR) | vercel.json | render.yaml
