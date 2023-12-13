import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Personagem from './pages/personagem/Personagem';

function App() {
  
  const location = useLocation();
  console.log(location)

  return (

      <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} key="/"/>
            <Route path="/character/:slug" element={<Personagem />} key="/character/:slug"/>
          </Routes>
      </AnimatePresence>
  )
}

export default App
