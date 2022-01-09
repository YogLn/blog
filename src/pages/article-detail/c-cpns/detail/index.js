import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom'

import gfm from 'remark-gfm'
import { Divider, Anchor } from 'antd'
import ReactMarkdown from 'react-markdown'
import MarkdownNavbar from 'markdown-navbar'
import { ClockCircleTwoTone, MessageTwoTone } from '@ant-design/icons'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { formatUtcString } from '@/utils/format'
import { DetailWrapper, DetailLeft, DetailRight } from './style'
import PandaIcon from './panda'
import Comment from '../comment'
import 'markdown-navbar/dist/navbar.css'

export default memo(function Detail(props) {
  const { articleId } = props
  const history = useHistory()
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={a11yDark}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      ) : (
        <span
          className={className}
          {...props}
          children={children}
          style={{
            color: '#ff0000',
            fontWeight: 'bold',
            display: 'inline-block',
            padding: '0 5px',
            fontSize: '16px',
            backgroundColor: '#eee',
            borderRadius: '8px',
            height: '28px',
            lineHeight: '28px'
          }}
        />
      )
    }
  }
  const { articleDetail } = useSelector(
    state => ({
      articleDetail: state.getIn(['detail', 'articleDetail'])
    }),
    shallowEqual
  )
  const backArticleList = () => {
    history.push('/article')
  }

  return (
    <DetailWrapper>
      <DetailLeft>
        <div className="top">
          <div className="back" onClick={e => backArticleList()}>
            文章列表
          </div>
          <span>/{articleDetail.title}</span>
        </div>
        <div className="title">{articleDetail.title}</div>
        <div className="info">
          <span>
            <ClockCircleTwoTone twoToneColor="#FF0000" />
            {formatUtcString(articleDetail.createAt)}
          </span>
          <span>
            <MessageTwoTone twoToneColor="#00FF11" />
            {articleDetail.commmentNum}
          </span>
        </div>
        <div className="image">
          <img src={articleDetail.titleImg} alt="" />
        </div>
        <Divider style={{ color: '#2782e3', fontSize: '18px' }}>描述</Divider>
        <div className="description">{articleDetail.description}</div>
        <Divider style={{ color: '#2782e3', fontSize: '18px' }}>正文</Divider>
        <ReactMarkdown
          className="content"
          children={articleDetail.content}
          components={components}
          remarkPlugins={[gfm]}
        />
        <Divider style={{ color: '#2782e3', fontSize: '18px' }}>末尾</Divider>
        <div className="update">
          <PandaIcon style={{ fontSize: '32px', marginRight: '8px' }} />
          <span>本文最后更新于:{formatUtcString(articleDetail.updateAt)}</span>
        </div>
        <div className="parting-line"></div>
        <Comment articleId={articleId} />
      </DetailLeft>
      <DetailRight>
        <Anchor>
          <Divider>文章目录</Divider>
          <MarkdownNavbar
            className="article-menu"
            source={articleDetail.content}
            headingTopOffset={80}
            ordered
            declarative
            updateHashAuto={false}
          />
        </Anchor>
      </DetailRight>
    </DetailWrapper>
  )
})
