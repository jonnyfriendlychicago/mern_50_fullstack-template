// ! findReplace all "Gizmo" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "ent" Make sure lower case
import React from 'react'; // added this line
// ! import routing func 
import {Routes, Route} from 'react-router-dom';
// ! import external css 
import 'bootstrap/dist/css/bootstrap.min.css';
// ! import any/all local css 
import './App.css';
// ! import all views
import MainView from './views/MainView';
// ! import all components
// import GizmoFormCmp from './components/GizmoFormCmp';
import GizmoDetailCmp from './components/GizmoDetailCmp';
// ! import required react-bootstrap items 
import {Link} from 'react-router-dom'; 

const App = () => {
  return (
    <>
    <header>
      <div className="header_content"> 
          <div className="header_content_vert_left"> 
            <Link className="header_link" to={'/'}> 
              <h1>Sitename</h1>
              <h2>Site slogan</h2>
            </Link>
          </div>
          <div className="header_content_vert_right" > 
              <h2>firstName LastName</h2>
              <p>(UserID: plcehldr)</p>
              <div className="header_content_horiz_right">
                  <Link className="header_link" to={'/'}>My Profile</Link>
                  <Link className="header_link" to={'/'}>Logout</Link>
              </div>
          </div>
      </div>
    </header>
    <Routes>
      <Route element={<MainView/>} path="/" default /> 
      <Route element={<GizmoDetailCmp/>} path="/gizmos/:id" /> 
    </Routes>
    <footer>
      <h3>Powered by Coding Dojo</h3>
    </footer>
    </>
  );
}

export default App;
