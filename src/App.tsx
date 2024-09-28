import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home'
import { AppRoutes } from './routes/routesDefinition'
import { Language, ModalContextType } from './types/generalTypes'
import enMessages from './locales/en.json'
import espMessages from './locales/es.json'
import { useSelector } from 'react-redux'
import { IntlProvider } from 'react-intl'

import './App.css'

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

function App() {
  const language: Language = useSelector((s: any) => s.language)
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <IntlProvider locale={language === 'en' ? 'en' : 'es'} messages={language === 'en' ? enMessages : espMessages}>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path={AppRoutes.Home} element={<Home />} />
            </Routes>
          </BrowserRouter>
        </main>
      </ModalContext.Provider>
    </IntlProvider>
  )
}

export default App
