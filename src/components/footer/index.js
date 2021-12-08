import React, { memo } from 'react'

import { FooterWrapper } from './style'

export default memo(function Footer() {
  return (
    <FooterWrapper>
      <p className="copy">Copyright&copy;2021 yogln.top 版权所有</p>
      <p className="beian">
        <a href="http://www.beian.miit.gov.cn" className="beian">
          蜀ICP备2021029954号
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
