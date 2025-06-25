import React from 'react'
import Navbar from "../components/Navbar";
import { easeIn, motion } from "motion/react"

const HomePage = () => (
  <>
    <Navbar className="p-28" />

    <div className='bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 min-h-screen w-full text-white rounded-lg'>

      <div className='flex flex-row justify-start items-start p-2 pl-8 '>
        <motion.div

          whileHover={{
            x: 20
          }}


          className='bg-white text-black '>
          <motion.h4

            initial={{
              boxShadow: "0px 8px 16px 15px rgba(0,255,189,0.8)",
            }}
            whileHover={{
              scale: [1.51, 1],
              opacity: [0, 1],
              y: "20",
              boxShadow: "3px 8px 14px 12px rgba(122,0,189,0.6)"
            }}

            transition={{
              ease: easeIn
            }}
            className='font-bold   text-4xl  text-shadow-md bg-opacity-50 rounded-lg '>GO GO! LOSER RANGER</motion.h4>
        </motion.div>
      </div>
      <motion.div 
      
      whileHover={{
        textShadow: "7px 8px 8px 8px rgba(25,255,122,0.8)",
         scale: [1.5,1],
          opacity: [0,1],
          transition: { ease: easeIn, duration: 0.3
}
      }}
      
      
      className='flex flex-row justify-start p-12'>
        <motion.p


        

        transition={{
          ease: easeIn
        }}


        className='text-xl p-2 font-serif'>
          Buckle up for a wild ride where heroes aren’t what they seem! In Go! Go! Loser Ranger!, the Divine Dragon Rangers dazzle the world as saviors, clashing with the Villainous Army in weekly showdowns. But here’s the kicker: the villains lost ages ago, and their immortal grunts are now forced to fake defeat to keep the Rangers’ fame alive. Enter Sentouin D, a fed-up foot soldier with a vendetta. Teaming with rogue ranger Yumeko Suzukiri, D dives into the Rangers’ glitzy world to expose their dirty secrets and smash their Divine Artifacts. Packed with betrayal, epic battles, and dark humor, this anime flips the superhero game—will D spark a revolution or crash and burn?
        </motion.p>


      </motion.div>
      <motion.div
      animate={{
        x:[-50,0,50,0],
       
      }}

     

      
      
      className='flex flex-row justify-center p-8 w-full'>
        <motion.img
        
         whileHover={{
        boxShadow: "0px 8px 20px rgba(59, 130, 246, 0.6),0px 8px 20px rgba(239, 68, 68, 0.6),0px 8px 20px rgba(234, 179, 8, 0.6),0px 8px 20px rgba(34, 197, 94, 0.6)",
        scale: 1.02
      }}
        src="https://i.pinimg.com/736x/b7/b3/2c/b7b32cfedf3f326c5512ee2228a09f68.jpg" alt="" className='rounded-2xl' />
      </motion.div>
    </div>
  </>
)

export default HomePage