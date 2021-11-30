import styled from 'styled-components';

export const MessageWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 15px 0;
	.left {
		width: 80px;
		height: 80px;
		margin: 0 10px;
		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
	}
	.right {
		.time {
			color: #ccc;
			font-size: 12px;

		}
	}
`