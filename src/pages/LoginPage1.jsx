import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/Authcontext1'
import { useNavigate } from 'react-router';
import { easeIn, easeInOut, motion } from "motion/react"
import { Link } from 'react-router';
import '../index.css'


const LoginPage = () => {
  const { user, handleUserLogin } = useAuth();
  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const navigate = useNavigate()

  const img1 = "https://i.pinimg.com/736x/de/b5/00/deb5006db16d2529ee21e33bada78dec.jpg"

  const img2= "https://i.pinimg.com/736x/a6/f8/67/a6f867349b42987da7cf98638ee00863.jpg"


  const [image, setImage] = useState(img1);

  useEffect(() => {
    if (user) {
      navigate('/')
    }

  }, [])

  const handleInputChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setCredentials({ ...credentials, [name]: value })
  }





  return (

   <motion.div 
   animate={{
        boxShadow: "0 0 10px #ff4dd2, 0 0 20px #ff4dd2",
        scale: [2,1]
    }}
   className='bg-black h-screen w-full text-white overflow-hidden rounded-2xl flex p-28'>
      
    
      <div className='w-1/2 flex flex-col justify-center items-center p-10'>
        < motion.h2 
        animate = {{
          scale: [0.5,1],
          opacity: [0,1],
          y: [100,-100,0],
          x: [100,-100,0]

        }}
        whileHover={{
          textShadow: "0 0 4px #ff0000, 0 0 8px #ff3c3c, 0 0 12px #ff6b6b"
        }}
        transition={{
          ease: easeInOut,
        }}
       
        
        className='text-3xl font-bold mb-6'>Welcome Back</motion.h2>
        
        <form onSubmit={(e) => {handleUserLogin(e,credentials)}} className='w-full max-w-md space-y-4'>
          <div>
            <label className='block mb-1'>Email</label>
            <motion.input
            whileHover={{
              boxShadow: " 0 0 4px #f472b6, 0 0 8px #ec4899, 0 0 12px #db2777 "
            }}
              type="email"
              name="email"
              required
              value={credentials.email}
              onChange={(e) => {handleInputChange(e)}}
              className='w-full p-2 rounded bg-gray-800 text-white outline-none'
              placeholder='Enter your email'
            />
          </div>
          <div>
            <label className='block mb-1'>Password</label>
            <motion.input

            whileHover={{
              boxShadow: "  0 0 5px #ff4d4d, 0 0 10px #ff1a1a"
            }}
              type="password"
              name="password"
              required
              value={credentials.password}
              onChange={(e) => {handleInputChange(e)}}
              className='w-full p-2 rounded bg-gray-800 text-white outline-none'
              placeholder='Enter your password'
            />
          </div>
          <motion.button
          whileHover={{
            boxShadow: "0 0 5px #a855f7, 0 0 10px #9333ea, 0 0 15px #7e22ce"
          }}
            type="submit"
            className='w-full py-2 bg-cyan-500 hover:bg-cyan-600 rounded font-semibold transition duration-300'
          >
            Login
          </motion.button>
        </form>

        <p className="mt-4 text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-cyan-400 hover:underline">
            Register here
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
        
        className=' h-full flex items-center justify-end pl-12 rounded-lg'
      >
        <img
          src={image}
          alt="Poster"
          className="h-full object-contain rounded-lg"
        />
      </motion.div>
    </motion.div>








  )
}

export default LoginPage