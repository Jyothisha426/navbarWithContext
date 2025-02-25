import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBgClassName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'
      const notFoundHeadingClassName = isDarkTheme
        ? 'not-found-heading-light'
        : 'not-found-heading-dark'
      const notFoundContentClassName = isDarkTheme
        ? 'not-found-content-light'
        : 'not-found-content-dark'
      return (
        <div className={`not-found-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="not-found-responsive">
            <div className="not-found">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1 className={`heading ${notFoundHeadingClassName}`}>
                Lost Your Way?
              </h1>
              <p className={`para ${notFoundContentClassName}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
