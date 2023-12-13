
import Banner from "../../components/Banner/Banner"
import Characters from "../../components/Characters/Characters"
import Footer from "../../components/Footer/Footer"
import Synopsis from "../../components/Synopsis/Synopsis"
import Watch from "../../components/Watch/Watch"
import { motion } from 'framer-motion';


export default function Home() {


  return (
    <div className="w-full h-full bg-black px-8 md:px-20">
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


/* 

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Characters() {
    
    const [characters, setCharacters] = useState([]);
    //const [load, setLoad] = useState(false);

    const getData = async () => {
      try {
          const res = await fetch('http://localhost:3001/api/characters/');
          const data = await res.json();
          setCharacters(data);

      }
      catch(e) { console.log(e) }
  }

  useEffect(() => {
      getData()
  }, [])

return (
  <div className="w-full h-full lg:px-28 py-20 lg:py-32 flex flex-col gap-14 text-white  characters">
      <div className="w-full h-full flex justify-center">
          <h2 className="uppercase text-4xl">Personagens</h2>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center gap-20">
          {
              characters.map((item, index) => {
                  return(
                      <Link to={`./character/${item.slug}`} key={index} className="w-[110px] h-[90px] text-center mt-2">
                          <img className='w-[90px] h-[90px] object-cover rounded-xl mx-auto' src={`http://localhost:3001${item.image}`} alt={`${item.characterName} Picture`}/>
                          <p className="text-[.8rem] mt-1">{item.characterName}</p>
                          <p className="text-[.7rem] mt-1">{item.name}</p>
                      </Link>

                  )
              })
          }
      </div>
  </div>
)
}


*/