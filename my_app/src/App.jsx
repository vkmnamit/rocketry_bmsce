import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Team from './Team.jsx'
import Media from './Media.jsx'
import Partners from './Partners.jsx'
import Projects from './Projects.jsx'
import ProjectDetail from './ProjectDetail.jsx'
import TechnicalResources from './TechnicalResources.jsx'
import Navbar from './Navbar.jsx'
import FloatingHome from './FloatingHome.jsx'

function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <FloatingHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/media" element={<Media />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/resources" element={<TechnicalResources />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
