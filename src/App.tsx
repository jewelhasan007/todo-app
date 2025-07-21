
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/layout/Navbar'
import { Button } from './components/ui/button'

function App() {


  return (
    <>
     <h2 className='bg-gray-400 text-center m-3 rounded-2xl p-3'>Basic ToDo App</h2>
     <Navbar></Navbar>
     <Outlet></Outlet>
    </>
  )
}

export default App
