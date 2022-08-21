import React from 'react'
import Productive from '../home/Productive'
import Newsletter from './Newsletter'
import Subcribe from '../home/Subcribe'

const Home = () => {
  return (
    <div style={{minHeight: '100vh', width: '100%'}}>
      <Productive/>
      <Newsletter/>
      <Subcribe/>
    </div>
  )
}

export default Home