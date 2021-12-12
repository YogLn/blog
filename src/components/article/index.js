import React, { memo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { formatUtcString } from '@/utils/format'
import { Tag } from 'antd'
import {
  ClockCircleTwoTone,
  MessageTwoTone,
  EyeTwoTone
} from '@ant-design/icons'
import { ArticleWrapper, ArticleLeft, ArticleRight } from './style'

export default memo(function Article(props) {
  const history = useHistory()
  const { info } = props
  const labels = info.labels ? info.labels : []
  const articleClick = useCallback(
    item => {
      const { id } = item
      history.push(`/article/detail/${id}`)
    },
    [history]
  )

  return (
    <ArticleWrapper onClick={e => articleClick(info)}>
      <ArticleLeft>
        <div className="image">
          <img src={info.titleImg} alt="" />
        </div>
      </ArticleLeft>
      <ArticleRight>
        <div className="circle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="title">{info.title}</div>
        <div className="desc">{info.description}</div>
        <div className="info">
          <div className="time">
            <ClockCircleTwoTone twoToneColor="#FF0000"/>
            {formatUtcString(info.createTime)}
          </div>
          <div className="comment">
            <MessageTwoTone twoToneColor="#00FF11"/>
            {info.commentNum}
          </div>
          <div className="browser">
            <EyeTwoTone twoToneColor="#2200FF"/>
            {info.viewTimes}
          </div>
        </div>
        <div className="label">
          {labels.map(item => {
            return (
              <Tag color={item.color} key={item.name}>
                {item.name}
              </Tag>
            )
          })}
        </div>
      </ArticleRight>
    </ArticleWrapper>
  )
})
