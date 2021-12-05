import styled from 'styled-components'
import background from '@/assets/img/background.jpg';

export const HomeWrapper = styled.div`
  .container {
    width: 100%;
    min-height: calc(100vh - 120px);
    position: relative;
    background-image: url(${background});
    background-position: center;
    overflow: hidden;

    .cloud {
      height: 250px;
      position: absolute;
      right: 0;
      animation: cloud-move 10s linear infinite;
    }

    .ocean {
      height: 220px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;

      .water {
        height: 100%;
        width: 200%;
        position: absolute;
        right: 0;
        animation: water-move 10s linear infinite;
      }

      .boat {
        width: 350px;
        position: absolute;
        bottom: 200px;
        left: 50%;
        transform: translateX(-50%);
        -webkit-box-reflect: below 0
          linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.6));
        animation: boat-move 2s linear infinite;

        img {
          width: 100%;
        }
      }
    }
  }

  @keyframes water-move {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(1000px);
    }
  }

  @keyframes cloud-move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(500px);
    }
  }

  @keyframes boat-move {
    0% {
      transform: rotate(0deg) translateY(0px);
    }
    25% {
      transform: rotate(-3deg) translateY(1px);
    }
    50% {
      transform: rotate(0deg) translateY(3px);
    }
    75% {
      transform: rotate(-1deg) translateY(1px);
    }
    100% {
      transform: rotate(0deg) translateY(0px);
    }
  }
`
