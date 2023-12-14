
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const cardsVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };

export default function Characters() {
    
    const [characters, setCharacters] = useState([]);
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

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

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

  return (
    <div className="w-full h-full lg:px-28 py-20 lg:py-32 flex flex-col gap-14 text-white " >
        <div className="w-full h-full flex justify-center">
            <h2 className="uppercase text-4xl">Personagens</h2>
        </div>
        <div className="w-full h-full min-h-screen flex flex-wrap justify-center gap-20" ref={ref} >
            {
                characters.map((item, index) => {
      
                    return(
                        <motion.div 
                            key={index}
                            variants={cardsVariants}
                            animate={controls}
                            initial="hidden"
                            > 
                            <Link to={`./character/${item.slug}`}  className="w-[110px] h-[90px] text-center mt-2">
                                <img className='w-[90px] h-[90px] object-cover rounded-xl mx-auto' src={`http://localhost:3001${item.image}`} alt={`${item.characterName} Picture`}/>
                                <p className="text-[.8rem] mt-1">{item.characterName}</p>
                                <p className="text-[.7rem] mt-1">{item.name}</p>
                            </Link>
                        </motion.div>

                    )
                })
            }
        </div>
    </div>
  )
}
