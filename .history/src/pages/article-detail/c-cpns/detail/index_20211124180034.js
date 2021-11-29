import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import ReactMarkdown from 'react-markdown'

import CodeBlock from './code';
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
        className="content"
        children={articleDetail.content}
        components={<CodeBlock language="javascript" value={articleDetail.content}/>}
      />
      ,
    </DetailWrapper>
  )
})
