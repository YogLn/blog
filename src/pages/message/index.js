import React, { memo, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import APlayer from 'aplayer'

import { Divider } from 'antd';
import {
  getMessageListAction,
  getMusicListAction
} from './store/actionCreators'
import { Input, Button, message as AMessage } from 'antd'
import MessageTheme from '@/components/message-theme'
import { publishMessage } from '@/service/message'
import { MessageWrapper } from './style'
import 'aplayer/dist/APlayer.min.css'

export default memo(function Message() {
  const { TextArea } = Input
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const [size, setSize] = useState(5)
  const { messageList, musicList } = useSelector(
    state => ({
      messageList: state.getIn(['message', 'messageList']),
      musicList: state.getIn(['message', 'musicList'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getMessageListAction(0, size))
    dispatch(getMusicListAction())
  }, [dispatch, size])

  useEffect(() => {
    new APlayer({
      container: document.querySelector('.player'),
      mini: false,
      autoplay: false,
      theme: '#FADFA3',
      loop: 'all',
      preload: 'auto',
      volume: 0.7,
      mutex: true,
      listFolded: false,
      listMaxHeight: 90,
      lrcType: 3,
      audio: musicList
    })
  }, [musicList])

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
  const loadMore = useCallback(() => {
    setSize(size + 10)
  }, [setSize, size])

  return (
    <MessageWrapper>
      <div className="player"></div>
      <Divider />
      <div className="message-list">
        {messageList.map(item => {
          return <MessageTheme info={item} key={item.id} />
        })}
      </div>
      <div className="more" onClick={e => loadMore()}>
        加载更多...
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
