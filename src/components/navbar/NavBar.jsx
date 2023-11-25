import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from './NavBar.styled'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <Container>
      <div className="logo_section"> 
          <h1>welcome</h1>
      </div>
      <div className="info_section">
          <div className="company_name">
            <h3>XYZ Enterprises Pvt.Ltd</h3>
          </div>
          <div className="down_arrow"> 
          <FontAwesomeIcon icon={faAngleDown} size="lg" style={{color: "#0a0a0a",}} />
          </div>
      </div>

    </Container>
  )
}

export default NavBar