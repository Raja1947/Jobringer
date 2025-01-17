import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import EmployeeDiv from './components/employeeDiv/EmployeeDiv'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    <Navbar/>
    <EmployeeDiv/>
    <Home/>
   </div>
  )
}

export default App
