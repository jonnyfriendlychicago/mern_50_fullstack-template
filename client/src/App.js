// ! import external css 
import 'bootstrap/dist/css/bootstrap.min.css';
// ! import any/all local css 
import './App.css';
// ! import all components
import EntFormCmp from './components/EntFormCmp';
// ! import required react-bootstrap items 
import {Card} from 'react-bootstrap';
import React,  {useState} from 'react'; // added this line

function App() {
  return (
    <>
    <header>
      <div className="header_content"> 
          <div className="header_content_vert_left"> 
              <a href="#" className="header_home_link" >
                  <h1 >Sitename</h1>
                  <h2>Feel the love.</h2>
              </a>
          </div>
          <div className="header_content_vert_right" > 
              <h2>firstName LastName</h2>
              <p>(UserID: plcehldr)</p>
              <div className="header_content_horiz_right">
                  <a href="#">My Profile</a>
                  <a href="#">Logout</a>
              </div>
          </div>
      </div>
    </header>
    <main className="row_flex_center_top ">
      <div className="row_left" id="toDoApp">
          <Card id="taskInputForm" style = {{ width: "800px", padding: "10px", border: "2px solid black"}}>
            
            <EntFormCmp />

          </Card>
        </div>
      

      

    </main>
    </>
  );
}

export default App;
