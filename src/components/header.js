import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="header-navbar-interactive">
        <Link to="/" className="header-navlink">
          <div className="header-logo"></div>
        </Link>
        <div data-thq="thq-burger-menu" className="header-burger-menu">
          <svg viewBox="0 0 1024 1024" className="header-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="header-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="header-nav"
          >
            <div className="header-container">
              <div data-thq="thq-close-menu" className="header-menu-close">
                <svg viewBox="0 0 1024 1024" className="header-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="header-nav1"
            >
              <Link to="/" className="header-navlink1">
                {props.text6}
              </Link>
              <span className="header-text">{props.text7}</span>
              <span className="header-text1">{props.text8}</span>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
  text52: 'About',
  text7: 'About',
  image_src1: '1c35a890-93f8-4902-b58c-b7919c40b4aa',
  image_src2: '1c35a890-93f8-4902-b58c-b7919c40b4aa',
  text8: 'Contact',
  image_alt2: 'image',
  text62: 'Contact',
  text61: 'Contact',
  image_alt1: 'image',
  text6: 'Home',
  text51: 'About',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  text52: PropTypes.string,
  text7: PropTypes.string,
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
  text8: PropTypes.string,
  image_alt2: PropTypes.string,
  text62: PropTypes.string,
  text61: PropTypes.string,
  image_alt1: PropTypes.string,
  text6: PropTypes.string,
  text51: PropTypes.string,
}

export default Header
