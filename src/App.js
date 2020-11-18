import React from 'react'
import './App.css';
import Navbar from "./components/navbar/navbar";
import Routes from './../src/routes/index'
import {BrowserRouter as Router}  from 'react-router-dom'



class App extends React.Component {
 render() {
     return(
         <div className='app'>
             <Router>
                 <Navbar/>
                 <Routes/>
             </Router>
         </div>
     )
 }
}

export default App;