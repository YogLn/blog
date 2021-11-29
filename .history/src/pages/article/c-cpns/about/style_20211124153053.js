import styled from 'styled-components';

export const AboutWrapper = styled.div`
	border: 1px solid #ccc;
	display: flex;
	align-items: center;
	flex-direction: column;
	.avatar {
		img {
			border-radius: 50%;
			width: 50px;
			height: 50px;
		}
	}
	.name {
		font-size: 20px;
	}
`