import styled from 'styled-components'
import logo from '../../assets/img/logo.png'

export const HeaderWrapper = styled.div`
  height: 50px;
  background-color: #404D5A;
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
    &:hover {
      text-decoration: none;
    }
    span {
      font-size: 20px;
      color: #fff;
      font-family: 'Times New Roman', Times, serif;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8)
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
        color: #ff0000;
      }
    }
  }
`
