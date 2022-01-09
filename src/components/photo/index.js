import React, { memo, useState } from 'react'
import { Image } from 'antd'
import { formatUtcString } from '@/utils/format'
import { PhotoWrapper, Wrapper } from './style'

export default memo(function Photo(props) {
  const { info } = props
  const [imageUrl, setImageUrl] = useState(null)
  const [showImg, setShowImg] = useState(false)
  const handlePreView = () => {
    setImageUrl(info.imgUrl)
    setShowImg(true)
  }
  const onVisibleChange = (visible) => {
    setShowImg(visible)
  }
  return (
    <Wrapper>
      <PhotoWrapper>
        <img src={info?.imgUrl} alt="" />
        <div className="info" onClick={handlePreView}>
          <div>
            {info?.description}
            <span>{formatUtcString(info?.createAt)}</span>
          </div>
        </div>
      </PhotoWrapper>
      {showImg && (
        <Image
          src={imageUrl}
          preview={{ visible: showImg, onVisibleChange: onVisibleChange }}
          className="antd-image"
        />
      )}
    </Wrapper>
  )
})
