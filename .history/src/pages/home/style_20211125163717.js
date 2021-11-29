import styled from 'styled-components'
// import home from '@/assets/img/home.jpg'

export const HomeWrapper = styled.div`
  display: flex;
  height: calc(100% - 130px);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: radial-gradient(#ccc, rgb(36, 91, 122));

  .container {
    width: 300px;
    height: 300px;
    position: relative;
    /* 样式 必须写这个 */
    transform-style: preserve-3d;
    animation: rotate 5s linear alternate infinite;

    .item {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    .front {
      transform: translateZ(150px);
    }
    .back {
      transform: rotateY(180deg) translateZ(150px);
    }
    .left {
      transform: rotateY(-90deg) translateZ(150px);
    }
    .right {
      transform: rotateY(90deg) translateZ(150px);
    }
    .top {
      transform: rotateX(90deg) translateZ(150px);
    }
    .bottom {
      transform: rotateX(-90deg) translateZ(150px);
    }
  }

  @keyframes rotate {
    0%,
    5% {
      transform: rotateY(90deg);
    }
    20%,
    25% {
      transform: rotateY(180deg);
    }
    40%,
    45% {
      transform: rotateY(270deg);
    }
    60%,
    65% {
      transform: rotateX(-90deg);
    }
    80%,
    85% {
      transform: rotateX(0);
    }
    95%,
    100% {
      transform: rotateX(90deg);
    }
  }
`
