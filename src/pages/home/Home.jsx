import React, { useEffect, useState } from 'react'
import './home.css'
import Lottie from "lottie-react";
import data from '../../hook/data.json'
import Loading from '../../components/loading/Loading';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';


function Home() {
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
                    className='btn_about' onClick={() =>navigate('/about')}>ABOUT US
                </motion.button>
            </div>
            <div className="home_wrapper">
                <div className="home_left">                    
                    <div className="home_body">
                        <h3>WE'RE</h3>
                        <h1>STILL CODING OUR SITE</h1>
                        <h4>Hi, we are lunching our site very soon, please stay tuned!!</h4>
                        <div className="home_action">
                            <input type="text" placeholder='EMAIL ADDRESS' className='sub_input'/>
                            <button className='btn_sub'>SUBSCRIBE</button>
                        </div>
                    </div>
                   
                </div>
                <div className="home_right">
                    <Lottie animationData={data} loop={true} height={300} width={200}/>
                </div>
            </div>

        </motion.div>
      
    </div>
  )
}

export default Home