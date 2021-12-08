import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import {
  MailOutlined,
  QqOutlined,
  GithubOutlined,
  WechatOutlined,
  AimOutlined
} from '@ant-design/icons'

import qq from '@/assets/img/qq.jpg';
import weixin from '@/assets/img/weixin.jpg';
import github from '@/assets/img/github.jpg';
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
        <img src={userInfo?.avatar_url} alt="" />
      </div>
      <div className="name">{userInfo?.name}</div>
      <div className="info">
        <div className="address">
          <AimOutlined />
          <span>四川·成都</span>
        </div>
        <div className="front">前端:React + Redux + Antd</div>
        <div className="admin">后台:Vue3 + Vite + ElementPlus</div>
        <div className="back">后端: Node + Koa + MySql</div>
        <div className="email">
          <MailOutlined />
          <span>15508067205@163.com</span>
        </div>
      </div>
      <div className="concat">
        <div className="social-contact">社交账号</div>
        <div className="tag">
          <div className="qq">
            <QqOutlined />
            <img src={qq} alt="" />
          </div>
          <div className="github">
            <GithubOutlined />
            <img src={github} alt="" />
          </div>
          <div className="wechat">
            <WechatOutlined />
            <img src={weixin} alt="" />
          </div>
        </div>
      </div>
    </AboutWrapper>
  )
})
