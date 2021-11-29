import styled from 'styled-components'
import logo from '../../assets/img/logo.jpg'

export const HeaderWrapper = styled.div`
  height: 50px;
  background-color: #404d5a;
  box-shadow: 0 2px 6px #c739cc;
  /* background-color: #283646; */
  line-height: 50px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderLeft = styled.div`
  .logo {
    background: url(${logo}) center no-repeat;
    display: inline-block;
    width: 60px;
    height: 50px;
    text-indent: 56px;
    background-size: 60px 50px;
    cursor: pointer;
    animation: logo-scale 3s linear infinite;
    span {
      animation: logo-scale 3s linear infinite;
    }
    &:hover {
      text-decoration: none;
    }
    span {
      font-size: 20px;
      color: #fff;
      font-family: 'Times New Roman', Times, serif;
      text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.8);
    }
  }
  .desc {
    font-size: 12px;
    position: relative;
    top: 8px;
    left: 60px;
    color: #999;
    cursor: default;
  }

  @keyframes logo-scale {
    0% {
      transform: scale(1);
      color: #f35626;
    }
    50% {
      transform: scale(1.1);
      color: #feab3a;
    }
    100% {
      transform: scale(1);
      color: #22cf0e;
    }
  }
`

export const HeaderRight = styled.div`
  .select-list {
    display: flex;
    align-items: center;
    .select-item {
      padding: 0 15px;
      font-size: 13px;
      color: #ccc;

      &:hover {
        color: #eee;
      }

      a {
        text-decoration: none;
        display: inline-block;
        color: inherit;
        padding-left: 8px;

        i {
          padding-right: 4px;
        }
      }

      &.active {
        /* opacity: 0; */
        background-color: #333;

      }
    }
  }
`
