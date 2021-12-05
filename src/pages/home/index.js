import React, { memo } from 'react'
import { HomeWrapper } from './style'

import cloud from '@/assets/img/cloud.png'
import water from '@/assets/img/water.png'
import boat from '@/assets/img/boat.png'

export default memo(function Home() {
  return (
    <HomeWrapper>
      <div className="container">
        <img src={cloud} alt="" className="cloud" />
        
        <div className="ocean">
          <img src={water} alt="" className="water" />
          <div className="boat">
            <img src={boat} alt="" />
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
})
