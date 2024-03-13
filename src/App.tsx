import { useState } from 'react'
import SignUp from '/src/views/Signup/Signup.tsx'
import Home from '/src/views/Home/Home.tsx'
import './App.css'

function App() {


  return (
    <>
      <div className="maindiv">
        <Home />
        <SignUp />
      </div>
    </>
  )
}

export default App