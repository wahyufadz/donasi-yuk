import React from 'react'
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse pull-right" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/k">k</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
