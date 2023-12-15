
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
    const [charactersImages, setCharacterImages] = useState([]);
    const [isAnimationDone, setIsAnimationDone] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    const getData = async () => {

        fetch('https://raw.githubusercontent.com/vandilsonbrito/wiki-suits/main/src/API/characters.json')
        .then(response => response.json())
        .then(data => {
            // Faça algo com os dados JSON
            setCharacters(data);
            setCharacterImages(data.map((character)=> (character.characterName).replace(' ', '_')));
            setIsLoaded(true)
        })
        .catch(error => {
            console.error('Erro ao recuperar o arquivo JSON:', error);
        });
    }


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (inView && (!isAnimationDone)) {
          controls.start("visible");
          setIsAnimationDone(true);
        }
      }, [controls, inView, isAnimationDone]);

  return (
    <div className="w-full h-full lg:px-28 py-20 lg:py-32 flex flex-col gap-14 text-white " >
        <div className="w-full h-full flex justify-center">
            <h2 className="uppercase text-4xl">Personagens</h2>
        </div>
        <div className="w-full h-full min-h-screen flex flex-wrap justify-center gap-20" ref={ref} >
            {   
                isLoaded ? (
                    
                    characters.map((item, index) => {
                        return(
                            <motion.div
                                key={index}
                                variants={cardsVariants}
                                animate={controls}
                                initial={isAnimationDone? 'visible' : 'hidden'}
                                >
                                <Link to={`./character/${item.slug}`}  className="w-[110px] h-[90px] text-center mt-2">
                                    <img className='w-[90px] h-[90px] object-cover rounded-xl mx-auto' src={`https://raw.githubusercontent.com/vandilsonbrito/wiki-suits/main/src/API/public/characters/${charactersImages[index]}.webp`} alt={`${item.characterName} Picture`}/>
                                    <p className="text-[.8rem] mt-1">{item.characterName}</p>
                                    <p className="text-[.7rem] mt-1">{item.name}</p>
                                </Link>
                            </motion.div>
                        )
                    })
                    )
                
                : (
                    <p className='text-lg text-white'>Recarregue a Página!</p>
                    )
            }
        </div>
    </div>
  )
}
