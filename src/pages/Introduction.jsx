export default function Introduction() {
  return (
    <section className="container intro">
      <h2>Introduction</h2>

      <div className="intro-grid">
        <figure className="intro-photo">
          {/* Put a headshot in /public/images/profile.jpg, or change the src below */}
        <img src="/images/profile.jpg" alt="Luis Betancourt at UNC Charlotte" />
          <figcaption>Luis Betancourt</figcaption>
        </figure>

        <div className="intro-body">
          <p>
            Hey! I’m <strong>Luis Betancourt</strong> — a UNC Charlotte student who loves
            building clean, responsive websites and mixing design with computer science.
            I’m big on process, good UX, and shipping things that actually work.
          </p>

          <ul className="bullet-list">
            <li><strong>Major:</strong> Computer Science (plus accounting coursework)</li>
            <li><strong>Interests:</strong> web dev, design systems, music, lifting, outdoors</li>
            <li><strong>Mascot:</strong> <em>Luminous Bison</em> (it’s a vibe)</li>
            <li><strong>Goal:</strong> grow into a dev/designer who ships beautiful, reliable apps</li>
          </ul>
        </div>
      </div>

      <section>
        <h3>What I’m studying right now</h3>
        <ul className="checklist">
          <li>ITIS 3135 — Web-Based App Design & Development</li>
          <li>CS fundamentals & assembly projects</li>
          <li>Managerial/financial accounting topics</li>
        </ul>
      </section>

      <section>
        <h3>Skills & Tools</h3>
        <ul className="pill-list">
          <li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li>
          <li>Vite</li><li>Git/GitHub</li><li>Responsive Design</li>
        </ul>
      </section>

      <section className="quote">
        <blockquote>“Discipline now is freedom later.”</blockquote>
        <cite>— Unknown</cite>
      </section>

      <section>
        <h3>Find me online</h3>
        <ul className="link-list">
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/lbetanc21" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://webpages.charlotte.edu/lbetanc2/" target="_blank" rel="noreferrer">UNCC Webpages</a></li>
          <li><a href="https://lbetanc21.github.io/" target="_blank" rel="noreferrer">GitHub Pages</a></li>
          <li><a href="https://betancourtco.co/" target="_blank" rel="noreferrer">Betancourt &amp; Co.</a></li>
        </ul>
      </section>
    </section>
  );
}
