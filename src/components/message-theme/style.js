import styled from 'styled-components'

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
	border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  animation: moveUp 0.4s;
  transition: all 0.4s;
  width: 100%;
  .left {
    width: 80px;
    height: 80px;
    margin: 0 10px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      &:hover {
        animation: avatar-rotate 0.7s linear alternate;
      }
    }
  }
  .right {
    width: 100%;
    .info {
      display: flex;
      align-items: center;
			.username {
				color: #333;
        font-size: 13px;
        font-weight: bold;
			}
      .time {
        color: #ccc;
        font-size: 12px;
        padding-left: 15px;
      }
    }
    .content {
      font-size: 13px;
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
  
  @keyframes moveUp {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`
