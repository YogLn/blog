import React, { memo } from 'react'
import { MessageWrapper } from './style'
import { formatUtcString } from '@/utils/format'

export default memo(function MessageTheme(props) {
  const { info } = props
  const { user } = props.info
  const defaultAvatarUrl = 'https://cdn.learnku.com/uploads/images/201710/30/1/TrJS40Ey5k.png'

  return (
    <MessageWrapper>
      <div className="left">
        <img src={user.avatar || defaultAvatarUrl } alt="" />
      </div>
      <div className="right">
        <div className="info">
          <div className="username">{user.username}</div>
          <div className="time">{formatUtcString(info.createAt)}</div>
        </div>
        <div className="content">{info.content}</div>
      </div>
    </MessageWrapper>
  )
})
