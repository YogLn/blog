import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getPhotoListAction } from './store/actionCreator'

import {windowScroll} from '@/utils/view';
import PhotoImg from '@/components/photo'
import { PhotoWrapper } from './style'

export default memo(function Photo() {
  const [page] = useState(0)
  const [size, setSize] = useState(10)
  const { photoList } = useSelector(
    state => ({
      photoList: state.getIn(['photo', 'photoList'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPhotoListAction(page, size))
  }, [dispatch, page, size])

  const loadMore = useCallback(() => {
    setSize(size + 10)
    dispatch(getPhotoListAction(page, size))
  }, [dispatch, size, page])
  
  windowScroll(loadMore)

  return (
    <PhotoWrapper className="wrap-v1">
      {photoList.map(item => {
        return <PhotoImg info={item} key={item.id} />
      })}
    </PhotoWrapper>
  )
})
