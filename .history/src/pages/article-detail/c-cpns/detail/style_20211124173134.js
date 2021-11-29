import styled from 'styled-components';

export const DetailWrapper = styled.div`
	.title {
		text-align: center;
	}

	.image {
		margin-top: 20px;
		text-align: center;
		img {
			width:800px;
			object-fit: contain;
		}
	}
	.description {
		margin-top: 20px;
		color: #666;
		text-align: center;
	}
	.content {
		img {
			width:800px;
			height:600px
			object-fit: contain;
		}
	}
`