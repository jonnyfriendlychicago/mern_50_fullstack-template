import React, {useState} from 'react'
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import {
  Button
  // , Container
  // , Row
  // , Card
} from 'react-bootstrap'; 

const HeaderCmp = (props) => {

  // const [email, emailSetter] = useState("");
  // const [password, passwordSetter] = useState("");
  const navigate = useNavigate();

  const handleLogout = (e)=> {
    e.preventDefault(); 
    axios
      .post(
        "http://localhost:8000/api/users/logout", 
        // {
        // email: email, 
        // password: password
        // }, 
        {withCredentials: true}
      )
      .then( (res) => {
        console.log("user logout clicked");
        // console.log(res, "res"); 
        // console.log(res.data, "is res data!"); 
        navigate("/");
    })
    .catch( (err) => {
      console.log("dude, some error logging out")  
      console.log(err.response.data); 
        // errorMessageSetter(err.response.data.message)
    }); 

  }

  return (
      <header>
      <div className="header_content"> 
          <div className="header_content_vert_left"> 
            <Link className="header_link" to={'/'}> 
              <h1 className="header_text">Gizmo Management App</h1>
              {/* <h2>Site slogan</h2> */}
            </Link>
          </div>
          {/* gonna add a ternary statement related to all of below: if logged in, show all this stuff.  if not, show nada */}
          <div className="header_content_vert_right" > 
              <h2 className="header_text">firstName LastName</h2>
              <p className="header_text">(UserID: plcehldr)</p>
              <div className="header_content_horiz_right">
                  <Button className="header_link" variant="link" style = {{width: "10rem"}}>My Profile</Button>
                  <Button className="header_link" variant="link" onClick={handleLogout}>Logout</Button>
                  
              </div>
          </div>
      </div>
    </header>
  //   <p> HeaderPlaceholder</p>
  )

}; 

export default HeaderCmp; 