import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import {
  MailOutlined,
  QqOutlined,
  GithubOutlined,
  WechatOutlined,
  AimOutlined
} from '@ant-design/icons'
import {Divider} from 'antd';

import qq from '@/assets/img/qq.jpg'
import weixin from '@/assets/img/weixin.jpg'
import juejin from '@/assets/img/juejin.png'
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
        <div className="front">前端 React + Redux + Antd</div>
        <div className="admin">后台 Vue3 + Vite + ElementPlus</div>
        <div className="back">后端 Node + Koa + MySql</div>
        <div className="email">
          <MailOutlined />
          <span>15508067205@163.com</span>
        </div>
      </div>
      <div className="concat">
        <Divider plain>社交账号</Divider>
        <div className="tag">
        <div className="github">
            <a href="https://github.com/YogLn">
              <GithubOutlined/>
            </a>
          </div>
          <div className="qq">
            <QqOutlined />
            <img src={qq} alt="" />
          </div>
          <div className="wechat">
            <WechatOutlined />
            <img src={weixin} alt="" />
          </div>
          <div className="juejin">
            <a href="https://juejin.cn/user/2991131634961735/posts">
              <img src={juejin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </AboutWrapper>
  )
})
