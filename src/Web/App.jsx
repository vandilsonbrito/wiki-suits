import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home'
import Personagem from './pages/personagem/Personagem';

function App() {
  
  const location = useLocation();

  return (

      <AnimatePresence mode='wait'>
          <div className='w-full h-full bg-black'>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} key="/"/>
              <Route path="/character/:slug" element={<Personagem />} key="/:slug"/>
            </Routes>
          </div>
      </AnimatePresence>
  )
}

export default App
