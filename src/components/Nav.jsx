import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="primary-nav" aria-label="Primary">
      <ul className="nav-list container">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/introduction">Introduction</NavLink></li>
        <li><NavLink to="/contract">Contract</NavLink></li>
        <li><NavLink to="/students">Students</NavLink></li>
      </ul>
    </nav>
  )
}
