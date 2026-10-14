# Four-Week Full-Stack Web Development Formation

An instructor guide for a practical, 20-session programme based on the four focus areas supplied for this formation. The intended programme requirements are a bachelor's-level background in Computer Science, Computer Engineering, or Software Development, plus entry-level knowledge of HTML/HTML5, programming fundamentals, full-stack development, and software frameworks. Course content is written so a teacher can explain and demonstrate it to children as a shared, project-based class.

**Schedule:** four weeks, Monday to Friday, three hours per session (60 contact hours total). Each session follows the same 180-minute rhythm; the remaining course time is for optional preparation, mentoring, and independent work.

**Teaching approach:** diagnose before teaching, demonstrate a small idea, let learners build it, review evidence together, and give one specific next step. Keep the baseline diagnostic supportive rather than pass/fail. Adapt the pace from daily exit tickets.

To teach a session, open **Full-Stack Formation**, expand it, and select **Teach this lesson** or **🎤 اشرح الدرس وطبّق**. Each projected lesson has five parts: a warm-up question; a child-friendly explanation; a live code demonstration with its expected result; three guided build steps; and a challenge with a revealable sample answer. Navigate with the on-screen controls or arrow keys; **Home** and **End** jump to the first and last part. Choose **Full screen** to present. The 20 lessons build one practical classroom club website, moving from HTML and CSS through JavaScript, testing, React components, APIs, and the final demo.

## Learning outcomes

By the end of the formation, each participant should be able to:

- Build a semantic, responsive, accessible web interface with HTML, CSS, and JavaScript.
- Explain how a browser, frontend, HTTP API, backend, and data store work together.
- Implement and test a small full-stack feature using React and Node.js/Express.
- Use Git branches and pull requests, review a peer's code respectfully, and describe a debugging process.
- Use AI-assisted development critically and safely, verifying suggestions and protecting private data.
- Present a working project, explain its trade-offs, and identify a realistic career or learning next step.

## Preparation and resources

### Learner prerequisites

- Bachelor's-level study or equivalent background in Computer Science, Computer Engineering, or Software Development.
- Familiarity with HTML/HTML5, programming fundamentals, full-stack development, and software frameworks. The entry check identifies refresh needs; it is not an exclusion test.

### Set up before Week 1

- A laptop, modern browser, VS Code, Git, Node.js LTS, and GitHub access where available.
- A prepared starter repository with React, Node.js/Express, a small JSON API, a SQLite example or instructor-provided persistence layer, scripts, and sample data.
- A working offline starter kit and a no-account or local-only workflow for learners with network/access restrictions.
- A projector, a shared issue board, printed or digital checklists, and a way to capture private one-to-one mentoring notes.
- One short diagnostic, one seeded debugging exercise, acceptance-criteria examples, an accessible test form, and a final project rubric.

Do not ask learners to commit credentials, real user information, or employer data. Use local sample data. AI tools are optional and must follow programme policy; offer an equivalent non-AI activity.

## Common three-hour session plan

| Time | Activity | Instructor practice |
| --- | --- | --- |
| 30 min | Concepts and learning goal | State the outcome and connect the idea to a working example. |
| 25 min | Instructor demonstration | Narrate decisions, inspect browser/dev-tool evidence, and show one common failure. |
| 10 min | Break | Give learners time away from the screen. |
| 65 min | Guided hands-on lab | Learners build in pairs or individually; coach with questions before taking control. |
| 30 min | Code review and knowledge check | Review small examples, test edge cases, and correct misconceptions. |
| 20 min | Reflection and next step | Collect an exit ticket, name one success and blocker, and state the next preparation task. |

The blocks total 180 minutes. Adjust the lab support and examples to the cohort, but retain time for practice and evidence of learning.

## Week 1 — Assessment & Digital Foundations

**Outcome:** know the cohort's starting points, remove tool blockers, and create a small semantic HTML page tracked in Git.

### Day 1 — Welcome, baseline assessment, and learning goals

- Run a short HTML/CSS/JavaScript and problem-solving diagnostic. Ask learners to explain one answer in pairs.
- Set up VS Code, Node.js LTS, Git, and GitHub; identify account, access, and installation blockers early.
- Have each learner set one personal goal and agree on team norms.
- **Evidence:** private baseline checklist, personal goal, and working setup or a logged support request.
- **Instructor note:** use results to group support, not rank or reject participants.

### Day 2 — Programming fundamentals

- Refresh values, types, variables, comparisons, conditionals, loops, arrays, and functions.
- Ask learners to predict short JavaScript outputs before running them.
- Write a function that validates a score range; test ordinary and edge-case values.
- **Evidence:** small JavaScript file with named examples and at least three input/output checks.

### Day 3 — Developer tools, terminal, and Git basics

- Navigate a project, run the starter app, inspect browser errors, and distinguish editor, terminal, and browser console.
- Practise `status`, `add`, `commit`, and `log`; make the first commit meaningful and small.
- **Evidence:** repository, short README, first commit, and proof that the app runs.

### Day 4 — Problem solving and debugging

- Break a registration-flow requirement into pseudocode and a decision table.
- Define acceptance examples before implementing one rule.
- Reproduce a seeded bug, inspect evidence, change one thing, and re-test.
- **Evidence:** pseudocode, three acceptance examples, and a note describing one fixed issue.
- **Instructor note:** remind participants not to put personal data into code examples or prompts.

### Day 5 — Semantic HTML page

- Build a profile or community-event page from a plain brief using headings, sections, lists, links, and descriptive content.
- Test heading order, keyboard access, working links, and the browser inspector.
- **Evidence:** HTML-only page committed to Git and reviewed with a short semantic/accessibility checklist.
- **Weekly milestone:** skill map, working toolchain, GitHub repository, and first semantic page.

## Week 2 — Web Development & Coding

**Outcome:** build an accessible responsive interface with JavaScript behaviour and connect it to a prepared API.

### Day 6 — HTML5 structure, forms, and accessibility

- Use landmarks, associated labels, buttons, form controls, and useful error messages.
- Build a registration form and test the focus order and submission using only a keyboard.
- **Evidence:** form markup and checks for keyboard operation, labels, and error messages.

### Day 7 — CSS and responsive layouts

- Teach the box model, reusable classes, Flexbox or Grid, contrast, and mobile-first breakpoints.
- Style the Week 1 page; test narrow and wide viewports and fix overflow/focus visibility.
- **Evidence:** responsive page, before/after screenshots, and two written CSS decisions.

### Day 8 — JavaScript data, functions, and modules

- Model application data with objects and arrays; use small, single-purpose functions.
- Filter and summarise a task list; refactor a long function and test empty, typical, and invalid cases.
- **Evidence:** a tested data-helper module with examples.

### Day 9 — DOM events, validation, and user feedback

- Connect events to state changes; validate browser input and report success/errors accessibly.
- Add, complete, and remove tasks. Test blank input, an empty list, and repeated interaction.
- **Evidence:** interactive page and a table of input, expected result, and observed result.

### Day 10 — HTTP, JSON, and full-stack API foundations

- Explain request/response, methods, status codes, JSON, asynchronous loading, and server-side validation.
- Run the supplied Node.js/Express API with SQLite or the prepared persistence layer. Call an endpoint from the browser and display loading, empty, success, and error states.
- **Evidence:** page that reads API data and a note identifying the method, status, and JSON shape.
- **Weekly milestone:** accessible responsive interface with JavaScript interaction and a successful request to the prepared API.
- **Instructor note:** keep the server and data store preconfigured; this session is for understanding the contract, not building production authentication.

## Week 3 — Software Development & Projects

**Outcome:** use collaborative engineering habits and approve a scoped project with a first reviewed vertical slice.

### Day 11 — Git branches, pull requests, and kind reviews

- Create a small branch and change, then open a local or GitHub pull request.
- Review correctness, clarity, and tests; separate comments about code from judgement about a person.
- Practise one specific positive observation and one actionable question.
- **Evidence:** reviewed pull request with a clear description and a resolved or answered comment.
- **Instructor note:** provide an offline review workflow if network access is limited.

### Day 12 — Maintainable design, testing, and debugging

- Introduce small modules, clear names, explicit error handling, and focused unit/integration checks.
- Fix a supplied failing test, remove one duplicated rule, and re-run the test that first exposed the problem.
- **Evidence:** focused tests, one refactor, and a reproducible bug/fix note.

### Day 13 — React UI and Express API workshop

- Explain component boundaries, props, local state, rendering, routes, middleware, and the UI/API contract.
- Use a supplied starter to fetch a resource from Express; trace the request and handle loading and failure.
- Keep environment configuration outside committed code.
- **Evidence:** working React-to-Express vertical slice and a diagram of UI, API, and persistence responsibilities.
- **Instructor note:** provide a mock API or preinstalled starter if connectivity or setup time is a risk.

### Day 14 — Responsible AI-assisted development

- Use AI to explore, explain, or draft a small piece of code only if allowed by programme policy.
- Verify the result independently with documentation and tests; identify a plausible defect.
- Never upload private, employer, participant, or secret data. Offer a non-AI equivalent task.
- **Evidence:** short AI-use note describing the request, verification, one correction, and any required attribution.

### Day 15 — Project brief and team kickoff

- Select or approve a real user need; write a one-page brief and a user story with testable acceptance criteria.
- Sketch the principal screen, API, and data flow. Rank must-have features above later ideas.
- Create the repository, issue board, roles, and team working agreement; start the supplied project base.
- **Evidence:** brief, acceptance criteria, prioritised backlog, team roles, and running starter.
- **Weekly milestone:** approved scope, backlog, architecture sketch, React/Express starter, and first reviewed slice.

## Week 4 — Project Completion & Mentoring

**Outcome:** test and present a documented MVP, receive individual feedback, and choose a practical next career step.

### Day 16 — Build the core vertical slice

- Plan the day and pair on the smallest valuable user journey from React through Express to data.
- Review a pull request and hold a short midpoint demo; mentors remove blockers without taking over.
- **Evidence:** merged feature, acceptance evidence, and updated issue board.
- **Instructor note:** cut scope early if the MVP is too large for the remaining sessions.

### Day 17 — Integrate, persist, and improve accessibility

- Trace a user action across the stack; validate on the server and handle loading/errors.
- Test refresh and invalid input, inspect network responses, and use keyboard-only and small-screen checks.
- **Evidence:** tested end-to-end flow, one accessibility issue fixed, and known limitations.
- **Instructor note:** do not add authentication, payments, or real personal data to a time-limited MVP.

### Day 18 — Test, review, fix, and document

- Use acceptance criteria as a release checklist. Prioritise critical defects.
- Run agreed tests, peer-review a change, test an edge case, and remove secrets from the repository.
- Ask another team to follow the README from a clean setup.
- **Evidence:** passing checks, reviewed changes, setup README, test notes, known limitations, and demo script.

### Day 19 — One-to-one mentoring and rehearsal

- Rehearse a timed problem–solution–architecture–testing story.
- Provide each learner equal one-to-one feedback time and agree on one realistic improvement.
- **Evidence:** demo outline, private strengths/next-step note, and one incorporated piece of feedback.
- **Instructor note:** share the rubric beforehand and provide a private route to discuss accommodations or concerns.

### Day 20 — Showcase and career next steps

- Teams demo the working product and answer questions; peers give rubric-based, constructive feedback.
- Review the repository and portfolio summary; practise an interview question and write a dated 30-day plan.
- **Evidence:** demo, repository/README, peer and mentor feedback, reflection, and a specific next career or learning action.
- **Weekly milestone:** tested, documented demo, individual feedback, portfolio-ready project summary, and career next step.

## Capstone brief

In teams of 2–4, build a small, accessible full-stack web app for a real user. The standard teaching path is React for the interface, Node.js/Express for a JSON API, and SQLite or the instructor-provided persistence layer. Deliver a working vertical slice, tests, a README, and a short live demo. An instructor may approve a different framework to fit the cohort.

Keep the MVP achievable: one user need, one important journey, and a small number of acceptance criteria. Use sample data and avoid production credentials, authentication, payments, and unnecessary personal data.

## Assessment

1. **Entry diagnostic:** HTML/CSS/JavaScript and problem-solving baseline; use privately to personalise help.
2. **Daily exit ticket:** one concept understood, one item still unclear, and the learner's confidence.
3. **Weekly milestones:** review the evidence listed above; identify blockers and adjust scope or support.
4. **Final project rubric:**

| Criterion | Weight |
| --- | ---: |
| Working features and acceptance criteria | 30% |
| Code quality, Git workflow, and peer review | 20% |
| Testing, accessibility, and reliability | 20% |
| Clear demonstration and communication | 15% |
| Reflection, teamwork, and next-step plan | 15% |

Suggested completion threshold: 70% overall, with a working core feature and evidence of respectful participation. Follow local programme policy where it differs. Return specific, kind feedback and one actionable next step to every learner.

## Career and employment mentoring

Use the final mentoring sessions to help participants describe their contribution, explain a technical decision, and show working evidence rather than just list tools. Review a concise project README and portfolio entry; practise a short project walkthrough and an interview question; discuss role-relevant skill gaps and local job-search resources; and agree on one dated action for the next 30 days. Do not promise employment outcomes.
