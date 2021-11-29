import React, { memo } from 'react'

import { FooterWrapper } from './style'

export default memo(function Footer() {
  return (
    <FooterWrapper className="wrap-v2">
      <p>
        &copy; yogln.top 版权所有 Blog由React,nodejs驱动.
        <a href="http://www.beian.miit.gov.cn" className="beian">备案</a>
      </p>
      <p>
				备案号:20211212
        <img src={require('@/assets/img/beianicon.png')} alt="备案" className="image"/>
      </p>
    </FooterWrapper>
  )
})
