import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fleet from './pages/Fleet'
import Navbar from './components/Navbar'
import FloatingWA from './components/FloatingWA'
import LoadingScreen from './components/LoadingScreen'
import { useState, useEffect } from 'react'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <BrowserRouter>
      {loading && <LoadingScreen />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unit" element={<Fleet />} />
      </Routes>
      <FloatingWA />
    </BrowserRouter>
  )
}
