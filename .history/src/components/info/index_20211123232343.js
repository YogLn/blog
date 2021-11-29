import React, { memo } from 'react'

import { Tag } from 'antd'
import { SmileTwoTone } from '@ant-design/icons';
import { InfoWrapper } from './style'
export default memo(function Info(props) {
  const { labelList, title } = props

  return (
    <InfoWrapper>
      <div className="header">
        
        <h3 className="title"><SmileTwoTone />{title}</h3>
        <a href="#/">more</a>
      </div>
      
      <div className="tag-list">
        {labelList.map(item => {
          return <div className="tag" key={item.labelId}>
						<Tag color="magenta" className="tag">{item.labelName}</Tag>
						<span className="num">{item.total}</span>
					</div>
        })}
      </div>
    </InfoWrapper>
  )
})
