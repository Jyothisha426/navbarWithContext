import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const navbarBgClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'
      const navItemLinkClassName = isDarkTheme
        ? 'nav-link-light'
        : 'nav-link-dark'
      const websiteUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      return (
        <div className={`navbar ${navbarBgClassName}`}>
          <div className="nav-content">
            <img src={websiteUrl} className="website-logo" alt="website logo" />
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link className={`nav-link ${navItemLinkClassName}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link
                  className={`nav-link ${navItemLinkClassName}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              data-testid="theme"
              className="theme-btn"
              onClick={onToggleTheme}
            >
              <img src={themeImageUrl} className="theme-img" alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
