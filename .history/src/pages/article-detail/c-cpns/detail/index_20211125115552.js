import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar'
// The default style of markdown-navbar should be imported additionally
import 'markdown-navbar/dist/navbar.css'

import { Anchor } from 'antd'
// import CodeBlock from './code'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { DetailWrapper, DetailLeft, DetailRight } from './style'

export default memo(function Detail() {
  const { articleDetail } = useSelector(
    state => ({
      articleDetail: state.getIn(['detail', 'articleDetail'])
    }),
    shallowEqual
  )

  const handleAnchorClick = e => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <DetailWrapper>
      <DetailLeft>
        <h1 className="title">{articleDetail.title}</h1>
        <div className="image">
          <img src={articleDetail.titleImg} alt="" />
        </div>
        <p className="description">{articleDetail.description}</p>
        <ReactMarkdown
          className="content"
          children={articleDetail.content}
          components={<CodeBlock value={articleDetail.content} />}
        />
      </DetailLeft>
      <DetailRight>
        <Anchor onClick={e => handleAnchorClick(e)} targetOffset={80}>
          <div className="markNav-title">文章目录</div>
          <MarkdownNavbar
            className="article-menu"
            source={articleDetail.content}
            headingTopOffset={80}
            ordered={false}
            updateHashAuto={false}
          />
        </Anchor>
      </DetailRight>
    </DetailWrapper>
  )
})
