import React, { useState, useEffect } from 'react'
import { easeIn, motion } from "motion/react"

const Character = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const characterId = [200772, 200776,250843,237486,237485,200791]





  useEffect(() => {

const fetchImages = async() => {
    const promises = characterId.map(async (id) => {
      const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/pictures`);
      const data = await response.json();
      // console.log(`for  ${id} this is the array`);
      // console.log(data);
      return data?.data?.[0]?.jpg?.image_url || "";
      
    })

    const result = await Promise.all(promises);
    console.log("Result:",result);
    

    setImageUrls(result);


  };
  fetchImages();

  }, [characterId])

  return (
    <div className='flex flex-wrap gap-3'>
      <motion.div

      whileHover={{
        scale: 1.02,
        
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",

         transition: {
        
         duration: 0.3, 
         ease: "easeOut"

      },

      textShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}

     
      
      
      
      
      className="relative flex flex-col my-6 bg-gradient-to-r from-neutral-50 to-neutral-900 shadow-sm border  rounded-lg w-96 p-8 border-blue-200">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md object-center pl-7">
          { <motion.img
          
          
          src={imageUrls[0]} alt="card-image" className='object-contain' style={{height:"320px"}}/> }
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-100 text-xl font-semibold">
            Fighter D
          </h6>
          <p className="text-slate-100 leading-normal font-light">
            Fighter D, the cunning protagonist of Go! Go! Loser Ranger!, is a rebellious Duster from the Villainous Army, driven by a fierce desire to dismantle the oppressive Dragon Keepers. With shapeshifting abilities and a knack for infiltration, he navigates a world of staged battles and hidden agendas, blending ruthless ambition with a surprising sense of justice.


          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <a className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" href='https://myanimelist.net/character/200772/Sentouin_D'>
            Read more
          </a>
        </div>
      </motion.div>

      <motion.div

      initial= {{
        boxShadow:  "0px 4px 8px rgba(255, 0, 0, 0.2)",
         transition: { duration: 0.3, ease: "easeOut" }

      }}

      whileHover={{
         boxShadow: "0px 8px 16px rgba(255, 0, 0, 1.8)", // Bright red glow
      scale: 1.05, // Slight scale for emphasis
      transition: { duration: 0.3, ease: "easeOut" },
      textShadow: "0px 8px 16px rgba(255, 0, 0, 1.8)",

      }}
      
      className="relative flex flex-col my-6 bg-gradient-to-r from-red-400 to-red-700 shadow-sm border rounded-lg w-96 p-8">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md object-center pl-7">
          { <img src={imageUrls[1]} alt="card-image" className='object-contain' style={{height:"320px"}}/> }
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-100 text-xl font-semibold">
            Red Keeper
          </h6>
          <p className="text-slate-100 leading-normal font-light">
            Red Keeper is the fiery, charismatic hotshot of the Dragon Keepers, radiating confidence and brute strength in Go! Go! Loser Ranger!. His explosive combat style and flair for theatrics make him a crowd favorite, but his impulsive nature and blind trust in the Keeper hierarchy mask vulnerabilities that threaten to unravel his heroic image.




          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <a className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type='button' href='https://myanimelist.net/character/200776/Sousei_Akabane/clubs'>
            Read more
          </a>
        </div>
      </motion.div>


      <motion.div
       initial= {{
      boxShadow: "0px 4px 8px rgba(255, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    }}

    whileHover= {{
      boxShadow: "0px 8px 16px rgba(0, 0, 255, 1.8)", 
      scale: 1.05, 
      transition: { duration: 0.3, ease: "easeOut" },
      textShadow:"0px 8px 16px rgba(0, 0, 255, 1.8)", 
    }}
      
      
      
      className="relative flex flex-col my-6 bg-gradient-to-r from-blue-400 to-indigo-900 shadow-sm border border-slate-200 rounded-lg w-96 p-8">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md object-center pl-7">
          { <img src={imageUrls[2]} alt="card-image" className='object-contain' style={{height:"320px"}}/> }
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-100 text-xl font-semibold">
            Blue Keeper
          </h6>
          <p className="text-slate-100 leading-normal font-light">
            The stoic and disciplined leader of the Dragon Keepers in Go! Go! Loser Ranger!, Blue Keeper wields immense power and an unyielding sense of duty. His ice-cold demeanor and mastery of combat make him a formidable force, but his rigid loyalty to the Keeper system hides a complex inner struggle, hinting at deeper motives beneath his heroic facade




          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <a className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" href='https://myanimelist.net/character/250843/Rikuto_Aoshima'>
            Read more
          </a>
        </div>
      </motion.div>


      <motion.div
        initial= {{
      boxShadow: "0px 4px 8px rgba(234, 179, 8, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    }}

    whileHover= {{
      boxShadow: "0px 8px 16px rgba(234, 179, 8, 1.8)", 
      scale: 1.05, 
      transition: { duration: 0.3, ease: "easeOut" },
      textShadow: "0px 8px 16px rgba(234, 179, 8, 1.8)"
    }}
      
      
      
      className="relative flex flex-col my-6 bg-gradient-to-r from-amber-300 to-neutral-900 shadow-sm border border-slate-200 rounded-lg w-96 p-8">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md object-center pl-7">
          { <img src={imageUrls[3]} alt="card-image" className='object-contain' style={{height:"320px"}}/> }
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-100 text-xl font-semibold">
            Yellow Keeper
          </h6>
          <p className="text-slate-100 leading-normal font-light">
            The enigmatic strategist of the Dragon Keepers in Go! Go! Loser Ranger!, Yellow Keeper combines razor-sharp intellect with electrifying combat prowess. Known for their sly charm and unpredictable tactics, they manipulate battles from the shadows, but their cryptic motives and questionable loyalty to the Keeper system hint at a hidden agenda.






          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <a className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" href='https://myanimelist.net/character/237486/Shinya_Kiritani'>
            Read more
          </a>
        </div>
      </motion.div>


      <motion.div
      initial= {{
       boxShadow: "0px 4px 8px rgba(34, 197, 94, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    }}

    whileHover= {{
       boxShadow: "0px 8px 16px rgba(34, 197, 94, 1.8)",
      scale: 1.05, 
      transition: { duration: 0.3, ease: "easeOut" },
      textShadow: "0px 8px 16px rgba(34, 197, 94, 1.8)",
    }}
      
      
      
      className="relative flex flex-col my-6 bg-gradient-to-r from-green-700 to-neutral-900 shadow-sm border border-slate-200 rounded-lg w-96 p-8">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md object-center pl-7">
          { <img src={imageUrls[4]} alt="card-image" className='object-contain' style={{height:"320px"}}/> }
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-100 text-xl font-semibold">
            Green Keeper
          </h6>
          <p className="text-slate-100 leading-normal font-light">
            The enigmatic strategist of the Dragon Keepers in Go! Go! Loser Ranger!, Yellow Keeper combines razor-sharp intellect with electrifying combat prowess. Known for their sly charm and unpredictable tactics, they manipulate battles from the shadows, but their cryptic motives and questionable loyalty to the Keeper system hint at a hidden agenda.






          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <a className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" href='https://myanimelist.net/character/237485/Green_Keeper'>
            Read more
          </a>
        </div>
      </motion.div>


      <motion.div
      
      initial= {{
       boxShadow: "0px 4px 8px rgba(236, 72, 153, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    }}

    whileHover= {{
       boxShadow: "0px 8px 16px rgba(236, 72, 153, 1.6)",
      scale: 1.05, 
      transition: { duration: 0.3, ease: "easeOut" },
      textShadow: "0px 8px 16px rgba(236, 72, 153, 1.6)",
    }}
      
      
      
      className="relative flex flex-col my-6 bg-gradient-to-r from-pink-400 to-neutral-900 shadow-sm border border-slate-200 rounded-lg w-96 p-8">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md object-center pl-7">
          { <img src={imageUrls[5]} alt="card-image" className='object-contain' style={{height:"320px"}}/> }
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-100 text-xl font-semibold">
            Pink Keeper
          </h6>
          <p className="text-slate-100 leading-normal font-light">
            The enigmatic strategist of the Dragon Keepers in Go! Go! Loser Ranger!, Yellow Keeper combines razor-sharp intellect with electrifying combat prowess. Known for their sly charm and unpredictable tactics, they manipulate battles from the shadows, but their cryptic motives and questionable loyalty to the Keeper system hint at a hidden agenda.






          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <a className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" href='https://myanimelist.net/character/200791/Sesera_Sakurama'>
            Read more
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Character