import React, { memo, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { HeartTwoTone, ClockCircleOutlined } from '@ant-design/icons'

import { formatUtcString } from '@/utils/format'
import { RecentWrapper } from './style'

export default memo(function RecentArticle(props) {
  const { title } = props
	const history = useHistory();
  const { recentArticle } = useSelector(
    state => ({
      recentArticle: state.getIn(['article', 'articleList'])
    }),
    shallowEqual
  )

  const recentList = recentArticle.slice(0, 5)
  const handleArticleClick = useCallback(item => {
    const { id } = item
		history.push(`/article/detail/${id}`)
  }, [history])

  return (
    <RecentWrapper>
      <div className="header">
        <div className="title">
          <HeartTwoTone twoToneColor="#eb2f96" />
          <span className="title-name">{title}</span>
        </div>
        <a href="#/">more</a>
      </div>
      <div className="list">
        {recentList.map(item => {
          return (
            <div
              className="row"
              key={item.id}
              onClick={e => handleArticleClick(item)}
            >
              <div className="title">{item.title}</div>
              <div className="right">
                <ClockCircleOutlined />
                <span>{formatUtcString(item.createTime, 'YYYY-MM-DD')}</span>
              </div>
            </div>
          )
        })}
      </div>
    </RecentWrapper>
  )
})
