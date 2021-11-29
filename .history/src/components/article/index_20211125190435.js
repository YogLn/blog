import React, { memo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { CSSTransition } from 'react-transition-group'

import { formatUtcString } from '@/utils/format'
import { Tag } from 'antd'
import {
  ClockCircleOutlined,
  CommentOutlined,
  EyeOutlined
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
      <CSSTransition
        timeout={5000}
        appear
        unmountOnExit={true}
        className="article"
      >
        <ArticleLeft>
          <div className="image">
            <img src={info.titleImg} alt="" />
          </div>
        </ArticleLeft>
        <ArticleRight>
          <h3 className="title">{info.title}</h3>
          <div className="desc">{info.description}</div>
          <div className="info">
            <div className="time">
              <ClockCircleOutlined />
              {formatUtcString(info.createTime)}
            </div>
            <div className="comment">
              <CommentOutlined />
              {20}
            </div>
            <div className="browser">
              <EyeOutlined />
              {20}
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
      </CSSTransition>
    </ArticleWrapper>
  )
})
