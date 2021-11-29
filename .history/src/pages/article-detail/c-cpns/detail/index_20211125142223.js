import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import gfm from 'remark-gfm'

import { Anchor } from 'antd'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { DetailWrapper, DetailLeft, DetailRight } from './style'

export default memo(function Detail() {
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={coy}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      )
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
  }

  const onHashChange = (newHash, oldHash) => {
    console.log(newHash, oldHash)
    // window.location.hash.replace('#',oldHash)
    window.location.hash.replace('#', `#/${oldHash}`)
  }

  const removeHash = e => {
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
          remarkPlugins={[gfm]}
        />
      </DetailLeft>
      <DetailRight>
        <div className="markNav-title">文章目录</div>
        <MarkdownNavbar
          className="article-menu"
          source={articleDetail.content}
          headingTopOffset={80}
          ordered={false}
          updateHashAuto={false}
          onHashChange={(newHash, oldHash) => onHashChange(newHash, oldHash)}
          onNavItemClick={e => removeHash(e)}
        />
      </DetailRight>
    </DetailWrapper>
  )
})
