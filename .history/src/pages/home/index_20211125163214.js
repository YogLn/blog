import React, { memo } from 'react'
import { HomeWrapper } from './style'

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
          <img src="./assets/img/1.jpg" width="100%" alt="" />
        </div>
        <div class="item back">
          <img src="./assets/img/2.jpg" width="100%" alt="" />
        </div>
        <div class="item left">
          <img src="./assets/img/3.jpg" width="100%" alt="" />
        </div>
        <div class="item right">
          <img src="./assets/img/4.jpg" width="100%" alt="" />
        </div>
        <div class="item top">
          <img src="./assets/img/5.jpg" width="100%" alt="" />
        </div>
        <div class="item bottom">
          <img src="@.assets/img/6.jpg" width="100%" alt="" />
        </div>
      </div>
    </HomeWrapper>
  )
})
