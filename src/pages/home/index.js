import React, { memo } from 'react'
import { HomeWrapper } from './style'

export default memo(function Home() {
  return (
    <HomeWrapper>
      <div className="container">
        <img
          src="https://blog-1304388092.cos.ap-chengdu.myqcloud.com/blog%2Fcloud.png"
          alt=""
          className="cloud"
        />
        <div className="ocean">
          <img
            src="https://blog-1304388092.cos.ap-chengdu.myqcloud.com/blog%2Fwater.png"
            alt=""
            className="water"
          />
          <div className="boat">
            <img
              src="https://blog-1304388092.cos.ap-chengdu.myqcloud.com/blog%2Fboat.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
})
