import React from 'react'
import Login from './components/Login'

const App = () => {
  return (
    <div className="relative min-h-screen min-w-screen">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/bg.png')]  bg-gray-400 bg-cover bg-center bg-fixed blur-3xl brightness-50"
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <Login />

      </div>

    </div>
  )
}

export default App
