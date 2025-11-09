export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <p>&copy; {year} Luis Betancourt. All rights reserved.</p>
        <p>
          <a href="https://lbetanc21.github.io/" target="_blank" rel="noreferrer">
            Back to Main Site
          </a>
        </p>
      </div>
    </footer>
  )
}
