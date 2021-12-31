import React, {
  memo,
  createElement,
  useState,
  useCallback,
  useMemo
} from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getCommentListAction } from '../../store/actionCreators'
import { addComment, replayComment, like, dislike } from '@/service/comment'
import { formatUtcString, formatComment } from '@/utils/format'

import { Comment, List, Tooltip, Button, Input, message, Modal } from 'antd'
import { Picker } from 'emoji-mart'
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  SmileTwoTone
} from '@ant-design/icons'
import { CommentWrapper } from './style'
import 'emoji-mart/css/emoji-mart.css'

export default memo(function ArticleComment(props) {
  const { articleId } = props
  const { TextArea } = Input
  // 添加评论
  const [commentValue, setCommentValue] = useState(null)
  const [showPicker, setShowPicker] = useState(false)
  // 回复评论相关
  const [commentId, setCommentId] = useState(0)
  const [replayValue, setReplayValue] = useState(null)
  const [replayVisible, setReplayVisible] = useState(false)

  const dispatch = useDispatch()

  const { commentList } = useSelector(
    state => ({
      commentList: state.getIn(['detail', 'commentList'])
    }),
    shallowEqual
  )
  const defaultAvatarUrl =
    'https://cdn.learnku.com/uploads/images/201710/30/1/TrJS40Ey5k.png'

  const newCommentList = useMemo(
    () => formatComment(commentList),
    [commentList]
  )

  const handleLike = useCallback(
    async item => {
      if (item.action !== 'like') {
        item.action = 'like'
        await like(item.id)
        dispatch(getCommentListAction(articleId))
      }
    },
    [dispatch, articleId]
  )

  const handleDislike = useCallback(
    async item => {
      if (!item.action) {
        await dislike(item.id)
        item.action = 'dislike'
        dispatch(getCommentListAction(articleId))
      }
    },
    [dispatch, articleId]
  )

  const handleSubmit = async () => {
    try {
      const token = window.sessionStorage.getItem('token')
      if (token) {
        await addComment({
          articleId,
          content: commentValue
        })
        setCommentValue(null)
        dispatch(getCommentListAction(articleId))
        message.success('评论成功~')
      } else {
        throw new Error('未登录')
      }
    } catch (error) {
      message.info('您还没有登录，快去登录吧~')
    }
  }

  const handleReplay = useCallback(async () => {
    try {
      const token = window.sessionStorage.getItem('token')
      if (token) {
        await replayComment(commentId, {
          articleId,
          content: replayValue
        })
        setReplayValue('')
        setReplayVisible(false)
        dispatch(getCommentListAction(articleId))
        message.success('评论成功~')
      } else {
        throw new Error('未登录')
      }
    } catch (error) {
      message.info('您还没有登录，快去登录吧~')
    }
  }, [commentId, articleId, replayValue, dispatch])

  const handleShowReplay = item => {
    setCommentId(item.id)
    setReplayVisible(true)
  }

  const handleEmojiClick = (emoji, e) => {
    const newCommentValue = commentValue + emoji.native
    setCommentValue(newCommentValue)
  }

  const cancelReplay = () => {
    setReplayVisible(false)
  }

  // 评论组件
  const ExampleComment = ({ children, item }) => {
    return (
      <Comment
        author={item?.user?.name}
        avatar={item?.user?.avatarUrl || defaultAvatarUrl}
        content={item?.content}
        datetime={formatUtcString(item?.createTime)}
        actions={actions(item)}
      >
        {children}
      </Comment>
    )
  }

  // action组件
  const actions = item => [
    <Tooltip key="comment-basic-like" title="赞">
      <span onClick={e => handleLike(item)}>
        {createElement(item.action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{item.likeNum}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="踩">
      <span onClick={e => handleDislike(item)}>
        {React.createElement(
          item.action === 'disliked' ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{item.dislikeNum}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to" onClick={e => handleShowReplay(item)}>
      回复
    </span>
  ]

  return (
    <CommentWrapper>
      <TextArea
        rows={4}
        onChange={e => setCommentValue(e.target.value)}
        value={commentValue}
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
      <Button onClick={e => handleSubmit()} type="primary" className="submit">
        添加评论
      </Button>
      <List
        className="comment-list"
        itemLayout="horizontal"
        dataSource={newCommentList}
        renderItem={item => (
          <li>
            <ExampleComment item={item}>
              {item.children && (
                <List
                  itemLayout="horizontal"
                  dataSource={item.children}
                  renderItem={item => (
                    <li>
                      <ExampleComment item={item} />
                    </li>
                  )}
                />
              )}
            </ExampleComment>
          </li>
        )}
      />
      {/* 回复评论 */}
      <Modal
        title="你想说的话..."
        visible={replayVisible}
        onOk={e => handleReplay()}
        onCancel={e => cancelReplay()}
        okText="确认"
        cancelText="取消"
      >
        <TextArea
          rows={4}
          onChange={e => setReplayValue(e.target.value)}
          value={replayValue}
        />
      </Modal>
    </CommentWrapper>
  )
})
