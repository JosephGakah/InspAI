import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import { logo } from './assets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 border-b border-b[#e6e4f4]'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-28 object-contain'></img>
        </Link>
        <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
