
import Banner from "../../components/Banner/Banner";
import Characters from "../../components/Characters/Characters";
import Footer from "../../components/Footer/Footer";
import Synopsis from "../../components/Synopsis/Synopsis";
import Watch from "../../components/Watch/Watch";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

export default function Home() {

  const [scrollY, setScrollY] = useState(parseInt(localStorage.getItem('scrollPos')) || 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Efeito para salvar scrollY no sessionStorage quando a página é desmontada
  useEffect(() => {
    localStorage.setItem("scrollPos", JSON.stringify(scrollY));
  }, [scrollY]);

  // Efeito para restaurar o valor de scrollY ao retornar à página
  useEffect(() => {
    const scrollYStorage = localStorage.getItem('scrollPos');
    setScrollY(scrollYStorage ? parseInt(scrollYStorage, 10) : 0);

    window.scrollTo(0, scrollYStorage ? parseInt(scrollYStorage, 10) : 0);
  }, []);

  
  
  return (
    <div className="w-full h-full px-8 md:px-20">
      {}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Banner />
        <Synopsis />
        <Characters/>
        <Watch />
        <Footer />
      </motion.div>
    </div>
  )
}
