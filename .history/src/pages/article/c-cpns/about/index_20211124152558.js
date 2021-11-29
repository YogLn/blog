import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { MailOutlined } from '@ant-design/icons';

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
      <div className="name">
        <h3>{userInfo.name}</h3>
      </div>
      <div className="info">
        <p className="address">四川·成都</p>
        <p className="front">前端:React + Redux + Antd</p>
        <p className="admin">后台:Vue3 + Vite + ElementPlus</p>
        <p className="back">后端: Node + Koa + Mysql</p>
        <p className="email">
					<MailOutlined />
					<span>15508067205@163.com</span>
				</p>
      </div>
    </AboutWrapper>
  )
})
