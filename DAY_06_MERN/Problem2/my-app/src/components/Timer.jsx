import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {
    const [seconds,setSeconds]=useState(0)

    useEffect(()=>{
        const timerId=setInterval(()=>{
            setSeconds(prevSeconds=>prevSeconds+1)
        },1000)

        return ()=>clearInterval(timerId)
    },[])

  return (
    <div>seconds:{seconds}</div>
  )
}

export default Timer