import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  var btntext = props.mode === 'light'?'Dark Mode': 'Light Mode'
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">
          {props.tittle}
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <button className={`btn btn-${props.mode} mx-3`} onClick={props.togglemode}>{btntext}</button>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      </>
  )
}

// This can help to set the type of the prop
// If we set this as is required then it will show error if not set

Navbar.prototype = {
    tittle : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

// This value will be passed to the props by default if it is blank

Navbar.defaultProps = {
    tittle: "this is the default tittle",
    about: "About"
}