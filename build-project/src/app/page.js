import React from 'react'


import Nav from './Components/Nav.jsx';
import SideBar from './Components/SideBar.jsx';
import Footer from './Components/Footer.jsx';
import Map from './Components/Map.jsx';
export default function Home() {
  return (
   
   
   
    


    <div className="bg-sky-700">
      
    <Nav/>
       <main className= " flex items-center">
        <SideBar/>
        <Map/>
       </main>
    <Footer/>
      
      
    </div>
    
  );
}
