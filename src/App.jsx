import React from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'


const App = () => {
  return (
    <div className="relative min-h-screen min-w-screen">      

      {/* Content */}
      <div className="">
        <Routes>
          <Route path='/' element = {<Login />}/>
          <Route path='/Home'  element = {<Home />} />
        </Routes>


      </div>

    </div>
  )
}

export default App
