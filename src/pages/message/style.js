import styled from 'styled-components'

export const MessageWrapper = styled.div`
  @media screen and (min-width: 950px) {
    width: 70%;
    margin: 0 auto;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }
  position: relative;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 0px 15px 30px;
  border: 1px solid #eee;
  .player {
    animation: moveUp 0.7s;
    transition: all 0.7s;
  }

  .more {
    color: #4c30ff;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
  }
  .leave-message {
    margin-top: 40px;
    width: 100%;

    .emoji-mart {
      position: absolute;
      left: 15px;
      margin-top: 5px;
      bottom: 180px;
    }

    .submit-btn {
      right: 0;
      margin-top: 5px;
      position: absolute;
      right: 15px;
    }
    .smile-two-tone {
      font-size: 20px;
      margin-top: 5px;
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
