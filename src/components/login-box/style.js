import styled from 'styled-components'

export const LoginBoxWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 28rem;
  z-index: 10;

  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 20rem;
    height: 28rem;
    border-radius: 10px;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all 0.5s;
    user-select: none;

    .form-content {
      position: relative;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 2px #3399ff;
      border-radius: 30px;
      background-color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 10%;
        button {
          text-transform: uppercase;
          padding: 8px;
          border: none;
          outline: none;
          background-color: #0066ff;
          color: #fff;
          width: 12rem;
          border-radius: 30px;
          cursor: pointer;
        }
      }

      .avtar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        .pic {
          margin-top: 10%;
          position: relative;
          width: 80px;
          height: 80px;
          overflow: hidden;
          border-radius: 50%;
          border: 1px solid #3399ff;
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
      h1 {
        font-size: 1.6rem;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        div {
          position: relative;
          span {
            position: relative;
            left: 7%;
          }
        }
        .fa {
          position: absolute;
          top: 18px;
          left: 25px;
        }
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 10%;
          button {
            text-transform: uppercase;
            padding: 8px;
            border: none;
            outline: none;
            background-color: #0066ff;
            color: #fff;
            width: 12rem;
            border-radius: 30px;
            cursor: pointer;
          }
        }

        input {
          width: 16rem;
          padding: 0.8rem;
          padding-left: 3rem;
          outline: none;
          border: none;
          border-radius: 15px;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
          margin: 5px;
        }
      }

      .btn-something {
        color: #888;
        font-size: 14px;
        text-align: center;
        margin-top: 10%;
        .signup-btn {
          color: #0066ff;
          cursor: pointer;
          font-weight: 500;
          .signup {
            /* background-color: blue; */
            transform: rotateY(-108deg);
          }
        }
      }
    }
  }
`
