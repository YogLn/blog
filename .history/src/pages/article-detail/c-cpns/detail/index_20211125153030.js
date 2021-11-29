import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import gfm from 'remark-gfm'

import { Divider } from 'antd';
import { ClockCircleOutlined, CommentOutlined } from '@ant-design/icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { formatUtcString } from '@/utils/format';
import { DetailWrapper, DetailLeft, DetailRight } from './style'
import PandaIcon from './panda';

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

  const onHashChange = (newHash, oldHash) => {
    console.log(newHash, oldHash)
    // window.location.hash.replace('#',oldHash)
    // console.log(window.location.hash)
    // window.location.hash.replace(`#/${oldHash}`)
  }

  return (
    <DetailWrapper>
      <DetailLeft>
        <div className="top">
          <div className="back">文章列表</div>
          <span>/{articleDetail.title}</span>
        </div>
        <h1 className="title">{articleDetail.title}</h1>
        <div className="info">
          <span><ClockCircleOutlined />{formatUtcString(articleDetail.createAt)}</span>
          <span><CommentOutlined />{30}</span>
        </div>
        <div className="image">
          <img src={articleDetail.titleImg} alt="" />
        </div>
        <Divider style={{color: '#2782e3', fontSize: '18px'}}>description</Divider>
        <p className="description">{articleDetail.description}</p>
        <Divider style={{color: '#2782e3', fontSize: '18px'}}>正文</Divider>
        <ReactMarkdown
          className="content"
          children={articleDetail.content}
          components={components}
          remarkPlugins={[gfm]}
        />
        <Divider style={{color: '#2782e3', fontSize: '18px'}}>末尾</Divider>
        <div className="update">
        <PandaIcon style={{ fontSize: '32px' }} />
          <span>本文最后更新于:{formatUtcString(articleDetail.updateAt)}</span>
        </div>
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
        />
      </DetailRight>
    </DetailWrapper>
  )
})
