import React, { memo, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import APlayer from 'aplayer'

import { SmileTwoTone } from '@ant-design/icons'
import { Picker } from 'emoji-mart'
import {
  getMessageListAction,
  getMusicListAction
} from './store/actionCreators'
import { Input, Button, message as AMessage, Divider } from 'antd'
import MessageTheme from '@/components/message-theme'
import { publishMessage } from '@/service/message'
import { MessageWrapper } from './style'
import 'aplayer/dist/APlayer.min.css'
import 'emoji-mart/css/emoji-mart.css'

export default memo(function Message() {
  const { TextArea } = Input
  const [message, setMessage] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const dispatch = useDispatch()
  const [size, setSize] = useState(5)
  const { messageList, musicList } = useSelector(
    state => ({
      messageList: state.getIn(['message', 'messageList']),
      musicList: state.getIn(['message', 'musicList'])
    }),
    shallowEqual
  )
    console.log(musicList);
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
      lrcType: 1,
      audio: musicList
    })
  }, [musicList])

  const handleLeave = useCallback(async () => {
    try {
      const token = window.sessionStorage.getItem('token')
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

  const handleEmojiClick = (emoji, e) => {
    const newMessage = message + emoji.native
    setMessage(newMessage)
  }

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
        <SmileTwoTone
          twoToneColor="#f8db57"
          onClick={e => setShowPicker(!showPicker)}
          className="smile-two-tone"
        />
        {showPicker && (
          <Picker
            set="apple"
            onClick={(emoji, e) => handleEmojiClick(emoji, e)}
          />
        )}
        <Button
          type="primary"
          onClick={e => handleLeave()}
          className="submit-btn"
        >
          提交留言
        </Button>
      </div>
    </MessageWrapper>
  )
})
