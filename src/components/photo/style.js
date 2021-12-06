import styled from 'styled-components'

export const PhotoWrapper = styled.div`
  border: 2px solid hsla(0, 0%, 0%, 0.5);
  position: relative;
  padding: 2px;

  transition: all 0.8s;
  animation: photo-show 0.8s linear;
  &:hover {
    opacity: 0.9;
    filter: alpha(opacity=60);
  }

  img {
    display: block;
    height: auto;
    width: 100%;
    object-fit: contain;
  }

  .info {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    p {
      opacity: 0;
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
      padding: 10px; 

      &:hover {
        opacity: 1;
        color: #000;
        font-size: 16px;
      }

      span {
        display: block;
        color: #999;
        position: absolute;
        right: 10px;
        bottom: 0;
        font-size: 12px;
      }
    }
  }

  @keyframes photo-show {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

`
