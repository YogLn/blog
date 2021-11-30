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
      containerWidth: 1200, //容器总宽度
      itemClassName: 'productListItem',
      gridWidth: 20, //列宽
      transitionDuration: '.5' //过度动画时常
    }
  }

  return (
    <AutoResponsive {...getAutoResponsiveProps()}>
      <PhotoWrapper className="wrap-v1">
        {photoList.map(item => {
          return <PhotoImg info={item} key={item.id} />
        })}
      </PhotoWrapper>
    </AutoResponsive>
  )
})
