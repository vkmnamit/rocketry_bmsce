import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './FloatingHome.css'

export default function FloatingHome() {
    const location = useLocation()

    // Hide when already on home page to avoid duplicate semantics (optional)
    const isHome = location.pathname === '/' || location.pathname === ''

    return (
        <div className="floating-home" aria-hidden={isHome}>
            <Link to="/" className="floating-home__link" aria-label="Go to Home">
                <svg className="floating-home__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span className="floating-home__label">Home</span>
            </Link>
        </div>
    )
}
