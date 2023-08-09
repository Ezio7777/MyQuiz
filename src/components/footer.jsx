import React from 'react'
import "../components_style/footer.css"

const  footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <div className='footer-body'>
      <footer id="footer">
        {/* <div className="footer-icons">
          <i className="fa-brands fa-github f-icon"></i>
          <i className="fa-brands fa-instagram f-icon" ></i>
          <i className="fa-brands fa-twitter f-icon" ></i>
          <i className="fa-brands fa-facebook f-icon" ></i>
        </div> */}
        <p>© Copyright {currentYear} beQuick</p>
      </footer>
    </div>
  )
}

export default footer