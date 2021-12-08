import styled from 'styled-components';

export const CommentWrapper = styled.div`
	position: relative;
	width: 100%;
	.submit {
		position: absolute;
		right: 0;
		top: 120px;
	}
	.comment-list {
		margin-top: 50px;
		.ant-comment-content {
			width: 100%;
			.ant-comment-actions {
			li{
				display: inline-block;
			}
		}
		}
		
	}
`