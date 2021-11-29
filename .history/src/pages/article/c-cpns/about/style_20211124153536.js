import styled from 'styled-components';

export const AboutWrapper = styled.div`
	border: 1px solid #ccc;
	display: flex;
	align-items: center;
	flex-direction: column;
	.avatar {
		margin-top: 20px;
		img {
			border-radius: 50%;
			width: 100px;
			height: 100px;
		}
	}
	.name {
		font-size: 20px;
	}
`