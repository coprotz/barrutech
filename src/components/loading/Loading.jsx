import React from 'react'
import './loading.css'
import Lottie from "lottie-react";
import loading from '../../hook/loading.json'

const Loading = () => {
  return (
    <div className='loading'>
        <Lottie animationData={loading} loop={true} height={200} width={200}/>
    </div>
  )
}

export default Loading