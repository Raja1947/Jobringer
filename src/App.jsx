import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import EmployeeDiv from './components/employeeDiv/EmployeeDiv'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    <Navbar/>
    <EmployeeDiv/>
   </div>
  )
}

export default App
