export default function Home() {
  return (
    <section>
      <h2>Welcome to my ITIS3135 Homepage!</h2>
      <p>Feel free to look around and explore my site.</p>

      {/* Use absolute URL so it points to your normal site, not the React subpath */}
      <a
        className="button-link"
        href="https://lbetanc21.github.io/itis3135/"
        target="_blank"
        rel="noreferrer"
      >
        Click to go to ITIS3135 Site
      </a>
    </section>
  );
}
