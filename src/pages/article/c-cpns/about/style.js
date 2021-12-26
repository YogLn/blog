import styled from 'styled-components'

export const AboutWrapper = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
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
      box-shadow: 10px 10px 5px #888, 10px 10px 5px #888 inset;
      &:hover {
        animation: avatar-rotate 0.6s linear alternate;
      }
    }
  }
  .name {
    margin: 10px 0 20px;
    font-size: 20px;
    font-weight: 700;
  }
  .info {
    width: 100%;
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
    .social-contact {
      font-size: 20px;
      font-weight: 700;
      color: #666;
      position: relative;
      text-align: center;
    }
    .social-contact::before {
      content: '';
      border-top: 1px solid #ccc;
      display: block;
      position: absolute;
      width: 50%;
      top: 50%;
      left: 120px;
    }

    .social-contact::after {
      content: '';
      border-top: 1px solid #ccc;
      display: block;
      position: absolute;
      width: 50%;
      top: 50%;
      right: 120px;
    }
    .tag {
      font-size: 30px;
      display: flex;
      align-items: center;
      .qq {
        position: relative;
        margin: 0 10px;
        color: #00a4ff;
        cursor: pointer;
        &:hover {
          & img {
            visibility: visible;
          }
        }
        img {
          transform: translate(-50%, -100%);
          left: 50%;
          visibility: hidden;
          position: absolute;
          width: 100px;
          height: 100px;
        }
      }
      .github {
        margin: 0 10px;
        color: #000;
        cursor: pointer;
        position: relative;
        &:hover {
          & img {
            visibility: visible;
          }
        }
        img {
          transform: translate(-50%, -100%);
          left: 50%;
          visibility: hidden;
          position: absolute;
          width: 100px;
          height: 100px;
        }
      }
      .wechat {
        position: relative;
        color: #4be97a;
        margin: 0 10px;
        cursor: pointer;
        &:hover {
          & img {
            visibility: visible;
          }
        }
        img {
          transform: translate(-50%, -100%);
          left: 50%;
          visibility: hidden;
          position: absolute;
          width: 100px;
          height: 100px;
        }
      }

      .juejin {
        cursor: pointer;
        margin: 0 10px;
        img {
          width: 30px;
          height: 30px;
        }
      }
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
`
