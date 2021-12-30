import React, { memo, useCallback, useState, useEffect } from 'react'

import { message, notification } from 'antd'
import LoginBox from '@/components/login-box'
import { getNum } from '@/utils/color'
import { avatarList } from '@/common/local-data'

import { register, login } from '@/service/user'
import { LoginWrapper } from './style'

export default memo(function Login() {
  const number = getNum()
  const [tag, setTag] = useState(1)
  const [form, setForm] = useState({
    name: '',
    password: ''
  })
  const handleTabChange = tag => {
    setTag(tag)
  }

  const avatarUrl = avatarList[number]
  const openNotification = () => {
    const args = {
      message: '可以上传头像了~',
      description: '登录成功之后点击蜡笔小新可以上传头像了~',
      duration: 0
    }
    notification.config({ top: 50})
    notification.open(args)
  }

  useEffect(() => {
    openNotification()
  }, [])

  const handleSubmit = useCallback(async () => {
    // 注册
    if (!form.name || !form.password) {
      return message.info('请输入账号密码~')
    }
    if (tag === 0) {
      await register({ avatarUrl, ...form })
      const res = await login(form)
      if (res.code === 400) {
        return message.error('用户名重复~')
      } else {
        window.localStorage.setItem('token', res.token)
        window.localStorage.setItem('id', res.id)
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
          window.localStorage.setItem('id', res.id)
        }
      } catch (error) {
        return message.error('用户名或密码错误~')
      }
    }
  }, [tag, form, avatarUrl])

  return (
    <LoginWrapper>
      <div className="tab">
        {tag === 1 ? (
          <LoginBox
            form={form}
            tag={tag}
            setForm={setForm}
            handleRegister={handleSubmit}
            handleTabChange={handleTabChange}
            btnName="登录"
          />
        ) : (
          <LoginBox
            form={form}
            tag={tag}
            setForm={setForm}
            handleRegister={handleSubmit}
            handleTabChange={handleTabChange}
            btnName="注册"
          />
        )}
      </div>
    </LoginWrapper>
  )
})
