import React from 'react'
import Contact from "./Contact"
import Social from "./Social"
import "./footer.css"
import Hire from '../hire/Hire'

const Footer = () => {
  return (
    <div className='Footer-bg p-3'>
      <Hire/>
     <div className="d-flex footer-h align-items-center">
             <Social/>
            <Contact/>
            
     </div>
    </div>
  )
}

export default Footer
