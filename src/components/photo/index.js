import React, { memo } from 'react'

import { formatUtcString } from '@/utils/format'
import { PhotoWrapper } from './style'

export default memo(function Photo(props) {
  const { info } = props
  return (
    <PhotoWrapper>
      <img src={info?.imgUrl} alt="" />
      <div className="info">
        <div>
          {info?.description}
          <span>{formatUtcString(info?.createAt)}</span>
        </div>
      </div>
    </PhotoWrapper>
  )
})
