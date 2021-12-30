import styled from 'styled-components'

export const TimeWrapper = styled.div`
  @media screen and (min-width: 950px) {
    width: 70%;
    margin: 0 auto;
    border: 1px solid #fff;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }
  padding-top: 20px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.85);
  .ant-timeline-item-content {
    font-size: 16px;
    color: #f5bc42;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border: 1px solid #ccc;
    transform-origin: 0 0;
    transform: scale(0.5);
  }
  .timeline {
    animation: img-show 0.7s;
    transition: all 0.7s;
    padding: 20px 10px 0;
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #f5bc42;
    }
    .content {
      font-size: 14px;
      font-weight: bold;
      color: #00b3ff;
    }
    img {
      width: 100%;
    }
    .time {
      font-size: 14px;
      color: #9a99a1;
    }
  }
  @keyframes img-show {
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
