import React, { memo } from 'react'
import { HomeWrapper } from './style';

export default memo(function Home() {
	return (
		<HomeWrapper>
			<div className="center">
				<h1 className="name">{Yogln}</h1>
				<span className="circle1"></span>
				<span className="circle2"></span>
				<span className="circle3"></span>
				<span className="circle4"></span>
			</div>
		</HomeWrapper>
	)
})
