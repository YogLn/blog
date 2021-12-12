import React, { memo } from 'react'
import { TagTwoTone } from '@ant-design/icons';

import { Tag } from 'antd'
import { getColor } from '@/utils/color.js';
import { InfoWrapper, TagWrapper } from './style'

export default memo(function Info(props) {
  const { labelList, title, getArticleListByLabel } = props
  
  return (
    <InfoWrapper>
      <div className="header">
        <div className="title"><TagTwoTone twoToneColor="#00FF11"/>{title}</div>
        <a href="#/">more</a>
      </div>
      
      <div className="tag-list">
        {labelList.map(item => {
          const color = getColor()
          return <TagWrapper key={item.labelName} color={color} onClick={e => getArticleListByLabel(item)}>
						<Tag color={item.color} className="tag">{item.labelName}</Tag>
						<span className="num">{item.total}</span>
					</TagWrapper>
        })}
      </div>
    </InfoWrapper>
  )
})
