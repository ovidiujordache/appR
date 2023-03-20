import React from 'react'
import Dash from './dashboard'
import Account from './Account'
import About from '../components/About'
import Login from './Login'
import Home from './Home'
import { Router, Link } from "@reach/router"






const App = () => {


    return (
        <div className="App">
        <div className='gradient_Bg'>
         <Router>
        
         <Home path="/"/>
         <About path="about"/>
         <Account  path="Account"/>
         <Login path="login"/>  
   
   
        </Router>




        </div></div>


    )
}

export default App;