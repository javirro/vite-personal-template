import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home'
import { AppRoutes } from './routes/routesDefinition'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
