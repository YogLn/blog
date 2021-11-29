import React, { memo } from 'react'
import { HomeWrapper } from './style'
import img1 from '@/assets/img/1.jpg';
import img2 from '@/assets/img/2.jpg';
import img3 from '@/assets/img/3.jpg';
import img4 from '@/assets/img/4.jpg';
import img5 from '@/assets/img/5.jpg';
import img6 from '@/assets/img/6.jpg';
export default memo(function Home() {
  return (
    <HomeWrapper>
      <div className="container">
        <div className="item front">
          <img src={img1} width="100%" alt="" />
        </div>
        <div className="item back">
          <img src={img2} width="100%" alt="" />
        </div>
        <div className="item left">
          <img src={img3} width="100%" alt="" />
        </div>
        <div className="item right">
          <img src={img4} width="100%" alt="" />
        </div>
        <div className="item top">
          <img src={img5} width="100%" alt="" />
        </div>
        <div className="item bottom">
          <img src={img6} width="100%" alt="" />
        </div>
      </div>
    </HomeWrapper>
  )
})
