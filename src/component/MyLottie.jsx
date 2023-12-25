import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../public_pro/animation.json'

export default function MyLottie() {
    return <Lottie animationData={animationData} className=' z-0  w-80 h-80' />;
}
