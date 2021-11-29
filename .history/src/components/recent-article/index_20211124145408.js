import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { HeartTwoTone, ClockCircleOutlined } from '@ant-design/icons'

import { RecentWrapper } from './style'

export default memo(function RecentArticle(props) {
  const { title } = props
  const { recentArticle } = useSelector(
    state => ({
      recentArticle: state.getIn(['article', 'articleList'])
    }),
    shallowEqual
  )

  const recentList = recentArticle.slice(0, 5)

  return (
    <RecentWrapper>
      <div className="header">
        <h3 className="title">
          <HeartTwoTone twoToneColor="#eb2f96" />
          {title}
        </h3>
        <a href="#/">more</a>
      </div>
      <div className="list">
        {recentList.map(item => {
          return (
            <div className="row" key={item.id}>
              <div>{item.title}</div>
              <div className="right">
                <ClockCircleOutlined />
                <span>{item.title}</span>
              </div>
            </div>
          )
        })}
      </div>
    </RecentWrapper>
  )
})
