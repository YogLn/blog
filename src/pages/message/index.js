import React, { memo, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getMessageListAction } from './store/actionCreators'
import { Input, Button, message as AMessage } from 'antd'
import MessageTheme from '@/components/message-theme'
import { publishMessage } from '@/service/message'
import { MessageWrapper } from './style'

export default memo(function Message() {
  const { TextArea } = Input
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const { messageList } = useSelector(
    state => ({
      messageList: state.getIn(['message', 'messageList'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getMessageListAction(0, 10))
  }, [dispatch])

  const handleLeave = useCallback(async () => {
    try {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          await publishMessage({ content: message })
          dispatch(getMessageListAction(0, 10))
          setMessage('')
          AMessage.success('留言成功~')
        } catch (error) {
          console.log(error)
        }
      } else {
        throw new Error('未登录')
      }
    } catch (error) {
      AMessage.info('您还没有登录，快去登录吧~')
    }
  }, [message, dispatch])

  return (
    <MessageWrapper className="wrap-v2">
      <div className="message-list">
        {messageList.map((item, index) => {
          return <MessageTheme info={item} key={item.id}/>
        })}
      </div>
      <div className="leave-message">
        <TextArea
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button type="primary" onClick={e => handleLeave()}>
          提交留言
        </Button>
      </div>
    </MessageWrapper>
  )
})
