import React from 'react'
import "./home.css";
import Header from '../../header/Header.jsx';
import Posts from '../../posts/Posts.jsx';
import Sidebar from '../../sidebar/Sidebar.jsx';

export default function Home() {
  return (
    <>
      <Header/>
      <div className='home'>
        <Posts/>
        <Sidebar/>
      </div>
    </>
    
  )
}
