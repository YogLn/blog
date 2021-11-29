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
		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
`