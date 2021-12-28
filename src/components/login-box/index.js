import React, { memo, useRef, useCallback } from 'react'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import { LoginBoxWrapper } from './style'
import avatar1 from '@/assets/img/avatar1.jpg'
import avatar2 from '@/assets/img/avatar2.jpg'

export default memo(function Login(props) {
  const { form, setForm, handleRegister, btnName, handleTabChange } = props
  const loginRef = useRef()
  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleRegister()
  }

  const handleTabClick = useCallback(tag => {
    if(tag === 1) {
      loginRef.current.style.transform = 'rotateY(-360deg)'
    } else {
      loginRef.current.style.transform = 'rotateY(360deg)'
    }
    handleTabChange(tag)
  }, [handleTabChange])

  return (
    <LoginBoxWrapper>
      <div className="box login" ref={loginRef}>
        <div className="form-content">
          <div className="avtar">
            <div className="pic">
              {btnName === '登录' ? (
                <img src={avatar1} alt="" />
              ) : (
                <img src={avatar2} alt="" />
              )}
            </div>
          </div>
          <h1>欢迎{btnName}</h1>
          <form action="#" className="form">
            <div>
              <span>
                <UserOutlined />
              </span>
              <input
                type="text"
                name="name"
                placeholder="用户名"
                value={form.name}
                onChange={updateField}
              />
            </div>
            <div>
              <span>
                <KeyOutlined />
              </span>
              <input
                type="password"
                placeholder="密码"
                name="password"
                value={form.password}
                onChange={updateField}
              />
            </div>
            <div className="btn">
              <button onClick={e => handleSubmit(e)}>{btnName}</button>
            </div>
          </form>
          {btnName === '登录' ? (
            <p className="btn-something">
              没有账号?{' '}
              <span className="signup-btn" onClick={e => handleTabClick(0)}>
                注册
              </span>
            </p>
          ) : (
            <p className="btn-something">
              已有账号?{' '}
              <span className="signup-btn" onClick={e => handleTabClick(1)}>
                登录
              </span>
            </p>
          )}
        </div>
      </div>
    </LoginBoxWrapper>
  )
})
