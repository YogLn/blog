import styled from 'styled-components'

export const AboutWrapper = styled.div`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  flex-direction: column;
  .avatar {
    margin-top: 20px;
    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      /* box-shadow: 2px 2px 5px #00A4FF; */
      border: 5px solid #00a4ff;
      box-shadow: 10px 10px 5px #888888, 10px 10px 5px #888 inset;
    }
  }
  .name {
    margin: 10px 0 20px;
    font-size: 20px;
  }
  .info {
    text-align: center;
    color: #999;
    font-size: 16px;
    .address {
      span {
        padding: 0 3px;
      }
    }
  }
  .concat {
    margin-top: 20px;
    h3 {
      font-size: 20px;
      color: #666;
      position: relative;
      text-align: center;
    }
    h3::before {
      content: '';
      border-top: 1px solid #ccc;
      display: block;
      position: absolute;
      width: 100px;
      top: 50%;
      left: 120px;
    }

    h3::after {
      content: '';
      border-top: 1px solid #ccc;
      display: block;
      position: absolute;
      width: 100px;
      top: 50%;
      right: 120px;
    }
    .tag {
      font-size: 30px;
      display: flex;
      align-items: center;
      .qq {
        color: #00a4ff;
        cursor: pointer;
      }
      .github {
        margin: 0 30px;
        color: #000;
        cursor: pointer;
      }
      .wechat {
        color: #4be97a;
        cursor: pointer;
      }
    }
  }
`
