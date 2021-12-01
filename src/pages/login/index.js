import React, { memo, useCallback, useState } from 'react'

import { Tabs, message } from 'antd'
import { SmileTwoTone} from '@ant-design/icons';
import LoginBox from '@/components/login-box'

import { register, login } from '@/service/user';
import { LoginWrapper } from './style'

export default memo(function Login() {
  const [key, setKey] = useState(1)
  const [form, setForm] = useState({
    name: '',
    password: '',
  })
  const { TabPane } = Tabs
  const handleTabChange = key => {
    setKey(key)
  }

  const handleSubmit = useCallback(async () => {
    if(key === '1') {
      console.log(form);
      await register(form)
      const res = await login(form)
      window.localStorage.setItem('token', res.token)
      message.success('注册成功 已为您登录~');
    } else {
      const res = await login(form)
      console.log(res);
      window.localStorage.setItem('token', res.token)
      message.success('登录成功~');
    }
  }, [key, form])

  return (
    <LoginWrapper className="wrap-v2">
      <div className="tab">
        <Tabs onChange={handleTabChange} type="card">
          <TabPane tab={<span><SmileTwoTone />我是新朋友</span>} key="1">
            <LoginBox form={form} setForm={setForm} handleRegister={handleSubmit} btnName="注册"/>
          </TabPane>
          <TabPane tab={<span><SmileTwoTone/>我是老朋友</span>} key="2">
            <LoginBox form={form} setForm={setForm} handleRegister={handleSubmit} btnName="登录"/>
          </TabPane>
        </Tabs>
      </div>
    </LoginWrapper>
  )
})
