import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getArticleDetailAction } from './store/actionCreators';

export default memo(function ArticleDetail(props) {
	const id = props?.match?.params?.id
	// redux hooks
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getArticleDetailAction(id))
	}, [dispatch])
	return (
		<div>
			ArticleDetail
		</div>
	)
})
