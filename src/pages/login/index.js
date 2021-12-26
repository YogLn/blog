import React, { memo, useCallback, useState } from 'react'

import { Tabs, message } from 'antd'
import { SmileTwoTone } from '@ant-design/icons'
import LoginBox from '@/components/login-box'
import { getNum } from '@/utils/color'
import { avatarList } from '@/common/local-data'

import { register, login } from '@/service/user'
import { LoginWrapper } from './style'

export default memo(function Login() {
  const number = getNum()
  const [key, setKey] = useState(1)
  const [form, setForm] = useState({
    name: '',
    password: ''
  })
  const { TabPane } = Tabs
  const handleTabChange = key => {
    setKey(key)
  }
  const avatarUrl = avatarList[number]
  const handleSubmit = useCallback(async () => {
    // 注册
    if (key === 1) {
      await register({ avatarUrl, ...form })
      const res = await login(form)
      if (res.code === 400) {
        return message.error('用户名重复~')
      } else {
        window.localStorage.setItem('token', res.token)
        message.success('注册成功 已为您登录~')
      }
    } else {
      // 登录
      try {
        const res = await login(form)
        if (res.code === 400) {
          return message.error('用户名或密码错误~')
        } else {
          message.success('登录成功~')
          window.localStorage.setItem('token', res.token)
        }
      } catch (error) {
        return message.error('用户名或密码错误~')
      }
    }
  }, [key, form, avatarUrl])

  return (
    <LoginWrapper className="wrap-v2">
      <div className="tab">
        <Tabs onChange={handleTabChange} type="card">
          <TabPane
            tab={
              <span>
                <SmileTwoTone />
                我是新朋友
              </span>
            }
            key="1"
          >
            <LoginBox
              form={form}
              setForm={setForm}
              handleRegister={handleSubmit}
              btnName="注册"
            />
          </TabPane>
          <TabPane
            tab={
              <span>
                <SmileTwoTone />
                我是老朋友
              </span>
            }
            key="2"
          >
            <LoginBox
              form={form}
              setForm={setForm}
              handleRegister={handleSubmit}
              btnName="登录"
            />
          </TabPane>
        </Tabs>
      </div>
    </LoginWrapper>
  )
})
