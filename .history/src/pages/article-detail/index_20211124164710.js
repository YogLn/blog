import React, { memo } from 'react'
import { useHistory } from "react-router-dom";

export default memo(function ArticleDetail(props) {
	const id = props?.match?.params?.id
	console.log(id);
	const history = useHistory()
	console.log(history);
	return (
		<div>
			ArticleDetail
		</div>
	)
})
