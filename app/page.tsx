import Image from 'next/image';
import PortfolioMotion from './components/portfolio-motion';

const Arrow = () => <span aria-hidden="true" className="arrow">↘</span>;

const learning = [
  ['01', 'Web foundations', 'Building beginner projects with HTML, CSS, JavaScript, and DOM manipulation.'],
  ['02', 'Backend curiosity', 'Exploring Node.js, SMTP, and email workflows through hands-on experiments.'],
  ['03', 'MERN in progress', 'Learning how modern web applications come together across the stack.'],
  ['04', 'Problem solving', 'Strengthening Data Structures and Algorithms fundamentals — currently a work in progress.'],
];

const experiences = [
  {
    kind: 'Hackathon',
    title: 'Cypher 4.0',
    text: 'An 18-hour hackathon where Team Alpha developed the LaunchX concept. We reached the top 20 out of 80+ teams and qualified for Round 2.',
    image: '/images/cypher4.0.jpeg',
    alt: 'Team Alpha collaborating at Cypher 4.0',
  },
  {
    kind: 'Volunteer · organizing team',
    title: 'Hack Days 2026',
    text: 'Supported participants, on-ground activities, and event coordination alongside the AWS Student Builder Group at Atria and OSCode Atria Chapter.',
    image: '/images/hack-days.jpeg',
    alt: 'Participants and organizers at Hack Days 2026',
  },
  {
    kind: 'Volunteer',
    title: 'Decode SIH 2026 — Grand Finale',
    text: 'Volunteered at a national-level hackathon finale at Cambridge Institute of Technology, Bengaluru — a chance to support the event and explore photography.',
    image: '/images/decodesih2.jpeg',
    alt: 'Volunteers and participants at Decode SIH 2026 Grand Finale',
  },
  {
    kind: 'Community volunteer',
    title: 'BlueDot Foundation Tree Plantation Drive',
    text: 'Joined seven friends on June 27, 2026 to plant more than 120 saplings for the “Make Bengaluru the Garden City Again” initiative and a Guinness World Record attempt.',
    image: '/images/treeplantation1.jpeg',
    alt: 'Volunteers joining hands at the BlueDot Foundation tree plantation drive',
  },
];

export default function Home() {
  return (
    <main>
      <PortfolioMotion />
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Manish Rajak, home">MANISH <i>RAJAK</i></a>
        <nav aria-label="Main navigation">
          <a href="#about">Story</a>
          <a href="#projects">Projects</a>
          <a href="#experiences">Experiences</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s connect <Arrow /></a>
        <details className="mobile-menu"><summary>MENU <span>+</span></summary><div><a href="#about">Story</a><a href="#projects">Projects</a><a href="#experiences">Experiences</a><a href="#contact">Connect</a></div></details>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero__copy" data-reveal>
          <p className="eyebrow"><span /> A STUDENT JOURNEY IN PROGRESS</p>
          <h1 id="hero-title">Learning by <em>building.</em><br />Growing <br className="mobile-break" />through<br /><span>technology.</span></h1>
          <p className="hero__intro">I&apos;m Manish — a Computer Science and Engineering student of Atria Institue of Technology in Bengaluru, finding my way through code, ideas, and collaboration.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">See what I&apos;m building <Arrow /></a>
            <a className="text-link" href="#about">My learning journey <span>↓</span></a>
          </div>
        </div>
        <div className="hero__portrait" data-reveal>
          <div className="portrait-frame">
            <Image src="/images/MR.png" alt="Portrait of Manish Rajak" fill priority sizes="(max-width: 760px) 80vw, 42vw" />
          </div>
          <div className="portrait-hud" aria-hidden="true"><span>STUDENT / SIGNAL</span><i /><span>BUILDING IN PUBLIC</span></div>
          <div className="portrait-caption"><span>01 / 05</span><span>MANISH RAJAK<br />CSE STUDENT</span></div>
          <div className="orbit orbit--one" aria-hidden="true" />
          <div className="orbit orbit--two" aria-hidden="true" />
        </div>
        <p className="hero__location">BASED IN<br /><b>BENGALURU, INDIA</b></p>
        <p className="hero__scroll">SCROLL TO EXPLORE <span>↓</span></p>
      </section>

      <div id="content">
        
        <section
          id="social-presence"
          className="social-presence section-shell"
          aria-labelledby="social-title"
          data-reveal
        >
          <div className="social-presence__heading">
            <p className="section-index">( 00 — FIND ME ONLINE )</p>
            <h2 id="social-title">
              A little more<br />
              <em>of my world.</em>
            </h2>
            <p>Connect, follow along, and see what I share beyond this website.</p>
          </div>

          <div className="social-presence__grid">
            <article className="social-card social-card--linkedin">
              <div className="social-card__top">
                <div className="social-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.42h2.67ZM7 8.25a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.17c0-1-.02-2.29-1.4-2.29s-1.61 1.09-1.61 2.22V18H10V9.42h2.56v1.17h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.22 1.78 3.22 4.09Z" />
                  </svg>
                </div>
                <span className="social-card__label">PROFESSIONAL NETWORK</span>
              </div>
              <h3>LinkedIn</h3>
              <p className="social-card__count">280<span>+</span></p>
              <p className="social-card__description">Connections</p>
              <a
                className="social-card__button"
                href="https://www.linkedin.com/in/manish-rajak/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Manish Rajak's LinkedIn profile"
              >
                View profile <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="social-card social-card--youtube">
              <div className="social-card__top">
                <div className="social-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6Z" />
                  </svg>
                </div>
                <span className="social-card__label">VIDEOS & MOMENTS</span>
              </div>
              <h3>YouTube</h3>
              <p className="social-card__count">70<span>+</span></p>
              <p className="social-card__description">Subscribers</p>
              <a
                className="social-card__button"
                href="https://www.youtube.com/@manishrajaknepal568"
                target="_blank"
                rel="noreferrer"
                aria-label="View Manish Rajak's YouTube channel"
              >
                View channel <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="social-card social-card--instagram">
              <div className="social-card__top">
                <div className="social-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <span className="social-card__label">PHOTOS & STORIES</span>
              </div>
              <h3>Instagram</h3>
              <p className="social-card__count">270<span>+</span></p>
              <p className="social-card__description">Followers</p>
              <a
                className="social-card__button"
                href="https://www.instagram.com/manish._2007/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Manish Rajak's Instagram profile"
              >
                View profile <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>

        <section id="about" className="statement section-shell" aria-labelledby="story-title" data-reveal>
          <p className="section-index">( 01 — MY STORY )</p>
          <div>
            <h2 id="story-title">Still becoming.<br /><em>Deliberately curious.</em></h2>
            <p className="statement__lead">I&apos;m not here to pretend I have it all mapped out. I&apos;m a CSE student learning through the useful, messy work of making things — one project, event, and new idea at a time.</p>
            <div className="statement__details">
              <p>Right now, I&apos;m focused on web development, JavaScript, backend learning, and the MERN stack. I enjoy turning unfamiliar concepts into practical experiments and learning alongside people who are equally curious.</p>
              <p>Outside of code, I&apos;m drawn to hackathon energy, community work, photography, and conversations about where technology can go next.</p>
            </div>
          </div>
        </section>

        <section className="learning section-shell" aria-labelledby="learning-title" data-reveal>
          <div className="learning__heading">
            <p className="section-index">( 02 — CURRENTLY LEARNING )</p>
            <h2 id="learning-title">No skill bars.<br /><em>Just the work.</em></h2>
          </div>
          <div className="learning__list">
            {learning.map(([number, title, text]) => (
              <article className="learning-item" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Arrow />
              </article>
            ))}
          </div>
          <p className="learning__footnote">Also exploring: <b>AI-powered applications</b>, <b>blockchain</b>, and <b>photography</b> — with curiosity before certainty.</p>
        </section>

        <section id="projects" className="projects" aria-labelledby="projects-title">
          <div className="section-shell projects__heading">
            <p className="section-index">( 03 — SELECTED PROJECTS )</p>
            <h2 id="projects-title">Ideas made<br /><em>visible.</em></h2>
          </div>
          <article className="featured-project section-shell" data-reveal>
            <div className="featured-project__top"><p>01 / FEATURED PROJECT</p><p>CYPHER 4.0 · TEAM ALPHA</p></div>
            <div className="featured-project__screen">
              <Image src="/images/launchx.png" alt="LaunchX website builder concept interface" fill sizes="(max-width: 900px) 92vw, 84vw" />
            </div>
            <div className="featured-project__copy">
              <div><h3>Launch<span>X</span></h3><p className="project-type">AI-POWERED WEBSITE BUILDER CONCEPT</p></div>
              <div><p>With Team Alpha, I helped build an e-commerce builder for shopkeepers and small businesses. It brings store creation, visual editing, product and order management, and AI-assisted workflows into one project.</p><p className="project-note">Built with JavaScript, Node.js, Express, MongoDB, and Mongoose. My role: Team member. Team Alpha reached the top 20 from 80+ teams and progressed to Round 2.</p><div className="project-links"><a className="button button--project" href="https://cypher4-0.onrender.com/" target="_blank" rel="noreferrer">Visit LaunchX <Arrow /></a><a className="text-link" href="https://github.com/Manish-Raz/cypher4.0" target="_blank" rel="noreferrer">View repository <Arrow /></a></div></div>
            </div>
          </article>
          <div className="project-grid section-shell" data-reveal>
            <article className="project-card"><div className="project-card__image"><Image src="/images/nodemailer-cover.svg" alt="Illustration representing automated email delivery" fill sizes="(max-width: 760px) 92vw, 42vw" /></div><span>02 / BACKEND PROJECT</span><h3>Email automation<br /><em>with Nodemailer</em></h3><p>Built a Gmail-based email sender with Node.js, Nodemailer, dotenv, and an HTML welcome-email template. The project uses environment variables and explores attachments and embedded images.</p><a className="text-link" href="https://github.com/Manish-Raz/Nodemailer_Project" target="_blank" rel="noreferrer">View repository <Arrow /></a></article>
            <article className="project-card project-card--dark"><div className="project-card__image"><Image src="/images/infinite-scroll-cover.svg" alt="Illustration representing an infinite scrolling feed" fill sizes="(max-width: 760px) 92vw, 42vw" /></div><span>03 / JAVASCRIPT PROJECT</span><h3>Infinite<br /><em>Scroll</em></h3><p>Built a scrolling feed that fetches posts dynamically with the JavaScript Fetch API. It detects when readers near the page bottom, prevents duplicate requests, and renders new posts into the DOM.</p><a className="text-link" href="https://github.com/Manish-Raz/Infinite-Scroll-Event" target="_blank" rel="noreferrer">View repository <Arrow /></a></article>
          </div>
        </section>

        <section id="experiences" className="experiences section-shell" aria-labelledby="experiences-title" data-reveal>
          <div className="experiences__heading"><p className="section-index">( 04 — OUT IN THE WORLD )</p><h2 id="experiences-title">Building beyond<br /><em>the browser.</em></h2></div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className="experience" key={experience.title}>
                <div className="experience__image"><Image src={experience.image} alt={experience.alt} fill sizes="(max-width: 760px) 92vw, 50vw" /></div>
                <p className="experience__kind">{experience.kind}</p><h3>{experience.title}</h3><p className="experience__text">{experience.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="next section-shell" aria-labelledby="next-title" data-reveal>
          <p className="section-index">( 05 — WHAT&apos;S NEXT )</p>
          <div><h2 id="next-title">The next version<br />isn&apos;t finished <em>yet.</em></h2><p>I&apos;m continuing to deepen my web and backend foundations, practise problem-solving, and explore the possibilities of AI and blockchain — always looking for the next practical idea to learn from.</p></div>
        </section>
      </div>

      <footer id="contact" className="footer" data-contact>
        <div className="footer__top section-shell"><p className="section-index contact-reveal">( 06 — SAY HELLO )</p><h2 className="contact-reveal">Let&apos;s learn<br /><em>together.</em></h2><p className="contact-reveal">Have a project, idea, or opportunity worth talking about? I&apos;d be glad to connect.</p>
  


<div className="contact-actions contact-reveal">
  <a
    className="contact-action contact-action--email"
    href="mailto:manrajak14@gmail.com"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
    <span>Email</span>
    <Arrow />
  </a>

  <a
    className="contact-action contact-action--linkedin"
    href="https://www.linkedin.com/in/manish-rajak/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.42h2.67ZM7 8.25a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.17c0-1-.02-2.29-1.4-2.29s-1.61 1.09-1.61 2.22V18H10V9.42h2.56v1.17h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.22 1.78 3.22 4.09Z" />
    </svg>
    <span>LinkedIn</span>
    <Arrow />
  </a>

  <a
    className="contact-action contact-action--x"
    href="https://x.com/Manis_rajak"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.42L5.55 22H2.4l7.25-8.3L1.9 2h6.4l4.43 6.96L18.9 2Zm-1.1 18h1.73L7.38 3.89H5.52L17.8 20Z" />
    </svg>
    <span>X / Twitter</span>
    <Arrow />
  </a>
</div>

       </div>
        <div className="footer__bottom section-shell"><p>© 2026 MANISH RAJAK</p><div><a href="#top">BACK TO TOP ↑</a><span> CSE STUDENT</span></div></div>
      </footer>
    </main>
  );
}
