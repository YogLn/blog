import styled from 'styled-components';

export const RecentWrapper = styled.div`
	border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;
  padding: 10px 10px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #3ad923;
    padding-bottom: 5px;

    .title {
      color: #666;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: #7087ed;
    }
  }

	.list {
		padding: 10px 10px 0;
		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 15px 0;
			border-bottom: 1px solid #ccc;
			padding-bottom: 5px;

			.title {
				cursor: pointer;
				.title-name {
					display: block;
					margin-left: 5px;
				}
				&:hover {
					color: #b734eb;
				}
			}

			.right {
				color: #b734eb;
			}
		}
	}
`