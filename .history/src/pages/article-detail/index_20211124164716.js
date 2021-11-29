import React, { memo } from 'react'

export default memo(function ArticleDetail(props) {
	const id = props?.match?.params?.id
	console.log(id);
	return (
		<div>
			ArticleDetail
		</div>
	)
})
