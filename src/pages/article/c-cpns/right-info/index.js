import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getArticleListByLabelNameAction, getArticleListAction } from '../../store/actionCreators';

import Info from '@/components/info';
import RecentArticle from '@/components/recent-article';
import { InfoWrapper } from './style';
export default memo(function RightInfo() {
	const dispatch = useDispatch()

	const { labelList } = useSelector(state => ({
    labelList: state.getIn(['article', 'labelList'])
  }),shallowEqual)
	
	const getArticleListByLabel = item => {
		if(item.labelName === 'All') {
			dispatch(getArticleListAction(0, 5))
		} else {
			dispatch(getArticleListByLabelNameAction(item.labelName))
		}
	}

	return (
		<InfoWrapper>
			<Info labelList={labelList} title="文章标签" getArticleListByLabel={getArticleListByLabel}/>
			<RecentArticle title="热门文章"/>
		</InfoWrapper>
	)
})
