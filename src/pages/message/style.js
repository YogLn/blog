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
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border: 1px solid #ccc;
    transform-origin: 0 0;
    transform: scale(0.5);
  }
  .aplayer-list-hide {
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
