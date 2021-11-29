import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export default memo(function ArticleDetail(props) {
	const [articleId, setArticleId] = useState(0)
	const id = props?.match?.params?.id
	setArticleId(id)

	// redux hooks
	const dispatch = useDispatch()
	useEffect(() => {
		
	}, [dispatch])
	return (
		<div>
			ArticleDetail
		</div>
	)
})
