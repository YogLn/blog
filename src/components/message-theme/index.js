import React, { memo } from 'react'
import { MessageWrapper } from './style'
import { formatUtcString } from '@/utils/format'

export default memo(function MessageTheme(props) {
  const { info } = props
  const { user } = props.info
  return (
    <MessageWrapper>
      <div className="left">
        <img src={user.avatar} alt="" />
      </div>
      <div className="right">
        <div className="time">{formatUtcString(info.createAt)}</div>
        <div className="content">{info.content}</div>
      </div>
    </MessageWrapper>
  )
})
