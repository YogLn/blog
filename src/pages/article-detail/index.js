import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getArticleDetailAction } from './store/actionCreators';
import Detail from './c-cpns/detail';
import { ArticleDetailWrapper } from './style';

export default memo(function ArticleDetail(props) {
	const id = props?.match?.params?.id
	// redux hooks
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getArticleDetailAction(id))
	}, [dispatch, id])
	return (
		<ArticleDetailWrapper className="wrap-v1">
			<Detail />
		</ArticleDetailWrapper>
	)
})
