import React, { memo } from 'react'

import { PhotoWrapper } from './style';

export default memo(function Photo(props) {
	const { info } = props;
	
	return (
		<PhotoWrapper>
			<img src={info.imgUrl} alt="" />
			<p>{info.description}</p>
		</PhotoWrapper>
	)
})
