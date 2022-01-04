import React, { memo } from 'react'
import { formatUtcString } from '@/utils/format'
import { PhotoWrapper } from './style'

export default memo(function Photo(props) {
  const { info } = props
  const handlePreView = () => {
    console.log(info.imgUrl);
  }
  return (
    <PhotoWrapper>
      <img src={info?.imgUrl} alt="" />
      <div className="info" onClick={handlePreView}>
        <div>
          {info?.description}
          <span>{formatUtcString(info?.createAt)}</span>
        </div>
      </div>
    </PhotoWrapper>
  )
})
