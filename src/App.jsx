import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/login'
import Signup from './Components/Signup/signup'

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/password/reset' 
      //element={<Login/>}
      />
    </Routes>
  </Router>
  )
}

export default App