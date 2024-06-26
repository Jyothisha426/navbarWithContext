import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutBgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutTextClassName = isDarkTheme
        ? 'about-text-light'
        : 'about-text-dark'
      return (
        <div className={`about-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="about-page-container">
            <div className="about-container">
              <img src={aboutBgUrl} alt="about" className="about-img" />
              <h1 className={`about-heading ${aboutTextClassName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
