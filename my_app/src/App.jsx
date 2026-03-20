import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Team from './Team.jsx'
import Media from './Media.jsx'
import Partners from './Partners.jsx'
import Projects from './Projects.jsx'
import ProjectDetail from './ProjectDetail.jsx'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/media" element={<Media />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
