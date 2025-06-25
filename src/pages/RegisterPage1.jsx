import React,{useState} from 'react'
import { useAuth } from '../context/Authcontext1'
import { Link } from 'react-router'
import { easeIn, easeInOut, motion } from "motion/react"
import { image } from 'motion/react-client'

const RegisterPage1 = () => {
    const [credentials, setCredentials] = useState({name: "", email: "", password1:"", password2: "",})

    const img1= "https://i.pinimg.com/736x/44/75/7c/44757c185033d0ed12246dba78a4aaa7.jpg"

    const img2 ="https://i.pinimg.com/736x/a5/d7/8f/a5d78f15f95469a9a63ea52ed84a0324.jpg"




    const[image, setImage] = useState(img1)
    
    const {handleRegister} = useAuth();

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setCredentials({... credentials, [name]:value})
    }
  return (
    <motion.div
    animate={{
        boxShadow: "0 0 10px #a855f7, 0 0 20px #22d3ee",
        scale: [2,1]
    }}
    
    className='bg-black h-screen w-full text-white overflow-hidden rounded-2xl flex p-28'>

    <div className='w-1/2 flex flex-col justify-center items-center p-10'>
    <motion.h2 

    initial={{
        textShadow: '2px 2px 5px rgba(0, 255, 255, 0.5), -2px -2px 5px rgba(255, 0, 255, 0.5)',
    }}

     animate = {{
              scale: [0.5,1],
              opacity: [0,1],
              y: [100,-100,0],
              x: [100,-100,0]
    
            }}
            whileHover={{
              textShadow: [
          '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #00ffff',
          '0 0 15px #00ffff, 0 0 25px #00ffff, 0 0 35px #ff00ff',
          '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #00ffff',
        ],
            }}
            transition={{
              duration: 1.5,
  
        ease: 'easeInOut',
            }}
    
    className='text-3xl font-bold mb-6'>Hello Fighter! Come join the forces against the keepers </motion.h2>
    <form onSubmit={(e) => handleRegister(e,credentials)} className='w-full max-w-md space-y-4'>
        <div>
        <label className='block mb-1'>Fighter Name</label>
        <motion.input

        whileHover={{
            boxShadow: [
          '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)',
          '0 0 8px rgba(0, 255, 255, 0.7), 0 0 15px rgba(0, 255, 255, 0.5)',
          '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)',
        ],
        
        }}
        

         transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
         }}
        
        type="text"
        name="name"
        required
        value={credentials.name}
        onChange={(e)=> {handleInputChange(e)}}
        className='w-full p-2 rounded bg-gray-800 text-white outline-none'
        placeholder='Enter your username ' />
</div>
        <div>
        <label className='block mb-1'>Fighter Email</label>
        <motion.input 
        
        whileHover={{
            boxShadow: [
          '0 0 8px rgba(255, 255, 255, 0.5)',
          '0 0 8px rgba(255, 255, 255, 0.8)',
          '0 0 4px rgba(255, 255, 255, 0.5)',
        ],
        }}
        transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
         }}


        
        type="email"
        name="email"
        required
        value={credentials.email}
        onChange={(e) => {handleInputChange(e)}}
        className='w-full p-2 rounded bg-gray-800 text-white outline-none'
        placeholder='Enter your username ' />
</div>
        <div>
        <label className='block mb-1'>Fighter Password</label>
        <motion.input

        initial={{boxShadow: '0 0 8px rgba(255, 69, 0, 0.6), 0 0 12px rgba(255, 0, 0, 0.4)',}}

        whileHover={{
            boxShadow: [
          '0 0 5px rgba(255, 99, 71, 0.5), 0 0 10px rgba(255, 99, 71, 0.3)',
          '0 0 8px rgba(255, 99, 71, 0.7), 0 0 15px rgba(255, 99, 71, 0.5)',
          '0 0 5px rgba(255, 99, 71, 0.5), 0 0 10px rgba(255, 99, 71, 0.3)',
        ],
        }}
        transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
         }}
        
        
        
        
        type="password"
        name="password1"
        required
        value={credentials.password1}
        onChange={(e) => {handleInputChange(e)}}
        className='w-full p-2 rounded bg-gray-800 text-white outline-none'
        placeholder='Enter your username ' />
</div>
        <div>
        <label className='block mb-1'>Confirm Password</label>
        <motion.input
         initial={{ boxShadow: '0 0 8px rgba(0, 255, 0, 0.6), 0 0 12px rgba(50, 205, 50, 0.4)'}}

        whileHover={{
            boxShadow: [
          '0 0 8px rgba(0, 255, 0, 0.6), 0 0 12px rgba(50, 205, 50, 0.4)',
          '0 0 12px rgba(0, 255, 0, 0.8), 0 0 20px rgba(50, 205, 50, 0.6)',
          '0 0 8px rgba(0, 255, 0, 0.6), 0 0 12px rgba(50, 205, 50, 0.4)',
        ],
        }}
        transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
         }}
        
        
        
        
        type="password"
        name="password2"
        required
        value={credentials.password2}
        onChange={(e) => {handleInputChange(e)}}
        className='w-full p-2 rounded bg-gray-800 text-white outline-none'
        placeholder='Enter your username ' />
</div>
<motion.button
style={{ boxShadow: '0 0 10px rgba(200, 255, 20, 0.5)' }}

whileHover={{
    boxShadow: [
      '0 0 10px rgba(57, 2, 200, 0.5)',
      '0 0 15px rgba(57, 2, 200, 0.8), 0 0 25px rgba(255, 255, 208, 0.6)',
      '0 0 10px rgba(57, 255, 20, 0.5)',
    ]

}}

     transition={{ duration: 1, repeat: Infinity, ease: 'easeOut' }}





type="submit"
className='w-full py-2 pt-2 mt-2 rounded font-semibold transition duration-300'>Register</motion.button>
    </form>
    <p className="mt-4 text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-400 hover:underline">
                Login here
              </Link>
            </p>
    </div>

    <motion.div 
    
    animate={{ scale: [0, 1], opacity: [0, 1] }}
            whileHover={{
              opacity:[0.5,1],
              x: [-50,100,0],
              
            }}
            transition={{ ease: easeIn, delay: 1,
              duration: 2
             }}
            onHoverStart={() => setImage(img1)}
            onHoverEnd={() => setImage(img2) 
            }
    
    
    
    
    
    className='h-full flex items-center justify-end pl-12 rounded-lg'>

    <img src={image} alt="Poster" srcset="" />



    </motion.div>




    </motion.div>
  )
}

export default RegisterPage1