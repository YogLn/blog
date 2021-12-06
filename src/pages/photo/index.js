import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getPhotoListAction } from './store/actionCreator'

import PhotoImg from '@/components/photo'
import { PhotoWrapper } from './style'

export default memo(function Photo() {
  const { photoList } = useSelector(
    state => ({
      photoList: state.getIn(['photo', 'photoList'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPhotoListAction(0, 10))
  }, [dispatch])

  return (
    <PhotoWrapper>
      <div className="content">
        {photoList.map(item => {
          return <PhotoImg info={item} key={item.id} />
        })}
      </div>
    </PhotoWrapper>
  )
})
