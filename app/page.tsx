const projects = [
  {
    title: "MedAlert",
    type: "Senior Project",
    description:
      "A smart medication support system designed to monitor drug storage conditions and remind patients to take medication on time.",
    stack: ["Embedded Systems", "Sensors", "System Design"],
  },
  {
    title: "Wedding Event Planner",
    type: "Database Project",
    description:
      "A wedding booking system built with XAMPP and MySQL to manage clients, event reservations, and service coordination.",
    stack: ["MySQL", "XAMPP", "Database Design"],
  },
  {
    title: "Wedding Planner Desktop App",
    type: "Java GUI Application",
    description:
      "A desktop planning application for organizing services, event details, and user interactions through a Java GUI interface.",
    stack: ["Java", "GUI", "OOP"],
  },
  {
    title: "ROBOMED",
    type: "Engineering Simulation",
    description:
      "A Tinkercad simulation that controls medication storage and provides voice-based reminders for better patient assistance.",
    stack: ["Tinkercad", "Automation", "Simulation"],
  },
];

const skills = [
  "Next.js",
  "Supabase",
  "Vercel",
  "Flutter",
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "MySQL",
  "REST APIs",
  "Java",
  "Python",
  "C",
  "C++",
  "Git",
  "Postman",
  "Arduino",
  "Proteus",
  "Tinkercad",
  "MATLAB",
];

const experience = [
  {
    role: "Intern — Mobile & Web Developer",
    company: "Cedars Software Solutions",
    date: "Sep 2025 — Nov 2025",
    points: [
      "Built dynamic attendance management features with Flutter.",
      "Integrated backend APIs developed in PHP with MySQL as part of a full-stack workflow.",
      "Developed website components using HTML, CSS, and JavaScript.",
      "Worked with Supabase, Vercel, and Next.js in backend and deployment environments.",
    ],
  },
  {
    role: "Private Tutor",
    company: "Freelance",
    date: "2022 — Present",
    points: [
      "Taught mathematics, physics, electronics, programming, and digital logic.",
      "Explained lab experiments and technical concepts through structured problem-solving.",
      "Created personalized lesson plans that improved student understanding and engagement.",
    ],
  },
  {
    role: "Freelance Computer Engineering Projects",
    company: "Remote",
    date: "2024 — Present",
    points: [
      "Built small Java applications, login systems, and database forms.",
      "Supported project development in Arduino, circuit design, and simulations.",
      "Used Tinkercad and Proteus for testing and academic engineering support.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(64,84,178,0.22),_transparent_30%),linear-gradient(180deg,#0a0f1f_0%,#0b1120_45%,#060913_100%)] text-white">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10 lg:px-12">
        <nav className="mb-16 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <span className="text-lg font-semibold tracking-wide">Mariam Nader</span>
            <p className="text-xs text-white/60">Computer Engineer • Web & Software Developer</p>
          </div>
          <div className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Available for internships, freelance work, and junior developer roles
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Building modern digital experiences with engineering precision.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              I’m Mariam Nader, a Computer Engineering graduate and Master’s student with practical experience in web development,
              mobile apps, databases, embedded systems, and software engineering. I create solutions that combine logic,
              usability, and clean execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="mailto:mariamnader034@gmail.com"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">Profile Snapshot</p>
              <div className="mt-6 space-y-5 text-sm text-white/80">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span>Education</span>
                  <span className="font-semibold text-white">B.E. Computer Engineering</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span>Current Study</span>
                  <span className="font-semibold text-white">Master’s in CCE</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span>Internship</span>
                  <span className="font-semibold text-white">Web & Mobile Dev</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span>GPA</span>
                  <span className="font-semibold text-white">3.7 / 4.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <span className="font-semibold text-white">Nabatiyeh, Lebanon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="section-label">About Me</p>
            <h2 className="section-title">A strong technical base with practical execution.</h2>
            <p className="mt-5 text-white/72 leading-8">
              My background combines computer engineering fundamentals with hands-on development work. I enjoy building digital
              products, solving real problems, and turning technical ideas into polished user-facing experiences.
            </p>
            <p className="mt-4 text-white/72 leading-8">
              My work spans web development, mobile development, API integration, database design, tutoring, and engineering
              projects involving electronics and simulation tools.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="section-label">Core Skills</p>
            <h2 className="section-title">Technologies I use to build and deliver.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/85"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="mb-10">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Professional growth through development, tutoring, and engineering work.</h2>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <article
              key={item.role}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                  <p className="mt-1 text-cyan-200">{item.company}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                  {item.date}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-white/72">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Selected Projects</p>
            <h2 className="section-title">A portfolio built around meaningful academic and technical work.</h2>
          </div>
          <p className="max-w-xl text-white/65 leading-7">
            These projects reflect my ability to work across software, hardware, simulation, and user-centered application design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.08]"
            >
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {project.type}
              </span>
              <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 leading-8 text-white/72">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-white/7 px-3 py-2 text-xs text-white/75">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic foundation</h2>
          <div className="mt-6 space-y-4 text-white/75">
            <div>
              <p className="text-lg font-semibold text-white">Master’s Degree in Computer and Communication Engineering</p>
              <p>Lebanese International University • 2025 — Present</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Bachelor’s Degree in Computer Engineering</p>
              <p>Lebanese International University • 2021 — 2025</p>
              <p className="mt-1 text-cyan-200">GPA: 3.7 / 4.0</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Training that strengthens my technical profile</h2>
          <div className="mt-6 space-y-5 text-white/75">
            <div>
              <p className="text-lg font-semibold text-white">Cybersecurity Bootcamp — CyberTalents</p>
              <p>Covered network threats, ethical hacking basics, and secure system design.</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Photography Course — Creative Academy</p>
              <p>Focused on camera handling, lighting, editing, and visual storytelling.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/5 to-indigo-400/10 p-8 backdrop-blur md:p-10">
          <p className="section-label">Contact</p>
          <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title max-w-2xl">Let’s build something thoughtful, useful, and well-designed.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/72">
                I’m open to internships, junior roles, and freelance opportunities in software, web, and mobile development.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <a href="mailto:mariamnader034@gmail.com" className="contact-link">mariamnader034@gmail.com</a>
              <a href="tel:+96176196536" className="contact-link">+961 76 196 536</a>
              <span className="contact-link">Nabatiyeh, Lebanon</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
