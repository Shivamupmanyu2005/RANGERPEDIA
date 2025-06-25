import React from 'react'
import { easeIn, motion } from "motion/react"
import { useAuth } from '../context/Authcontext1'
import { LogOut, LogIn } from 'react-feather'
import { Link , useNavigate } from 'react-router'

const Navbar = () => {
    const {user, handleLogout} = useAuth()
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <motion.div
                initial={{ opacity: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                animate={{
                    opacity: 1,
                    boxShadow: "0px 10px 30px rgba(170, 0, 255, 0.4)"
                }}
                transition={{
                    delay: 3,
                    ease: easeIn,
                    duration: 1
                }}
                className='flex   px-6 py-3 rounded-3xl  justify-between'
            >
                <div>
                    <motion.button 
                    onClick={() => navigate('/character')}
                        whileHover={{
                            scale: [1.1, 1],
                            boxShadow: "0px 8px 24px rgba(255, 0, 0, 0.5)",
                             x: [10,0]
                        }}
                        transition={{
                            ease: easeIn
                        }}
                        className='bg-cyan-200 rounded-lg font-serif'> Characters</motion.button>
                </div>
                <div>
                    <motion.button
                    onClick = {() => navigate('/strategyroom')}
                        whileHover={{
                            scale: [1.1, 1],
                            boxShadow: "0px 8px 24px rgba(0, 102, 255, 0.5)",
                            x: [10,0]
                        }}
                        transition={{
                            ease: easeIn
                        }}

                        className='bg-red-500 rounded-lg font-serif'>Strategy Room</motion.button>
                </div>
                <div>

                {user ? (

                    <motion.div
                    whileHover={{
                            scale: [1.1, 1],
                        }}
                        transition={{
                            ease: easeIn
                        }}
                    
                    >

                    <LogOut onClick={handleLogout}/>

                    </motion.div>
                ) : (

                    <Link to = "/">

                        <LogIn />
                    </Link>

                )}


                </div>
            </motion.div>
        </div>
    )
}

export default Navbar
