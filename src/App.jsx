import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Introduction from './pages/Introduction.jsx'
import Contract from './pages/Contract.jsx'
import Students from './Students.jsx'

export default function App() {
  return (
    <div className="site">
      <Header />
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
