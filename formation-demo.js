(() => {
  const text = (en, ar) => ({ en, ar });
  const field = (key, label, type = 'text', value = '', options = []) => ({ key, label, type, value, options });
  const choice = (value, en, ar) => ({ value, label: text(en, ar) });
  const examples = [
    {
      label: text('Browser preview · press the page button', 'معاينة الصفحة · اضغط زرها'),
      ready: text('Run the example to open the meeting plan.', 'شغّل المثال لفتح خطة اللقاء.'),
      run: (values, state, lang) => {
        state.open = !state.open;
        return state.open
          ? (lang === 'ar' ? 'Art Club\nWe meet on Friday.\nالخطة: نحضر دفتر رسم وأقلامًا.' : 'Art Club\nWe meet on Friday.\nPlan: bring a sketchbook and pencils.')
          : (lang === 'ar' ? 'Art Club\nWe meet on Friday.\nأُغلقت الخطة.' : 'Art Club\nWe meet on Friday.\nThe plan is closed.');
      }
    },
    {
      label: text('JavaScript simulation · change the visitors value', 'محاكاة JavaScript · غيّر عدد الزوار'),
      ready: text('The example starts with 12 visitors. Try 0 to see the other branch.', 'يبدأ المثال بـ ١٢ زائرًا. جرّب 0 لرؤية المسار الآخر.'),
      fields: [field('visitors', text('visitors (whole number)', 'visitors (عدد صحيح)'), 'number', '12')],
      run: (values, state, lang) => {
        const visitors = Number(values.visitors);
        if (values.visitors.trim() === '' || !Number.isInteger(visitors) || visitors < 0) {
          return lang === 'ar' ? 'أدخل عددًا صحيحًا يساوي صفرًا أو أكثر.' : 'Enter a whole number of 0 or more.';
        }
        return visitors > 0
          ? '> console.log(welcome)\nWelcome to Art Club!'
          : `> if (visitors > 0) → false\n${lang === 'ar' ? 'لا يطبع البرنامج رسالة لأن عدد الزوار صفر.' : 'No message is printed because visitors is 0.'}`;
      }
    },
    {
      label: text('Git terminal simulation · save one project checkpoint', 'محاكاة طرفية Git · احفظ نقطة للمشروع'),
      ready: text('The page is a new file. Run each Git command in order.', 'الصفحة ملف جديد. نفّذ أوامر Git بالترتيب.'),
      run: (values, state, lang) => {
        state.step = state.step || 0;
        const steps = lang === 'ar'
          ? ['> mkdir club-site\nأُنشئ مجلد المشروع.', '> cd club-site\nأصبحت داخل مجلد المشروع.', '> git init\nأصبح المجلد مستودع Git.', '> git status\nملف غير متتبّع: index.html', '> git add index.html\nأُضيف index.html إلى منطقة التجهيز.', '> git commit -m "Add club home page"\nحُفظ التغيير في commit.', '> git log --oneline\n1a2b3c Add club home page\nانتهت المحاكاة. لم يتغير أي ملف حقيقي.']
          : ['> mkdir club-site\nCreated the project folder.', '> cd club-site\nMoved into the project folder.', '> git init\nInitialised an empty Git repository.', '> git status\nUntracked file: index.html', '> git add index.html\nindex.html is staged.', '> git commit -m "Add club home page"\nChange saved in a commit.', '> git log --oneline\n1a2b3c Add club home page\nSimulation finished. No real files were changed.'];
        const output = steps[Math.min(state.step, steps.length - 1)];
        state.step += 1;
        return output;
      }
    },
    {
      label: text('Function simulation · try an empty day, then Friday', 'محاكاة الدالة · جرّب يومًا فارغًا ثم Friday'),
      ready: text('The example starts with an empty meeting day.', 'يبدأ المثال بيوم لقاء فارغ.'),
      fields: [field('day', text('Meeting day', 'يوم اللقاء'), 'text', '')],
      run: (values, state, lang) => values.day.trim()
        ? (lang === 'ar' ? `We meet on ${values.day.trim()} at 15:00` : `We meet on ${values.day.trim()} at 15:00`)
        : (lang === 'ar' ? 'أضف يوم اللقاء' : 'Add a meeting day')
    },
    {
      label: text('HTML browser preview · change the heading level', 'معاينة HTML · غيّر مستوى العنوان'),
      ready: text('The browser gives h1 and p different meanings and sizes.', 'يعرض المتصفح h1 وp بمعنيين وحجمين مختلفين.'),
      fields: [field('heading', text('Heading style', 'شكل العنوان'), 'select', 'h1', [
        choice('h1', 'Main heading (h1)', 'عنوان رئيسي (h1)'),
        choice('h2', 'Section heading (h2)', 'عنوان قسم (h2)')
      ])],
      run: values => values.heading === 'h2'
        ? '<h2>Art Club</h2>\n<p>We meet on Friday.</p>'
        : '<h1>Art Club</h1>\n<p>We meet on Friday.</p>'
    },
    {
      label: text('Form simulation · use pretend information only', 'محاكاة نموذج · استخدم معلومات خيالية فقط'),
      ready: text('Try submitting an empty name, then enter a pretend name.', 'جرّب إرسال اسم فارغ، ثم أدخل اسمًا خياليًا.'),
      fields: [field('name', text('Pretend member name', 'اسم عضو خيالي'))],
      run: (values, state, lang) => values.name.trim()
        ? (lang === 'ar' ? `أهلًا ${values.name.trim()}! تم قبول الاسم الخيالي.` : `Welcome, ${values.name.trim()}! The pretend name was accepted.`)
        : (lang === 'ar' ? 'الاسم مطلوب. لم يتم إرسال النموذج.' : 'Name is required. The form was not submitted.')
    },
    {
      label: text('Responsive CSS preview · change the screen width', 'معاينة CSS المتجاوب · غيّر عرض الشاشة'),
      ready: text('Try a phone width and a wide-screen width.', 'جرّب عرض الهاتف وعرض الشاشة الكبيرة.'),
      fields: [field('width', text('Preview width', 'عرض المعاينة'), 'select', '375', [
        choice('375', 'Phone · 375 px', 'هاتف · ٣٧٥ بكسل'),
        choice('768', 'Tablet · 768 px', 'لوحي · ٧٦٨ بكسل'),
        choice('1280', 'Wide screen · 1280 px', 'شاشة كبيرة · ١٢٨٠ بكسل')
      ])],
      run: (values, state, lang) => {
        const width = Number(values.width);
        const content = Math.min(width - 32, 700);
        return lang === 'ar'
          ? `عرض الشاشة: ${width}px\nعرض المحتوى: ${content}px\n${width < 520 ? 'يستخدم المحتوى عرض الهاتف دون تمرير جانبي.' : 'المحتوى في الوسط ويستخدم عرضًا مناسبًا.'}`
          : `Screen: ${width}px\nContent: ${content}px\n${width < 520 ? 'Content fits the phone; no sideways scrolling.' : 'Content is centred at a comfortable width.'}`;
      }
    },
    {
      label: text('JavaScript filter simulation · choose a day', 'محاكاة فلتر JavaScript · اختر يومًا'),
      ready: text('Two pretend events are ready: Drawing day (Friday) and Game night (Monday).', 'لدينا فعاليتان خياليتان: Drawing day يوم Friday وGame night يوم Monday.'),
      fields: [field('day', text('Show events on', 'اعرض فعاليات يوم'), 'select', 'Friday', [
        choice('Friday', 'Friday', 'Friday'),
        choice('Monday', 'Monday', 'Monday'),
        choice('Saturday', 'Saturday', 'Saturday')
      ])],
      run: (values, state, lang) => {
        const events = [{ title: 'Drawing day', day: 'Friday' }, { title: 'Game night', day: 'Monday' }];
        const matches = events.filter(event => event.day === values.day);
        return matches.length ? matches.map(event => `${event.title} · ${event.day}`).join('\n')
          : (lang === 'ar' ? 'لا توجد فعاليات في هذا اليوم.' : 'No events on this day.');
      }
    },
    {
      label: text('DOM event simulation · submit a pretend name', 'محاكاة حدث DOM · أرسل اسمًا خياليًا'),
      ready: text('The submit event updates the message without leaving the page.', 'يغيّر حدث الإرسال الرسالة دون مغادرة الصفحة.'),
      fields: [field('name', text('Pretend name', 'اسم خيالي'))],
      run: (values, state, lang) => values.name.trim()
        ? (lang === 'ar' ? `رسالة الصفحة: Welcome, ${values.name.trim()}!` : `Page message: Welcome, ${values.name.trim()}!`)
        : (lang === 'ar' ? 'رسالة الصفحة: Please enter your name.' : 'Page message: Please enter your name.')
    },
    {
      label: text('HTTP request simulation · no real server is contacted', 'محاكاة طلب HTTP · لا نتصل بخادم حقيقي'),
      ready: text('Choose a response to see how the page handles success and failure.', 'اختر جوابًا لترى كيف تتعامل الصفحة مع النجاح والفشل.'),
      fields: [field('response', text('API response', 'جواب API'), 'select', 'ok', [
        choice('ok', 'Available · 200 OK', 'متاح · 200 OK'),
        choice('error', 'Unavailable · network error', 'غير متاح · خطأ شبكة')
      ])],
      run: (values, state, lang) => values.response === 'ok'
        ? 'GET /api/events → 200 OK\n[{"title":"Drawing day","day":"Friday"}]'
        : (lang === 'ar' ? 'GET /api/events → فشل الطلب\nتعذر تحميل الفعاليات. حاول مرة أخرى.' : 'GET /api/events → request failed\nCould not load events. Try again.')
    },
    {
      label: text('Git branch simulation · create, review, and merge', 'محاكاة فروع Git · أنشئ وراجع وادمج'),
      ready: text('Follow one change from a safe branch to main.', 'تابع تغييرًا من فرع آمن إلى main.'),
      run: (values, state, lang) => {
        state.step = state.step || 0;
        const steps = lang === 'ar'
          ? ['> git switch -c add-event-card\nأُنشئ الفرع الجديد.', '> git diff\nالتغيير: إضافة بطاقة فعالية.', '> git switch main\n> git merge add-event-card\nاندمج التغيير بعد المراجعة.']
          : ['> git switch -c add-event-card\nCreated the new branch.', '> git diff\nChange: add an event card.', '> git switch main\n> git merge add-event-card\nMerged after review.'];
        const output = steps[Math.min(state.step, steps.length - 1)];
        state.step = (state.step + 1) % steps.length;
        return output;
      }
    },
    {
      label: text('Test runner · compare expected and actual results', 'مشغّل الاختبارات · قارن المتوقع بالنتيجة'),
      ready: text('Run the empty-list and mixed-task checks.', 'شغّل فحص القائمة الفارغة وفحص المهمتين.'),
      fields: [field('breakTest', text('Make one expected result wrong', 'اجعل نتيجة متوقعة واحدة خاطئة'), 'checkbox', 'false')],
      run: (values, state, lang) => values.breakTest === 'true'
        ? (lang === 'ar' ? '✗ فشل: المتوقع 2، لكن النتيجة 1.\nأعد القيمة المتوقعة إلى 1 ثم شغّل الاختبار.' : '✗ Failed: expected 2, received 1.\nRestore the expected value to 1 and run again.')
        : (lang === 'ar' ? '✓ القائمة الفارغة: 0 مفتوحة.\n✓ مهمة مفتوحة وأخرى مكتملة: 1 مفتوحة.\nنجحت الاختبارات.' : '✓ Empty list: 0 open.\n✓ One open and one completed task: 1 open.\nAll tests passed.')
    },
    {
      label: text('React state simulation · add an event card', 'محاكاة حالة React · أضف بطاقة فعالية'),
      ready: text('One event is in the list. Run the example to add another.', 'توجد فعالية واحدة. شغّل المثال لإضافة أخرى.'),
      run: (values, state, lang) => {
        state.events = state.events || ['Drawing day · Friday'];
        state.events.push(state.events.length % 2 ? 'Game night · Monday' : 'Robot club · Wednesday');
        return `${lang === 'ar' ? 'بطاقات الفعاليات (تُعاد الصفحة بعد تحديث الحالة):' : 'Event cards (rendered again after state changes):'}\n${state.events.map(event => `• ${event}`).join('\n')}`;
      }
    },
    {
      label: text('AI suggestion review simulation · test before trusting', 'محاكاة مراجعة اقتراح ذكي · اختبر قبل الثقة'),
      ready: text('The sample suggestion forgot to handle an empty list. Run the checks.', 'نسي الاقتراح التجريبي التعامل مع القائمة الفارغة. شغّل الفحوص.'),
      fields: [field('case', text('Check this case', 'افحص هذه الحالة'), 'select', 'empty', [
        choice('normal', 'One open and one done', 'مهمة مفتوحة وأخرى مكتملة'),
        choice('empty', 'Empty list (edge case)', 'قائمة فارغة (حالة خاصة)')
      ])],
      run: (values, state, lang) => values.case === 'empty'
        ? (lang === 'ar' ? 'فشل الفحص: الاقتراح يحاول قراءة أول عنصر من قائمة فارغة.\nالقرار: لا تقبل الاقتراح قبل إصلاحه.' : 'Check failed: the suggestion reads the first item of an empty list.\nDecision: do not accept it until fixed.')
        : (lang === 'ar' ? 'نجح المثال العادي: بقيت مهمة واحدة مفتوحة.\nافحص أيضًا الحالات الخاصة والوثائق قبل استخدام الاقتراح.' : 'Normal example passed: one task remains open.\nAlso test edge cases and check documentation before using the suggestion.')
    },
    {
      label: text('Acceptance-check simulation · test the user story', 'محاكاة شروط القبول · اختبر قصة المستخدم'),
      ready: text('Check what a new member needs to see.', 'افحص ما يحتاج العضو الجديد إلى رؤيته.'),
      fields: [
        field('day', text('Meeting day is visible', 'يوم اللقاء ظاهر'), 'checkbox', 'false'),
        field('time', text('Meeting time is visible', 'وقت اللقاء ظاهر'), 'checkbox', 'false'),
        field('phone', text('Readable on a phone', 'واضح على الهاتف'), 'checkbox', 'false')
      ],
      run: (values, state, lang) => Object.values(values).every(value => value === 'true')
        ? (lang === 'ar' ? '✓ نجحت شروط القبول الثلاثة. الميزة جاهزة للمراجعة.' : '✓ All three acceptance checks pass. The feature is ready for review.')
        : (lang === 'ar' ? `بقي ${Object.values(values).filter(value => value !== 'true').length} فحص. أكمل الشروط قبل اعتبار الميزة جاهزة.` : `${Object.values(values).filter(value => value !== 'true').length} check(s) remain. Finish them before calling the feature ready.`)
    },
    {
      label: text('Event-list simulation · show an empty state or a card', 'محاكاة قائمة الفعاليات · اعرض قائمة فارغة أو بطاقة'),
      ready: text('Switch between no events and one event.', 'بدّل بين عدم وجود فعاليات ووجود فعالية.'),
      fields: [field('list', text('Example data', 'بيانات المثال'), 'select', 'empty', [
        choice('empty', 'No events', 'لا توجد فعاليات'),
        choice('one', 'One pretend event', 'فعالية خيالية واحدة')
      ])],
      run: (values, state, lang) => values.list === 'empty'
        ? (lang === 'ar' ? 'لا توجد فعاليات بعد.\nيمكنك إضافة أول فعالية.' : 'No events yet.\nYou can add the first event.')
        : 'Drawing day\nFriday · 3:00 PM'
    },
    {
      label: text('API and database simulation · sample data stays in this page', 'محاكاة API وقاعدة البيانات · تبقى البيانات التجريبية في الصفحة'),
      ready: text('Enter a pretend event title. This simulation does not write to SQLite.', 'أدخل عنوان فعالية خياليًا. لا تحفظ هذه المحاكاة في SQLite.'),
      fields: [field('title', text('Pretend event title', 'عنوان فعالية خيالي'))],
      run: (values, state, lang) => {
        const title = values.title.trim();
        if (!title) return lang === 'ar' ? 'POST /api/events → 400\nأضف عنوانًا. لم تُحفظ الفعالية.' : 'POST /api/events → 400\nAdd a title. The event was not saved.';
        state.events = state.events || [];
        state.events.push(title);
        return `${lang === 'ar' ? 'محاكاة فقط · لم تُحفظ البيانات في قاعدة حقيقية.' : 'Simulation only · no real database was changed.'}\nPOST /api/events → 201\n${JSON.stringify({ id: state.events.length, title })}`;
      }
    },
    {
      label: text('Release checklist simulation · check the project before demo', 'محاكاة قائمة التسليم · افحص المشروع قبل العرض'),
      ready: text('Mark each check after trying it.', 'ضع علامة بعد تجربة كل فحص.'),
      fields: [
        field('feature', text('Main feature works', 'الميزة الأساسية تعمل'), 'checkbox', 'false'),
        field('errors', text('Empty input and errors are handled', 'المدخل الفارغ والأخطاء واضحة'), 'checkbox', 'false'),
        field('phone', text('Phone layout fits', 'التصميم يلائم الهاتف'), 'checkbox', 'false'),
        field('tests', text('Tests pass', 'الاختبارات ناجحة'), 'checkbox', 'false'),
        field('readme', text('README setup was tested', 'تم اختبار إعداد README'), 'checkbox', 'false')
      ],
      run: (values, state, lang) => Object.values(values).every(value => value === 'true')
        ? (lang === 'ar' ? '✓ اكتملت الفحوص الخمسة. راجع الخصوصية وتأكد من عدم وجود أسرار قبل النشر.' : '✓ All five checks are complete. Check privacy and confirm no secrets before release.')
        : (lang === 'ar' ? `بقي ${Object.values(values).filter(value => value !== 'true').length} فحص قبل العرض.` : `${Object.values(values).filter(value => value !== 'true').length} check(s) remain before the demo.`)
    },
    {
      label: text('Presentation rehearsal · build a 60-second demo', 'تدريب العرض · حضّر عرضًا لدقيقة'),
      ready: text('Fill in the visitor and feature, then create your demo script.', 'اكتب من هو الزائر وما الميزة، ثم أنشئ نص العرض.'),
      fields: [
        field('visitor', text('Who does the project help?', 'من يساعده المشروع؟'), 'text', text('new club members', 'أعضاء النادي الجدد')),
        field('feature', text('What can the visitor do?', 'ماذا يستطيع الزائر أن يفعل؟'), 'text', text('see the next meeting', 'معرفة موعد اللقاء القادم')),
        field('next', text('What will you improve next?', 'ما الذي ستحسنه بعد ذلك؟'), 'text', text('improve the empty-list message', 'تحسين رسالة القائمة الفارغة'))
      ],
      run: (values, state, lang) => {
        const visitor = values.visitor.trim() || (lang === 'ar' ? 'زائر' : 'a visitor');
        const feature = values.feature.trim() || (lang === 'ar' ? 'تجربة الميزة الأساسية' : 'try the main feature');
        const next = values.next.trim() || (lang === 'ar' ? 'اختبار حالة أخرى' : 'test one more case');
        return lang === 'ar'
          ? `موقعنا يساعد ${visitor}.\nيمكن للزائر ${feature}.\nالخطوة التالية: ${next}.`
          : `Our website helps ${visitor}.\nVisitors can ${feature}.\nNext, we will ${next}.`;
      }
    },
    {
      label: text('Button interaction · click to run the example', 'تفاعل الزر · اضغط لتشغيل المثال'),
      ready: text('The message will appear here when the button is pressed.', 'ستظهر الرسالة هنا عند الضغط على الزر.'),
      run: (values, state, lang) => {
        state.clicks = (state.clicks || 0) + 1;
        return lang === 'ar'
          ? `Thanks for visiting our club!\nعدد الضغطات: ${state.clicks}`
          : `Thanks for visiting our club!\nButton clicks: ${state.clicks}`;
      }
    }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
  }

  window.mountFormationDemo = (container, index, language, labels) => {
    const example = examples[index];
    if (!example) throw new Error(`Runnable example is missing for session ${index + 1}`);
    const locale = language === 'ar' ? 'ar' : 'en';
    const fields = (example.fields || []).map(item => {
      const label = escapeHtml(item.label[locale]);
      if (item.type === 'select') {
        return `<label class="presentation-demo-field">${label}<select data-demo-input="${item.key}">${item.options.map(option => `<option value="${escapeHtml(option.value)}"${option.value === item.value ? ' selected' : ''}>${escapeHtml(option.label[locale])}</option>`).join('')}</select></label>`;
      }
      if (item.type === 'checkbox') {
        return `<label class="presentation-demo-check"><input data-demo-input="${item.key}" type="checkbox"${item.value === 'true' ? ' checked' : ''}>${label}</label>`;
      }
      const value = typeof item.value === 'string' ? item.value : item.value[locale];
      return `<label class="presentation-demo-field">${label}<input data-demo-input="${item.key}" type="${item.type}"${item.type === 'number' ? ' min="0" step="1"' : ''} value="${escapeHtml(value)}"></label>`;
    }).join('');
    const heading = labels.runExample;
    container.innerHTML = `<section class="presentation-simulation" aria-label="${escapeHtml(example.label[locale])}">
      <strong class="presentation-demo-label">${escapeHtml(example.label[locale])}</strong>
      <div class="presentation-demo-fields">${fields}</div>
      <button type="button" class="p" data-demo-run>${escapeHtml(heading)}</button>
      <pre class="presentation-console" data-demo-output aria-live="polite">${escapeHtml(example.ready[locale])}</pre>
    </section>`;
    const button = container.querySelector('[data-demo-run]');
    button.addEventListener('click', () => {
      const values = {};
      container.querySelectorAll('[data-demo-input]').forEach(input => {
        values[input.dataset.demoInput] = input.type === 'checkbox' ? String(input.checked) : input.value;
      });
      const output = container.querySelector('[data-demo-output]');
      output.textContent = example.run(values, container.demoState || (container.demoState = {}), locale);
      output.dataset.error = index === 1 && (!Number.isInteger(Number(values.visitors)) || Number(values.visitors) < 0 || values.visitors.trim() === '') ? 'true' : 'false';
    });
  };
})();
