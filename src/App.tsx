import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home'
import { AppRoutes } from './routes/routesDefinition'
import { ModalContextType } from './types/generalTypes'

import './App.css'

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

function App() {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoutes.Home} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </ModalContext.Provider>
  )
}

export default App
