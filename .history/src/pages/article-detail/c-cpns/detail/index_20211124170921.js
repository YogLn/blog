import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { DetailWrapper } from './style'

export default memo(function Detail() {
  const { articleDetail } = useSelector(
    state => ({
      articleDetail: state.getIn(['detail', 'articleDetail'])
    }),
    shallowEqual
  )
  return (
    <DetailWrapper>
      
    </DetailWrapper>
  )
})
