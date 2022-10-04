import React, { useEffect, useState } from 'react'
import './about.css'
import Lottie from "lottie-react";
import about from '../../hook/about.json'
import Loading from '../../components/loading/Loading';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';


function About() {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])
  return (
    <div className='home_container'>
        {loading && <Loading/>}
        <motion.div 
            initial={{x: '-100%'}}
            animate={{x: '0'}}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 1}}            
            className="home_inner">
            <div className="home_logo">
                <h2>BARRU<span>TECH</span></h2>
                <motion.button 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: 2}}
                    className='btn_about' onClick={() =>navigate('/')}>HOME
                </motion.button>
            </div>
            <div className="about_wrapper">        
                <div className="about_inner">
                    <div className="about_lotie">
                        <Lottie animationData={about} loop={true} height={300} width={200}/>
                    </div>
                    
                    <h1 className='about_title'>We are coming to bring tech solutions to your business</h1>
                </div>
            </div>

        </motion.div>
      
    </div>
  )
}


export default About