import React, { memo } from 'react'
import { Form, Input, Button } from 'antd'
import { LoginBoxWrapper } from './style'

export default memo(function Login(props) {
  const { form, setForm, handleRegister, btnName } = props
  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => handleRegister()

  return (
    <LoginBoxWrapper>
      <Form
        className="login-form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          label="用户名"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入用户名~'
            }
          ]}
        >
          <Input
            value={form.name}
            name="name"
            onChange={updateField}
          />
        </Form.Item>
        <Form.Item
          label="密&nbsp;&nbsp;码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码~'
            }
          ]}
        >
          <Input.Password
            value={form.password}
            name="password"
            onChange={updateField}
          />
        </Form.Item>
      </Form>
      <div className="button">
        <Button type="primary" onClick={e => handleSubmit()}>
          {btnName}
        </Button>
      </div>
    </LoginBoxWrapper>
  )
})
