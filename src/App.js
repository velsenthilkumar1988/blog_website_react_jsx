import React from 'react'
import Home from './Components/pages/home/Home'
import Topbar from './Components/topbar/Topbar.jsx'
import LoginPage from './Components/pages/login/Login.jsx';
import RegisterPage from './Components/pages/register/Register.jsx';
import SettingsPage from './Components/pages/settings/Settings.jsx';
import SinglePage from './Components/pages/single/Single.jsx';
import WritePage from './Components/pages/write/Write.jsx';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App(){
  return(
    <Router>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/single' element={<SinglePage/>}/>
        <Route path='/write' element={<WritePage/>}/>
      </Routes>
    </Router>
  );
}
export default App;