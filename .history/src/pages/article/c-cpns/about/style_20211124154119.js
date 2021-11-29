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
		margin: 10px 0 20px;
		font-size: 20px;
	}
	.info {
		text-align: center;
		color: #999;
		font-size: 15px;
		.address {
			span {
				padding: 0 3px;
			}
		}
	
	}
`