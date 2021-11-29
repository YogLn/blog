import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import { Anchor } from 'antd'
// import CodeBlock from './code'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { DetailWrapper, DetailLeft, DetailRight } from './style'

export default memo(function Detail() {
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomOneDark}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      )
    },
    h3(props) { 
      console.log(props)
      return <h3 style={ { color: 'red' } } { ...props } /> 
    }
  }

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
          components={components}
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
