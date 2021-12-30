import React, { memo, useRef, useCallback, useState } from 'react'
import COS from 'cos-js-sdk-v5'
import { Upload, message } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import {uploadAvatarAPI} from '@/service/user';

import { LoginBoxWrapper } from './style'
import a1 from '@/assets/img/avatar1.jpg'
import a2 from '@/assets/img/avatar2.jpg'

export default memo(function Login(props) {
  const { form, setForm, handleRegister, btnName, handleTabChange } = props
  const [avatar1, setAvatar1] = useState(a1)
  const [avatar2, setAvatar2] = useState(a2)
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

  const handleTabClick = useCallback(
    tag => {
      if (tag === 1) {
        loginRef.current.style.transform = 'rotateY(-360deg)'
      } else {
        loginRef.current.style.transform = 'rotateY(360deg)'
      }
      handleTabChange(tag)
    },
    [handleTabChange]
  )

  const beforeUpload = file => {
    const isPNG = file.type === 'image/png' || 'image/jpeg' || 'image/jpg'
    const isLt3M = file.size / 1024 / 1024 < 3
    if (!isPNG) {
      return message.error('上传头像图片格式不对!')
    }
    if (!isLt3M) {
      return message.error('上传头像图片大小不能超过 3MB!')
    }
    return isPNG && isLt3M
  }

  const uploadAvatar = useCallback((files) => {
    const cos = new COS({
      SecretId: 'AKIDMYUAZgX7SW7TZOvBBuLVO1NSGn31jAKD',
      SecretKey: 'dz4sPecJjslMgkW2HFwNXP0LPChvtafT'
    })   
    if (!files.file) {
      return
    }
    const id = window.localStorage.getItem('id')
    if(!id) {
      return message.error('您还没有登录~')
    }
    cos.putObject({
      Bucket: 'blog-1304388092', /* 存储桶 */
      Region: 'ap-chengdu', /* 存储桶所在地域，必须字段 */
      Key: files.file.name, /* 文件名 */
      StorageClass: 'STANDARD', // 上传模式, 标准模式
      Body: files.file // 上传文件对象
    }, async (err, data) => {
      // 上传成功之后
      if (data.statusCode === 200) {
        // 2. 显示图片
        let avatarUrl = `https:${data.Location}`
        setAvatar1(avatarUrl)
        setAvatar2(avatarUrl)
        // 3. 上传头像到服务器
        try {
          await uploadAvatarAPI(id, {avatarUrl})
          message.success('头像上传成功~')
        } catch (error) {
          message.error('上传失败~')
        }
      }
    })
  }, [])

  return (
    <LoginBoxWrapper>
      <div className="box login" ref={loginRef}>
        <div className="form-content">
          <div className="avtar">
            <div className="pic">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="#"
                beforeUpload={(e) => beforeUpload(e)}
                customRequest={e => uploadAvatar(e)}
              >
                {btnName === '登录' ? (
                  <img src={avatar1} alt="" />
                ) : (
                  <img src={avatar2} alt="" />
                )}
              </Upload>
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
