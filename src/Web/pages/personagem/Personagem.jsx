import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from 'framer-motion';

export default function Personagens() {
    
    const { slug } = useParams();
    const [character, setCharacter] = useState([]);
    

    const getDataCharacter = async () => {
        /* try {
            const res = await fetch(`http://localhost:3001/api/characters/${slug}`);
            const data = await res.json();
            setCharacter(data);
        }
        catch(e) { console.log(e) } */
        
        const charactersURL = "https://raw.githubusercontent.com/vandilsonbrito/wiki-suits/main/src/API/characters.json";

        fetch(charactersURL)
        .then(response => response.json())
        .then(data => {
            const character = data.filter((item) => {return item.slug === slug});
            setCharacter(character[0]);

            if (character) {
                console.log(character);
            } else {
            console.log("Personagem não encontrado");
            }
        })
        .catch(error => console.error("Erro ao obter dados:", error));
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getDataCharacter()
    }, [slug])


  return (
    <div className="w-full h-full bg-black personagem" >
        <motion.div
        initial={{opacity: 0.5}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        
        >
            {character ? (
                <div className="w-full h-full min-h-screen text-white p-7 md:p-20 flex flex-col items-center gap-7">
                    <img className='w-[180px] h-[180px] object-cover rounded-sm mx-auto' src={`http://localhost:3001${character.image}`} alt={`${character.characterName} Picture`}/>
                    <h2 className="text-2xl mb-8">{character.characterName}</h2>
                    <div dangerouslySetInnerHTML={{ __html: character?.description?.join('') }} />
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        
            <Footer/>
        </motion.div>
    </div>
  )
}
