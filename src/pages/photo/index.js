import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import AutoResponsive from 'autoresponsive-react'
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

  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: 1200,
      itemClassName: 'productListItem',
      gridWidth: 20,
      transitionDuration: '.5'
    }
  }

  return (
    <PhotoWrapper className="wrap-v1">
      <AutoResponsive {...getAutoResponsiveProps()}>
        {photoList.map(item => {
          return <PhotoImg style={{ width: 300, height: 400 }} info={item} key={item.id} />
        })}
      </AutoResponsive>
    </PhotoWrapper>
  )
})
