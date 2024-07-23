import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./components/Form"
import Content from './components/Content'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

    <div className='main' >
     <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/content" element={<Content />} />
      </Routes>
  </div>
    </Router>
  )
}

export default App
