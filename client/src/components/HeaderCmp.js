import React, {useState} from 'react'
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 
import {Container, Row, Card} from 'react-bootstrap'; 

const HeaderCmp = (props) => {

return (
    <header>
    <div className="header_content"> 
        <div className="header_content_vert_left"> 
          <Link className="header_link" to={'/'}> 
            <h1 className="header_text">Gizmo Management App</h1>
            {/* <h2>Site slogan</h2> */}
          </Link>
        </div>
        <div className="header_content_vert_right" > 
            <h2 className="header_text">firstName LastName</h2>
            <p className="header_text">(UserID: plcehldr)</p>
            <div className="header_content_horiz_right">
                <Link className="header_link" to={'/'}>My Profile</Link>
                <Link className="header_link" to={'/'}>Logout</Link>
            </div>
        </div>
    </div>
  </header>
//   <p> HeaderPlaceholder</p>
)

}; 

export default HeaderCmp; 