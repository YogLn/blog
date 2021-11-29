import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import { DetailWrapper } from './style'

export default memo(function Detail() {
  const { articleDetail } = useSelector(
    state => ({
      articleDetail: state.getIn(['detail', 'articleDetail'])
    }),
    shallowEqual
  )
  return (
    <DetailWrapper>
      <h1 className="title">{articleDetail.title}</h1>
      <div className="image">
        <img src={articleDetail.titleImg} alt="" />
      </div>
      <p className="description">{articleDetail.description}</p>
      <ReactMarkdown
        source={articleDetail.content}
        escapeHtml={false} //不进行HTML标签的转化
      />
    </DetailWrapper>
  )
})
