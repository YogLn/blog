import React, { memo } from 'react'
import { SmileTwoTone } from '@ant-design/icons';

import { RecentWrapper } from './style'

export default memo(function RecentArticle(props) {
  const { labelList, title } = props
  
  return (
    <RecentWrapper>
      <div className="header">
        <h3 className="title"><SmileTwoTone />{title}</h3>
        <a href="#/">more</a>
      </div>
    </RecentWrapper>
  )
})
