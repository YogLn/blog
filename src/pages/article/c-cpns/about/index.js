import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import {
  MailOutlined,
  QqOutlined,
  GithubOutlined,
  WechatOutlined,
  AimOutlined
} from '@ant-design/icons'

import { AboutWrapper } from './style'
export default memo(function About() {
  const { userInfo } = useSelector(
    state => ({
      userInfo: state.getIn(['article', 'userInfo'])
    }),
    shallowEqual
  )
  return (
    <AboutWrapper>
      <div className="avatar">
        <img src={userInfo.avatar_url} alt="" />
      </div>
      <h3 className="name">{userInfo.name}</h3>
      <div className="info">
        <p className="address">
          <AimOutlined />
          <span>四川·成都</span>
        </p>
        <p className="front">前端:React + Redux + Antd</p>
        <p className="admin">后台:Vue3 + Vite + ElementPlus</p>
        <p className="back">后端: Node + Koa + MySql</p>
        <p className="email">
          <MailOutlined />
          <span>15508067205@163.com</span>
        </p>
      </div>
      <div className="concat">
        <h3>社交账号</h3>
        <div className="tag">
          <div className="qq">
            <QqOutlined />
          </div>
          <div className="github">
            <GithubOutlined />
          </div>
          <div className="wechat">
            <WechatOutlined />
          </div>
        </div>
      </div>
    </AboutWrapper>
  )
})
