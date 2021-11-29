import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

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
      <SyntaxHighlighter language="javascript" style={dark}>
        <ReactMarkdown
          className="content"
          children={articleDetail.content}
          skipHtml={false}
        />
      </SyntaxHighlighter>
    </DetailWrapper>
  )
})
