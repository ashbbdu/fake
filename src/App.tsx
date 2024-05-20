import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from '../../../node_modules/react-router-dom/dist/index'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
     </Routes>
    </div>
  )
}

export default App
