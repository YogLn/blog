import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';

import { HeaderWrapper } from './style'

export default memo(function ArticleHeader() {
	const { total } = useSelector(state => ({
		total: state.getIn(['article', 'total'])
	}), shallowEqual)
  return (
    <HeaderWrapper>
      <div>文章列表</div>
      <div className="right">
        <div>共</div>
        <div className="total">{total}</div>
        <div>篇</div>
      </div>
    </HeaderWrapper>
  )
})
