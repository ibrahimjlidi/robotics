window.FORMATION_LESSONS = [
  {
    code: '<h1>Our Club</h1>\n<p>We meet on Friday.</p>\n<button>See the plan</button>',
    output: {en:'A page title, one sentence, and a button.',ar:'عنوان للصفحة وجملة واحدة وزر.'},
    teach: {
      en:'A website is a set of pages that answers a real person’s question. Before writing code, decide who will use the page and what they need to find. During our course we will make one project: a helpful website for a school club.',
      ar:'الموقع صفحات تساعد شخصًا حقيقيًا. قبل كتابة الكود نحدد من سيستخدم الصفحة وما الذي يحتاج أن يعرفه. سنبني خلال التكوين موقعًا مفيدًا لنادٍ مدرسي.'
    },
    demo: {en:'Read the three-line sketch. Point to the heading, the club information, and the button. Ask: what should happen when the button is pressed?',ar:'اقرأ المثال من ثلاثة أسطر. أشر إلى العنوان ومعلومة النادي والزر. اسأل: ماذا يجب أن يحدث عندما نضغط الزر؟'},
    build: {
      en:['With a partner, name a club and its visitors.','Write three visitor questions, such as “When does it meet?”','Choose the most important answer for the first screen.'],
      ar:['مع زميل، اختر اسم النادي ومن سيزور الصفحة.','اكتب ثلاثة أسئلة قد يسألها الزائر، مثل: «متى يجتمع النادي؟»','اختر أهم جواب ليظهر في أول الشاشة.']
    },
    challenge: {en:'In one sentence, describe who our club website helps and what it helps them do.',ar:'اكتب جملة تصف من يساعد موقع النادي وماذا يساعده أن يفعل.'},
    answer: {en:'Example: “Our page helps new art-club members find the meeting time and what to bring.”',ar:'مثال: «تساعد صفحة النادي الفني الأعضاء الجدد على معرفة موعد اللقاء وما يجب إحضاره».'}
  },
  {
    code: 'const club = "Art Club";\n  const visitors = 12;\n  const welcome = `Welcome to ${club}!`;\n\n  if (visitors > 0) {\n    console.log(welcome);\n  }',
    output: {en:'The console prints: Welcome to Art Club!',ar:'تظهر في وحدة التحكم: Welcome to Art Club!'},
    teach: {
      en:'JavaScript values hold information. A const variable gives a value a name; a number is different from words in quotation marks. An if statement checks a true-or-false condition and runs its block only when the answer is true.',
      ar:'تحفظ قيم JavaScript المعلومات. يعطي const قيمة اسمًا. والرقم يختلف عن الكلمات بين علامتي تنصيص. يفحص if شرطًا صحيحًا أو خطأ، وينفذ التعليمات عندما يكون الشرط صحيحًا.'
    },
    demo: {en:'Change visitors from 12 to 0 and run the code again. Ask learners to predict what happens before you press Run.',ar:'غيّر visitors من 12 إلى 0 وشغّل الكود من جديد. اطلب من الأطفال توقع النتيجة قبل الضغط على Run.'},
    build: {
      en:['Create const club with your own club name.','Create const meetingDay with a day of the week.','Use console.log to print a friendly message containing both values.'],
      ar:['اكتب const باسم club واحفظ فيه اسم ناديك.','اكتب const باسم meetingDay واحفظ فيه يوم اللقاء.','استخدم console.log لطباعة رسالة لطيفة فيها القيمتان.']
    },
    challenge: {en:'If placesLeft is 0, print “Full”. Otherwise, print “Join us”. What should happen for 3 places?',ar:'إذا كان placesLeft يساوي صفرًا، اطبع «ممتلئ». وإلا اطبع «انضم إلينا». ماذا يظهر عندما تبقى ٣ أماكن؟'},
    answer: {en:'The condition placesLeft === 0 is false for 3, so the program prints “Join us”. Test zero too; then it should print “Full”.',ar:'الشرط placesLeft === 0 غير صحيح عندما تكون القيمة ٣، لذلك يطبع البرنامج «انضم إلينا». جرّب صفرًا أيضًا؛ عندها يطبع «ممتلئ».'}
  },
  {
    code: 'mkdir club-site\n  cd club-site\n  git init\n  git add index.html\n  git commit -m "Add club home page"\n  git log --oneline',
    output: {en:'A project folder and a named, saved Git change.',ar:'مجلد للمشروع وتغيير محفوظ باسمه في Git.'},
    teach: {
      en:'A project folder is a labelled box for related files. The terminal gives the computer short instructions. Git keeps snapshots called commits, so we can see how the project changed and return to a saved version.',
      ar:'مجلد المشروع صندوق يحمل اسمًا ويجمع الملفات المرتبطة. تعطي الطرفية أوامر قصيرة للكمبيوتر. ويحفظ Git نسخًا اسمها commits لنعرف كيف تغير المشروع ونعود إلى نسخة محفوظة.'
    },
    demo: {en:'Type one command at a time and explain the change. After git status, deliberately edit the commit message to show how a clear message tells a story.',ar:'اكتب أمرًا واحدًا كل مرة واشرح ما يفعله. بعد git status، جرّب كتابة رسالة commit واضحة تشرح التغيير.'},
    build: {
      en:['Make a folder named club-site and put index.html inside.','Run git init once, then git status to see the untracked file.','Save it with git add and commit using a message that says what changed.'],
      ar:['أنشئ مجلدًا اسمه club-site وضع index.html داخله.','شغّل git init مرة واحدة ثم git status لرؤية الملف الجديد.','احفظ الملف بـ git add وcommit واكتب رسالة تشرح التغيير.']
    },
    challenge: {en:'You changed the club heading and added a meeting time. Write a helpful commit message.',ar:'غيّرت عنوان النادي وأضفت وقت اللقاء. اكتب رسالة commit مفيدة.'},
    answer: {en:'Example: “Add meeting time to club home page”. A useful message describes the change, not just “update”.',ar:'مثال: «إضافة موعد اللقاء إلى صفحة النادي». تصف الرسالة المفيدة التغيير ولا تقول فقط «تحديث».'}
  },
  {
    code: 'const meetingDay = "";\n  const meetingTime = "15:00";\n\n  function describeMeeting(day, time) {\n    if (!day) return "Add a meeting day";\n    return `We meet on ${day} at ${time}`;\n  }\n\n  console.log(describeMeeting(meetingDay, meetingTime));',
    output: {en:'Add a meeting day. After filling in "Friday", the message includes Friday and 15:00.',ar:'Add a meeting day. وعند كتابة «Friday» يظهر اسم اليوم والساعة 15:00.'},
    teach: {
      en:'An algorithm is a set of steps to solve a problem. We can plan in plain language first, then turn each step into code. A function is a named recipe; an if statement can handle a missing answer instead of showing broken information.',
      ar:'الخوارزمية خطوات لحل مشكلة. نكتب الخطة بكلمات عادية، ثم نحوّل كل خطوة إلى كود. الدالة وصفة لها اسم، ويعالج if الإجابة الناقصة بدل عرض معلومات غير صحيحة.'
    },
    demo: {en:'Trace the function with an empty day, then with “Friday”. Follow the if return first and explain why the second message is not used until a day exists.',ar:'تتبّع الدالة مع يوم فارغ، ثم مع «Friday». اتبع if أولًا واشرح لماذا لا تظهر الرسالة الثانية إلا بعد كتابة اليوم.'},
    build: {
      en:['Write the steps: check the name; if it is empty, show a message; otherwise, greet the visitor.','Turn the steps into a function with an if and a return.','Test the function once with an empty name and once with “Lina”.'],
      ar:['اكتب الخطوات: افحص الاسم؛ إذا كان فارغًا أظهر رسالة؛ وإلا رحّب بالزائر.','حوّل الخطوات إلى دالة فيها if وreturn.','جرّبها مرة باسم فارغ ومرة باسم «Lina».']
    },
    challenge: {en:'Add a condition so that an empty club name prints “Choose a name”, and a filled name prints “Welcome to …”.',ar:'أضف شرطًا يجعل الاسم الفارغ يطبع «اختر اسمًا»، والاسم المكتوب يطبع «أهلًا بنادي…».'},
    answer: {en:'Check `if (!clubName) return "Choose a name";` before returning the welcome message. Test both branches.',ar:'افحص `if (!clubName) return "Choose a name";` قبل إعادة رسالة الترحيب. جرّب الطريقين.'}
  },
  {
    code: '<!doctype html>\n  <html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>Art Club</title>\n  </head>\n  <body>\n    <header><h1>Art Club</h1></header>\n    <main><p>We meet on Friday.</p></main>\n  </body>\n  </html>',
    output: {en:'A page with a browser-tab title, a main heading, and a club-information section.',ar:'صفحة لها عنوان في لسان المتصفح وعنوان رئيسي وقسم لمعلومات النادي.'},
    teach: {
      en:'HTML describes what each part of a page means. A heading names a topic, main contains the main information, and a paragraph contains a thought. Good structure helps browsers and people using assistive tools understand the page.',
      ar:'يشرح HTML معنى كل جزء من الصفحة. يعرّف العنوان الموضوع، ويحوي main المعلومات الأساسية، وتحوي الفقرة فكرة. يساعد التنظيم المتصفح وكل من يستخدم أدوات المساعدة على فهم الصفحة.'
    },
    demo: {en:'Show how the browser displays the same sentence inside p and h1. Explain that HTML tags give text its job; CSS will change how it looks later.',ar:'اعرض الجملة نفسها داخل p ثم داخل h1. اشرح أن وسوم HTML تعطي النص وظيفته، وسنغير شكله باستخدام CSS لاحقًا.'},
    build: {
      en:['Start a file with the doctype, html, head, and body.','Add a page title in head and one h1 in the page.','Add a main section with a sentence answering “What does our club do?”'],
      ar:['ابدأ ملفًا بـ doctype وhtml وhead وbody.','أضف عنوان الصفحة في head وعنوانًا رئيسيًا h1.','أضف قسم main وجملة تجيب: «ماذا يفعل نادينا؟»']
    },
    challenge: {en:'Add an h2 section called “What to bring” and a list with two supplies.',ar:'أضف قسمًا بعنوان h2 اسمه «ماذا نحضر؟» وقائمة فيها أداتان.'},
    answer: {en:'Use `<section><h2>What to bring</h2><ul><li>Sketchbook</li><li>Pencils</li></ul></section>`. Check that the browser shows two separate list items.',ar:'استخدم `<section><h2>ماذا نحضر؟</h2><ul><li>دفتر رسم</li><li>أقلام</li></ul></section>`. تأكد أن المتصفح يعرض عنصرين في القائمة.'}
  },
  {
    code: '<form id="signup">\n  <label for="name">Your name</label>\n  <input id="name" name="name" required>\n  <button type="submit">Join the club</button>\n  </form>\n  <p id="message" aria-live="polite"></p>',
    output: {en:'A labelled name field and a join button; the browser can stop an empty required field.',ar:'حقل اسم له عنوان وزر للانضمام؛ يمنع المتصفح إرسال الحقل المطلوب إذا كان فارغًا.'},
    teach: {
      en:'Forms let visitors send information. A label connected to an input tells everyone what belongs in the box. The required attribute gives the browser a simple check, and helpful feedback tells a person what happened.',
      ar:'تساعد النماذج الزوار على إرسال المعلومات. يخبر عنوان مرتبط بالحقل الجميع بما نكتبه فيه. ويطلب required من المتصفح فحص الحقل، وتوضح رسالة مفيدة ما حدث.'
    },
    demo: {en:'Click Join with an empty box, then enter a pretend name and try again. Use only made-up classroom details; never collect real private information for the demo.',ar:'اضغط زر الانضمام والصندوق فارغ، ثم أدخل اسمًا خياليًا وجرب ثانية. استخدم معلومات تدريب خيالية فقط ولا تجمع معلومات خاصة حقيقية.'},
    build: {
      en:['Add a label whose for value matches the input id.','Make the name field required and add a submit button.','Try empty and pretend-name values and explain the different results.'],
      ar:['أضف label واجعل قيمة for مطابقة لقيمة id في input.','اجعل حقل الاسم required وأضف زر إرسال.','جرّب الحقل الفارغ واسمًا خياليًا واشرح الفرق.']
    },
    challenge: {en:'Add a labelled email field. Which safety rule should we follow when showing our project?',ar:'أضف حقل بريد إلكتروني له عنوان. ما قاعدة الأمان التي نتبعها عند عرض المشروع؟'},
    answer: {en:'Match the label for and input id (for example email); keep demo details fictional and do not publish real addresses.',ar:'اجعل for في العنوان مثل id في الحقل (مثل email)، واستخدم بيانات خيالية ولا تنشر عناوين حقيقية.'}
  },
  {
    code: 'body {\n  font-family: system-ui, sans-serif;\n  margin: 0;\n  background: #f4f1ff;\n}\nmain {\n  max-width: 700px;\n  margin: 32px auto;\n  padding: 24px;\n}\nbutton { background: #4f46e5; color: white; }',
    output: {en:'Readable text, a centred content area, and a strong-colour button.',ar:'كتابة مقروءة ومحتوى في الوسط وزر بلون واضح.'},
    teach: {
      en:'CSS controls how a page looks. A selector chooses what to style and declarations set properties such as colour and space. A responsive design still fits when a screen becomes narrow; clear contrast makes reading easier.',
      ar:'يتحكم CSS في شكل الصفحة. يختار المحدد ما ننسقه، وتحدد الخصائص اللون والمسافة. يلائم التصميم المتجاوب الشاشات الضيقة، ويسهل التباين الواضح القراءة.'
    },
    demo: {en:'Change the page background colour and the main max-width. Resize the browser and notice that the page stays centred but uses available space.',ar:'غيّر لون خلفية الصفحة وعرض main الأقصى. صغّر المتصفح ولاحظ أن المحتوى يبقى في الوسط ويستخدم المساحة المتاحة.'},
    build: {
      en:['Create a file called style.css and connect it with a link element in head.','Style body text and the page background.','Add padding to the main section and adjust the browser width to test it.'],
      ar:['أنشئ ملفًا اسمه style.css واربطه بصفحة HTML باستخدام link في head.','نسّق كتابة body ولون الخلفية.','أضف مسافة داخل main وغيّر عرض المتصفح لاختباره.']
    },
    challenge: {en:'Choose a text colour and background colour that are easy to tell apart. Check them on a phone-sized screen.',ar:'اختر لون كتابة وخلفية يسهل التمييز بينهما. افحصهما على شاشة بحجم الهاتف.'},
    answer: {en:'There is no single correct colour pair. Keep the text readable, the button visibly different, and the layout within the narrow screen without sideways scrolling.',ar:'لا يوجد زوج ألوان وحيد صحيح. اجعل الكتابة واضحة والزر مختلفًا، واجعل الصفحة تلائم الشاشة الضيقة دون تمرير جانبي.'}
  },
  {
    code: 'const events = [\n  { title: "Drawing day", day: "Friday" },\n  { title: "Game night", day: "Monday" }\n];\n\nconst fridayEvents = events.filter(\n  event => event.day === "Friday"\n);\nconsole.log(fridayEvents[0].title);',
    output: {en:'Drawing day',ar:'Drawing day'},
    teach: {
      en:'An array holds a list of items. Each object keeps related facts together, like an event title and day. The filter method makes a new list containing only items that match a rule.',
      ar:'تحفظ المصفوفة قائمة عناصر. ويجمع الكائن المعلومات المرتبطة، مثل عنوان الفعالية ويومها. تنشئ filter قائمة جديدة بالعناصر التي تطابق الشرط.'
    },
    demo: {en:'Read one event object aloud: it has a title and a day. Change the filter to Monday and predict which title will appear before running the code.',ar:'اقرأ كائن فعالية بصوت واضح: له عنوان ويوم. غيّر شرط الاختيار إلى Monday وتوقع العنوان الذي سيظهر قبل تشغيل الكود.'},
    build: {
      en:['Add three pretend club events to the array.','Choose the events whose day matches a variable called chosenDay.','Print the count of matching events with matches.length.'],
      ar:['أضف ثلاث فعاليات خيالية للنادي إلى المصفوفة.','اختر الفعاليات التي يطابق يومها متغيرًا اسمه chosenDay.','اطبع عدد الفعاليات المختارة باستخدام matches.length.']
    },
    challenge: {en:'Find all events on Saturday. What should the program show if there are no Saturday events?',ar:'اختر كل فعاليات Saturday. ماذا يعرض البرنامج إذا لم توجد فعالية يوم السبت؟'},
    answer: {en:'Filter with event.day === "Saturday". The result is an empty array; show a friendly “No events yet” message instead of trying to display a missing item.',ar:'استخدم event.day === "Saturday". تكون النتيجة قائمة فارغة؛ اعرض «لا توجد فعاليات بعد» بدل محاولة عرض عنصر غير موجود.'}
  },
  {
    code: 'const form = document.querySelector("#signup");\n  const nameInput = document.querySelector("#name");\n  const message = document.querySelector("#message");\n\n  form.addEventListener("submit", event => {\n    event.preventDefault();\n    const name = nameInput.value.trim();\n    message.textContent = name\n      ? `Welcome, ${name}!`\n      : "Please enter your name.";\n  });',
    output: {en:'Submitting a pretend name shows a welcome; an empty value shows a helpful prompt.',ar:'إرسال اسم خيالي يعرض ترحيبًا، والاسم الفارغ يعرض طلبًا مفيدًا.'},
    teach: {
      en:'The browser can listen for events such as a button click or a form submission. A listener runs a function when the event happens. Updating the page lets the visitor see the result without loading a new page.',
      ar:'يستطيع المتصفح الاستماع إلى أحداث مثل ضغط زر أو إرسال نموذج. تعمل الدالة عندما يقع الحدث. وتغيير الصفحة أمامنا يري الزائر النتيجة دون فتح صفحة جديدة.'
    },
    demo: {en:'Submit the form and point to the message. Explain preventDefault: it stops the browser from navigating away so our JavaScript can respond.',ar:'أرسل النموذج وأشر إلى الرسالة. اشرح preventDefault: تمنع المتصفح من الانتقال، حتى يستطيع JavaScript الرد.'},
    build: {
      en:['Select the form, input, and message with querySelector.','Add a submit listener and call preventDefault.','Use textContent to show a welcome or a useful empty-input message.'],
      ar:['اختر form وinput والرسالة باستخدام querySelector.','أضف مستمع submit واستخدم preventDefault.','استخدم textContent لعرض الترحيب أو رسالة تفيد أن الحقل فارغ.']
    },
    challenge: {en:'After showing the welcome, clear the form field so the visitor can see that it was received.',ar:'بعد عرض الترحيب، أفرغ حقل النموذج حتى يعرف الزائر أن الطلب وصل.'},
    answer: {en:'Set `nameInput.value = "";` after creating the welcome message. Use a pretend name during the demonstration.',ar:'اكتب `nameInput.value = "";` بعد إنشاء رسالة الترحيب. استخدم اسمًا خياليًا أثناء العرض.'}
  },
  {
    code: 'async function loadEvents() {\n  const response = await fetch("/api/events");\n  if (!response.ok) {\n    throw new Error("Events could not be loaded");\n  }\n  const events = await response.json();\n  console.log(events);\n}\n\nloadEvents().catch(console.error);',
    output: {en:'The browser asks /api/events for a JSON list and displays an error if the request fails.',ar:'يطلب المتصفح قائمة JSON من /api/events ويعرض خطأ إذا لم ينجح الطلب.'},
    teach: {
      en:'The browser and server take turns sending messages. fetch sends a request; the server sends back a response with a status and sometimes JSON data. await lets our function wait for each answer in order.',
      ar:'يتبادل المتصفح والخادم الرسائل. يرسل fetch طلبًا؛ ويعيد الخادم جوابًا فيه رمز حالة وربما بيانات JSON. يجعل await الدالة تنتظر كل جواب بالترتيب.'
    },
    demo: {en:'Open the browser Network panel and run the request. Find the URL, status, and response. Then try a deliberately unavailable address and compare the result.',ar:'افتح لوحة Network في المتصفح وشغّل الطلب. ابحث عن العنوان ورمز الحالة والجواب، ثم جرّب عنوانًا غير موجود وقارن النتيجة.'},
    build: {
      en:['Run the prepared instructor API and note its address.','Fetch its events address and wait for the response.','Check response.ok before reading JSON and show a helpful error state.'],
      ar:['شغّل API الذي جهزه المدرس وسجل عنوانه.','أرسل fetch إلى عنوان الفعاليات وانتظر الرد.','افحص response.ok قبل قراءة JSON واعرض حالة خطأ مفيدة.']
    },
    challenge: {en:'What should the page display while it waits for the server? What could it show if the server is unavailable?',ar:'ماذا تعرض الصفحة وهي تنتظر الخادم؟ وماذا تعرض إذا لم يكن الخادم متاحًا؟'},
    answer: {en:'Show “Loading events…” while waiting. If the request fails, show “We could not load events. Try again.” Never pretend the data loaded successfully.',ar:'اعرض «جارٍ تحميل الفعاليات…» أثناء الانتظار. وإذا فشل الطلب، اعرض «لم نتمكن من تحميل الفعاليات، حاول مرة أخرى». لا تقل إن البيانات وصلت وهي لم تصل.'}
  },
  {
    code: 'git switch -c add-event-card\n  git status\n  git add index.html style.css\n  git commit -m "Add event card to club page"\n  git switch main\n  git merge add-event-card',
    output: {en:'A small change saved on its own branch, then added to the main version.',ar:'تغيير صغير محفوظ في فرع منفصل، ثم أُضيف إلى النسخة الرئيسية.'},
    teach: {
      en:'A branch is a safe path for one change. A teammate can review what changed before it joins the main project. Small commits and a clear description make changes easier to understand and fix.',
      ar:'الفرع مسار آمن لتغيير واحد. يستطيع زميل مراجعة التغيير قبل ضمه للمشروع الرئيسي. تسهل التغييرات الصغيرة والوصف الواضح فهم الكود وإصلاحه.'
    },
    demo: {en:'Draw main and a side branch. Save a pretend event-card change on the side, inspect git diff, then explain that real teams ask for a review before merging.',ar:'ارسم main وفرعًا جانبيًا. احفظ تغيير بطاقة فعالية في الفرع وافحص git diff، ثم اشرح أن الفريق يطلب مراجعة قبل الدمج.'},
    build: {
      en:['Create a branch with a name that says what you will change.','Edit the page and review git diff before saving.','Commit the change with a clear message; tell a partner what a reviewer should check.'],
      ar:['أنشئ فرعًا اسمه يوضح التغيير الذي ستعمله.','عدّل الصفحة وافحص git diff قبل الحفظ.','احفظ التغيير برسالة واضحة وأخبر زميلًا ما الذي يجب أن يفحصه.']
    },
    challenge: {en:'A teammate says, “This is wrong!” Rewrite the feedback so it names a possible test rather than blaming a person.',ar:'قال زميل: «هذا خطأ!». أعد كتابة الملاحظة لتقترح اختبارًا بدل لوم شخص.'},
    answer: {en:'Example: “Could we test the card when the event has no title?” Review the code kindly and ask about the specific behaviour.',ar:'مثال: «هل نجرب البطاقة عندما لا يكون للفعالية عنوان؟». راجع الكود بلطف واسأل عن السلوك المحدد.'}
  },
  {
    code: 'const countOpen = tasks =>\n  tasks.filter(task => !task.done).length;\n\nconsole.assert(countOpen([]) === 0, "empty list");\nconsole.assert(countOpen([\n  { done: false },\n  { done: true }\n]) === 1, "one open task");\nconsole.log("Both examples passed!");',
    output: {en:'The browser console reports “Both examples passed!” for the empty-list and mixed-task checks.',ar:'تعرض وحدة تحكم المتصفح «Both examples passed!» بعد فحص القائمة الفارغة والمهمتين.'},
    teach: {
      en:'A test is a question with an expected answer. A useful test checks an ordinary example and an edge case, such as an empty list. Clear function names and small jobs make the answer easier to predict.',
      ar:'الاختبار سؤال له إجابة متوقعة. يفحص الاختبار المفيد مثالًا عاديًا وحالة حدّية مثل القائمة الفارغة. تسهّل أسماء الدوال الواضحة ومهامها الصغيرة توقع النتيجة.'
    },
    demo: {en:'Paste the complete example in the browser console and run it. Change the expected 1 to 2 to make an assertion fail, read the message, then put 1 back.',ar:'الصق المثال كاملًا في وحدة تحكم المتصفح وشغّله. غيّر العدد المتوقع من 1 إلى 2 ليفشل التحقق. اقرأ الرسالة ثم أعد الرقم إلى 1.'},
    build: {
      en:['Write down what countOpen should return for an empty task list.','Add one open task and one completed task.','Run the test and read the message if the real result differs from your prediction.'],
      ar:['اكتب ما يجب أن تعيده countOpen للقائمة الفارغة.','أضف مهمة غير مكتملة ومهمة مكتملة.','شغّل الاختبار واقرأ الرسالة إذا اختلفت النتيجة عن توقعك.']
    },
    challenge: {en:'Add a test with three tasks: two done and one still open. How many should countOpen return?',ar:'أضف اختبارًا لثلاث مهام: اثنتان مكتملتان وواحدة مفتوحة. كم يجب أن تعيد countOpen؟'},
    answer: {en:'It should return 1. A test that catches a mistake gives us a repeatable clue that the code needs attention.',ar:'يجب أن تعيد 1. يكشف الاختبار الخطأ ويعطينا دليلًا يمكن تكراره لإصلاح الكود.'}
  },
  {
    code: 'import { useState } from "react";\n\nfunction EventCard({ event }) {\n  return <article><h2>{event.title}</h2><p>{event.day}</p></article>;\n}\n\nfunction ClubEvents() {\n  const [events, setEvents] = useState([\n    { id: "art-1", title: "Drawing day", day: "Friday" }\n  ]);\n  function addEvent() {\n    setEvents(current => [...current, {\n      id: "game-1", title: "Game night", day: "Monday"\n    }]);\n  }\n  return <section>\n    <button onClick={addEvent}>Add pretend event</button>\n    {events.map(event => <EventCard key={event.id} event={event} />)}\n  </section>;\n}',
    output: {en:'One event card appears. Press Add pretend event and a second card appears without reloading the page.',ar:'تظهر بطاقة فعالية واحدة. اضغط Add pretend event فتظهر بطاقة ثانية دون إعادة تحميل الصفحة.'},
    teach: {
      en:'React components are reusable pieces of a screen. A prop passes information into a component, like handing a recipe one event. State remembers the current event list; its setter changes the list, and React redraws the cards.',
      ar:'مكونات React أجزاء من الشاشة نعيد استخدامها. تنقل prop المعلومات إلى المكوّن، مثل إعطائه بيانات فعالية. وتحفظ الحالة قائمة الفعاليات الحالية. يغيرها setter ويعيد React رسم البطاقات.'
    },
    demo: {en:'Run the starter page with one pretend event. Click Add pretend event and watch the new card appear. Highlight useState, setEvents, and the event prop on EventCard.',ar:'شغّل صفحة البداية بفعالية خيالية واحدة. اضغط Add pretend event وشاهد البطاقة الجديدة. وضح useState وsetEvents وبيانات الفعالية المرسلة إلى EventCard.'},
    build: {
      en:['Create an EventCard component that displays event.title.','Keep the event list in useState and render it with map.','Add a button that appends one pretend event using setEvents.'],
      ar:['أنشئ مكون EventCard يعرض event.title.','احفظ قائمة الفعاليات في useState واعرضها باستخدام map.','أضف زرًا يضيف فعالية خيالية باستخدام setEvents.']
    },
    challenge: {en:'Why does React show the new card after setEvents runs?',ar:'لماذا يعرض React البطاقة الجديدة بعد تشغيل setEvents؟'},
    answer: {en:'The new event list becomes component state. React renders the component again, maps over the updated list, and makes an EventCard for the new event.',ar:'تصبح القائمة الجديدة حالة للمكوّن. يعرض React المكوّن مجددًا ويحوّل كل عنصر إلى EventCard للفعالية الجديدة.'}
  },
  {
    code: 'const message = `Explain this function in simple words:\n\\n${smallFunction}`;\n\n// Use a made-up example only.\n// Read the suggestion; do not trust it yet.\n// Run tests and check documentation.\n// Keep passwords and private information out.',
    output: {en:'A safe question using made-up example code, followed by independent checks.',ar:'سؤال آمن يستخدم مثالًا خياليًا مع فحوص مستقلة بعد ذلك.'},
    teach: {
      en:'An AI coding helper can suggest an explanation or a test, but it can be confidently wrong. You are the builder: protect private information, run the code, and compare the answer with trusted docs and tests before keeping it.',
      ar:'قد تقترح أداة الذكاء الاصطناعي شرحًا أو اختبارًا، لكنها قد تخطئ بثقة. أنت المطور: احمِ المعلومات الخاصة وشغّل الكود وقارن الإجابة بالوثائق والاختبارات قبل استخدامها.'
    },
    demo: {en:'Show a made-up helper function. Ask an approved tool to explain it without sharing real data. Check one statement against the code, then deliberately test an edge case.',ar:'اعرض دالة خيالية واطلب من أداة معتمدة شرحها دون معلومات حقيقية. افحص جملة واحدة في الكود ثم جرّب حالة حدّية.'},
    build: {
      en:['Use a short sample function with pretend information.','Ask for an explanation or an extra test, not for a full unchecked app.','Verify the suggestion by running it and reading trusted documentation.'],
      ar:['استخدم دالة قصيرة ومعلومات خيالية.','اطلب شرحًا أو اختبارًا إضافيًا بدل تطبيق كامل غير مفحوص.','افحص الاقتراح بتشغيله وقراءة وثائق موثوقة.']
    },
    challenge: {en:'The helper suggests code that handles an empty array incorrectly. What three checks can you make before accepting it?',ar:'اقترحت الأداة كودًا يتعامل مع المصفوفة الفارغة بشكل خاطئ. ما الفحوص الثلاثة التي تجريها قبل قبول الاقتراح؟'},
    answer: {en:'Read the code yourself, test it with an empty array, and check reliable documentation. Never include a real password, secret key, or private person’s details.',ar:'اقرأ الكود بنفسك واختبره بمصفوفة فارغة وافحص وثائق موثوقة. لا تضع كلمة مرور أو مفتاحًا سريًا أو معلومات شخص حقيقية.'}
  },
  {
    code: 'User story:\n  As a new club member,\n  I want to see when the club meets,\n  so I know when to arrive.\n\n  Acceptance checks:\n  1. The meeting day is visible.\n  2. The time is shown beside it.\n  3. Both remain readable on a phone.',
    output: {en:'A small feature with three checks the team can actually test.',ar:'ميزة صغيرة لها ثلاثة شروط يستطيع الفريق اختبارها.'},
    teach: {
      en:'A user story describes who needs something and why. Acceptance checks turn that need into things we can see and test. A good project starts with the smallest useful feature, not a list of every possible idea.',
      ar:'تشرح قصة المستخدم من يحتاج الشيء ولماذا. وتحول شروط القبول الحاجة إلى أشياء نراها ونختبرها. يبدأ المشروع بميزة صغيرة مفيدة لا بقائمة طويلة من الأفكار.'
    },
    demo: {en:'Read the story and underline the person, the need, and the reason. Turn each of the three checks into a question the team can answer yes or no.',ar:'اقرأ القصة وحدد الشخص والحاجة والسبب. حوّل كل شرط من الشروط الثلاثة إلى سؤال يجيب عنه الفريق بنعم أو لا.'},
    build: {
      en:['Choose a visitor for the club website.','Write one sentence saying what that visitor needs and why.','List two or three visible checks that prove the feature works.'],
      ar:['اختر زائرًا لموقع النادي.','اكتب جملة تقول ماذا يحتاج الزائر ولماذا.','اكتب شرطين أو ثلاثة يمكن رؤيتها للتأكد من عمل الميزة.']
    },
    challenge: {en:'Can the team build a complete online shop, chat system, and event planner today? Choose the smallest helpful slice instead.',ar:'هل يستطيع الفريق بناء متجر ومحادثة ومنظم فعاليات كامل اليوم؟ اختر أصغر جزء مفيد بدل ذلك.'},
    answer: {en:'Start with one user journey, such as displaying the next club meeting. Agree on what learners should see, build and test it, then decide what belongs in a later version.',ar:'ابدأ برحلة واحدة مثل عرض موعد لقاء النادي القادم. اتفقوا على ما يجب أن يظهر وابنوه واختبروه، ثم اختاروا ما يؤجل لنسخة قادمة.'}
  },
  {
    code: 'function EventList({ events }) {\n  if (events.length === 0) {\n    return <p>No events yet.</p>;\n  }\n\n  return events.map(event => (\n    <EventCard key={event.id} event={event} />\n  ));\n}',
    output: {en:'The page shows a kind empty-state message or an event card for each event.',ar:'تعرض الصفحة رسالة لطيفة عندما لا توجد فعاليات، أو بطاقة لكل فعالية.'},
    teach: {
      en:'A vertical slice follows one feature all the way through: a person sees the screen, information travels to the server, and the useful answer returns. Finishing one small journey helps us discover real problems early.',
      ar:'الميزة الكاملة رحلة تمر بكل الأجزاء: يرى الشخص الشاشة وتصل المعلومات إلى الخادم ثم يعود الجواب. يساعد إكمال رحلة صغيرة على اكتشاف المشكلات الحقيقية مبكرًا.'
    },
    demo: {en:'Render EventList with an empty array and then with one pretend event. Trace the event from its data through the component to the visible card.',ar:'اعرض EventList بمصفوفة فارغة ثم بفعالية خيالية واحدة. تتبع البيانات عبر المكوّن إلى أن تصبح بطاقة ظاهرة.'},
    build: {
      en:['Agree on the smallest useful club feature and its acceptance checks.','Build one complete path from button or page to saved/sample data and back.','Ask a partner to try the feature without you giving instructions.'],
      ar:['اتفقوا على أصغر ميزة مفيدة للنادي وشروط قبولها.','ابنوا طريقًا كاملًا من الصفحة أو الزر إلى البيانات ثم عودتها.','اطلب من زميل تجربة الميزة دون أن تعطيه تعليمات.']
    },
    challenge: {en:'Show what a person sees when there are no events yet. Why is an empty screen confusing?',ar:'أظهر ما يراه الشخص إذا لم توجد فعاليات بعد. لماذا تكون الشاشة الفارغة محيرة؟'},
    answer: {en:'Show “No events yet” and, if appropriate, a clear way to add the first event. Do not display a broken card or pretend a request succeeded.',ar:'اعرض «لا توجد فعاليات بعد» وطريقة واضحة لإضافة الأولى عند الحاجة. لا تعرض بطاقة مكسورة أو تقل إن الطلب نجح وهو لم ينجح.'}
  },
  {
    code: 'app.use(express.json());\n\napp.post("/api/events", (req, res) => {\n  const title = req.body.title?.trim();\n  if (!title) {\n    return res.status(400).json({ error: "Add a title" });\n  }\n\n  db.run(\n    "INSERT INTO events (title) VALUES (?)",\n    [title],\n    function (error) {\n      if (error) {\n        return res.status(500).json({ error: "Could not save" });\n      }\n      res.status(201).json({ id: this.lastID, title });\n    }\n  );\n});',
    output: {en:'A valid pretend event is saved in SQLite and gets a success response. An empty title gets an error instead.',ar:'تُحفظ الفعالية الخيالية ذات العنوان في SQLite ويعود جواب نجاح. أما العنوان الفارغ فيُرفض.'},
    teach: {
      en:'A full-stack feature travels from the React form to an Express route and then into SQLite. The server checks the title and uses a database placeholder for the value; it never pastes user input into the SQL command. After saving, the browser can load the new item again.',
      ar:'تنتقل الميزة الكاملة من نموذج React إلى مسار Express ثم إلى SQLite. يفحص الخادم العنوان ويستخدم علامة موضع للبيانات في أمر قاعدة البيانات، ولا يضيف نص المستخدم مباشرة إلى SQL. وبعد الحفظ تستطيع الصفحة قراءة العنصر من جديد.'
    },
    demo: {en:'Trace one pretend event from the React form, through the POST route, into the prepared events table. Submit an empty title to see the 400 response; submit a title and then reload the list to confirm the row was saved.',ar:'تتبع فعالية خيالية من نموذج React إلى مسار POST ثم جدول الفعاليات الجاهز. أرسل عنوانًا فارغًا لرؤية جواب 400. أرسل عنوانًا ثم أعد تحميل القائمة للتأكد من حفظه.'},
    build: {
      en:['Connect a pretend club-event form to a POST /api/events request.','Check the title on the server and insert it into the prepared SQLite table using a placeholder.','Reload the events list and test again with an empty title.'],
      ar:['اربط نموذج فعالية خيالية بطلب POST /api/events.','افحص العنوان في الخادم واحفظه في جدول SQLite الجاهز باستخدام علامة موضع.','أعد تحميل قائمة الفعاليات ثم جرّب عنوانًا فارغًا.']
    },
    challenge: {en:'Why do we check the title and use the SQL placeholder ? instead of joining the title text into the SQL command?',ar:'لماذا نفحص العنوان ونستخدم علامة SQL النائبة ? بدل إضافة نص العنوان مباشرة إلى الأمر؟'},
    answer: {en:'The check rejects an empty title, and the database parameter keeps user text separate from the SQL instructions. If saving fails, return an honest error; never report success for a failed save.',ar:'يرفض الفحص العنوان الفارغ، ويفصل المتغير المرسل عن تعليمات SQL. وإذا فشل الحفظ، نعيد خطأً صادقًا ولا نقول إن الحفظ نجح.'}
  },
  {
    code: 'Before demo:\n  [ ] Main feature works\n  [ ] Empty input is checked\n  [ ] Loading and error are clear\n  [ ] Phone layout fits\n  [ ] Tests pass\n  [ ] README explains how to run it\n  [ ] No passwords or secret keys',
    output: {en:'A release checklist with visible tests for the feature, setup, and privacy.',ar:'قائمة تسليم فيها فحوص واضحة للميزة والإعداد والخصوصية.'},
    teach: {
      en:'Quality means doing what we promised and telling the truth when something fails. Tests check remembered examples; peer review brings another pair of eyes. A README lets a new teammate run the project.',
      ar:'تعني الجودة أن يعمل ما وعدنا به وأن نقول الحقيقة عندما يفشل. تفحص الاختبارات أمثلة محفوظة، وتضيف مراجعة الزميل عينًا أخرى. يساعد README زميلًا جديدًا على تشغيل المشروع.'
    },
    demo: {en:'Follow the team’s own README from a fresh folder. Ask a classmate to run its instructions without help; note the first confusing step.',ar:'اتبع README الخاص بالفريق من مجلد جديد. اطلب من زميل تشغيل التعليمات دون مساعدة وسجل أول خطوة غامضة.'},
    build: {
      en:['Run the tests and one empty-input example.','Check the page using a keyboard and narrow screen.','Ask another team to follow the README; fix one confusing step and scan for secrets.'],
      ar:['شغّل الاختبارات وجرب المدخل الفارغ.','افحص الصفحة بلوحة المفاتيح وعلى شاشة ضيقة.','اطلب من فريق آخر اتباع README، وأصلح خطوة غامضة وافحص عدم وجود أسرار.']
    },
    challenge: {en:'A test fails on a real problem. Should we hide the message so the demo looks successful?',ar:'فشل الاختبار بسبب مشكلة حقيقية. هل نخفي الرسالة كي يبدو العرض ناجحًا؟'},
    answer: {en:'No. Find and fix the cause or explain the known limitation honestly. Never publish secret keys or claim that a broken feature works.',ar:'لا. ابحث عن السبب وأصلحه أو اشرح الحدود بصراحة. لا تنشر مفاتيح سرية ولا تقل إن الميزة تعمل وهي مكسورة.'}
  },
  {
    code: '60-second demo:\n  1. Our club website helps ______.\n  2. The visitor can ______.\n  3. Watch what happens when I ______.\n  4. One thing we learned was ______.\n  5. Next, we would improve ______.',
    output: {en:'A short demonstration that names its user, shows a real feature, and reflects on learning.',ar:'عرض قصير يوضح المستخدم ويظهر ميزة حقيقية ويذكر ما تعلمناه.'},
    teach: {
      en:'A useful presentation tells a small true story: who had a problem, what the team built, and how we know it works. A mentor listens, asks a useful question, and helps us choose the next step without taking over.',
      ar:'يحكي العرض المفيد قصة حقيقية قصيرة: من واجه مشكلة وماذا بنى الفريق وكيف نعرف أنه يعمل. يستمع المرشد ويسأل سؤالًا مفيدًا ويساعدنا في اختيار الخطوة دون أن يحل محلنا.'
    },
    demo: {en:'Model a 60-second demo with the finished class project. Point to the working feature as you describe it; if it fails, explain the real result calmly.',ar:'قدم عرضًا مدته ٦٠ ثانية للمشروع. أشر إلى الميزة وهي تعمل، وإذا فشلت اشرح النتيجة الحقيقية بهدوء.'},
    build: {
      en:['Practise the five sentence starters with a partner.','Show the project rather than reading every line of code.','Ask the audience one question and rehearse a kind answer.'],
      ar:['تدرب مع زميل على بدايات الجمل الخمس.','اعرض المشروع بدل قراءة كل سطر من الكود.','اسأل الجمهور سؤالًا وتدرب على إجابة لطيفة.']
    },
    challenge: {en:'Your audience asks why a feature works this way. How can you explain your decision and one thing you might change?',ar:'سأل الجمهور لماذا تعمل الميزة بهذه الطريقة. كيف تشرح قرارك وشيئًا قد تغيّره؟'},
    answer: {en:'Describe the user need, show the relevant example, explain what you chose, and welcome another idea. It is okay to say, “We have not tested that yet.”',ar:'اشرح حاجة المستخدم واعرض المثال المرتبط وسبب اختيارك، ثم رحب بفكرة أخرى. من الجيد أن تقول: «لم نختبر هذا بعد».'}
  },
  {
    code: '<button id="try-it">Say hello</button>\n<p id="message" aria-live="polite"></p>\n\n<script>\n  function showThanks() {\n    document.querySelector("#message").textContent =\n      "Thanks for visiting our club!";\n  }\n  document.querySelector("#try-it")\n    .addEventListener("click", showThanks);\n</script>',
    output: {en:'A working project demo, an explained code choice, and one next learning goal.',ar:'عرض مشروع يعمل وقرار برمجي مفهوم وهدف تعلم للخطوة القادمة.'},
    teach: {
      en:'A finished first version is a beginning, not the end of learning. Show the feature, credit what teammates contributed, listen to kind feedback, and choose one improvement you can realistically make next.',
      ar:'النسخة الأولى بداية وليست نهاية التعلم. اعرض الميزة واشكر مساهمة زملائك واستمع للملاحظات اللطيفة واختر تحسينًا واحدًا تستطيع إنجازه.'
    },
    demo: {en:'Invite each team to run its main feature and explain one code choice in plain language. Let listeners name one strength and ask one curious question.',ar:'اطلب من كل فريق تشغيل ميزته الأساسية وشرح قرار برمجي بكلمات بسيطة. ليذكر المستمعون نقطة قوة ويسألوا سؤالًا باهتمام.'},
    build: {
      en:['Show the page to a new visitor and let them try the feature.','Explain one bug or change that helped the team learn.','Write one small goal and a day to try it during the next 30 days.'],
      ar:['اعرض الصفحة على زائر جديد ودعه يجرب الميزة.','اشرح خطأً أو تغييرًا ساعد الفريق على التعلم.','اكتب هدفًا صغيرًا ويومًا للعمل عليه خلال الثلاثين يومًا القادمة.']
    },
    challenge: {en:'Name one new skill, one teammate you would like to thank, and one thing you want to build next.',ar:'اذكر مهارة جديدة وزميلًا تحب شكره وشيئًا تريد بناءه بعد ذلك.'},
    answer: {en:'Answers are personal. Make the next step small, safe, and specific, such as “On Saturday I will add one accessible photo caption to my club page.”',ar:'الإجابة شخصية. اجعل الخطوة صغيرة وآمنة ومحددة، مثل: «يوم السبت سأضيف وصفًا واضحًا لصورة في صفحة النادي».'}
  }
];
