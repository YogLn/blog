import styled from 'styled-components';

export const AboutWrapper = styled.div`
	border: 1px solid #ccc;
	display: flex;
	align-items: center;
	flex-direction: column;
	.avatar {
		img {
			border-radius: 50%;
		}
	}
	.name {
		font-size: 20px;
	}
`