import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import Info from '@/components/info';
import { InfoWrapper } from './style';
export default memo(function RightInfo() {

	const { labelList } = useSelector(state => ({
    labelList: state.getIn(['article', 'labelList'])
  }),shallowEqual)

	return (
		<InfoWrapper>
			<Info labelList={labelList} title="文章标签"/>
		</InfoWrapper>
	)
})
