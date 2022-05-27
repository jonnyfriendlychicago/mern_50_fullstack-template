// ! findReplace all "Gizmo" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "ent" Make sure lower case
import React from 'react'; // added this line
// ! import routing func 
import {Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'; 
// ! import external bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
// ! import any/all local css 
import './App.css';
// ! import all views
import MainView from './views/MainView';
import LogRegView from './views/LogRegView';
// ! import all components
import HeaderCmp from './components/HeaderCmp';
import GizmoDetailCmp from './components/GizmoDetailCmp';
import GizmoUpdateCmp from './components/GizmoUpdateCmp'; 
import GizmoFormStandAloneCmp from './components/GizmoFormStandAloneCmp'; // adding below for single entry page
import GizmoListStandAloneCmp from './components/GizmoListStandAloneCmp'; // adding below for single entry page
import ProfileCmp from './components/ProfileCmp'; 

const App = () => {
  return (
    <>
    <HeaderCmp />
    <Routes>
      <Route element={<LogRegView />} path="/" />
      <Route element={<MainView/>} path="/home"  /> 
      {/* default */}
      {/*! get above resolved later! threw in the 'home' as the path for now*/}
      <Route element={<ProfileCmp/>} path="/user/profile/:userName" />
      <Route element={<GizmoDetailCmp/>} path="/gizmos/:id" /> 
      <Route element={<GizmoUpdateCmp/>} path="/gizmos/edit/:id"/>
      {/* adding below for single entry page */}
      <Route element={<GizmoFormStandAloneCmp/>} path="/gizmos/new" /> 
      <Route element={<GizmoListStandAloneCmp/>} path="/gizmos/all" /> 
    </Routes>
    <footer>
      <h3>Powered by Coding Dojo</h3>
    </footer>
    </>
  );
}

export default App;
