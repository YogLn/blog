import React, { memo } from 'react'
import { HomeWrapper } from './style'
import img1 from '@/assets/img/1.jpg';
import img2 from '@/assets/img/2.jpg';
import img3 from '@/assets/img/3.jpg';
import img4 from '@/assets/img/4.jpg';
import img5 from '@/assets/img/5.jpg';
import img5 from '@/assets/img/6.jpg';
export default memo(function Home() {
  return (
    <HomeWrapper>
      {/* <div className="center">
				<h1 className="name">Yogln</h1>
				<span className="circle1"></span>
				<span className="circle2"></span>
				<span className="circle3"></span>
				<span className="circle4"></span>
			</div> */}
      <div class="container">
        <div class="item front">
          <img src={img1} width="100%" alt="" />
        </div>
        <div class="item back">
          <img src={img2} width="100%" alt="" />
        </div>
        <div class="item left">
          <img src={img3} width="100%" alt="" />
        </div>
        <div class="item right">
          <img src={img4} width="100%" alt="" />
        </div>
        <div class="item top">
          <img src={img5} width="100%" alt="" />
        </div>
        <div class="item bottom">
          <img src={img6} width="100%" alt="" />
        </div>
      </div>
    </HomeWrapper>
  )
})
