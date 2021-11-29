import React, { memo } from 'react'

import { FooterWrapper } from './style'

export default memo(function Footer() {
  return (
    <FooterWrapper className="wrap-v2">
      <p className="copy">&copy; yogln.top 版权所有 Blog由React,nodejs驱动.</p>
      <p className="beian">
        <a href="http://www.beian.miit.gov.cn" className="beian">
          20210101
        </a>
        <img
          src={require('@/assets/img/beianicon.png')}
          alt="备案"
          className="image"
        />
      </p>
    </FooterWrapper>
  )
})
