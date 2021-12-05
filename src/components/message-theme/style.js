import styled from 'styled-components'

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
	border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  .left {
    width: 80px;
    height: 80px;
    margin: 0 10px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      &:hover {
        animation: avatar-rotate 0.6s linear alternate;
      }
    }
  }
  .right {
    .info {
      display: flex;
      align-items: center;
			.username {
				color: #333;
			}
      .time {
        color: #ccc;
        font-size: 12px;
				margin-left: 20px;
      }
    }
  }

  @keyframes avatar-rotate {
    form {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
