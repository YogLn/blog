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
    }
    h3::before {
      content: '';
      border-top: 1px solid #ccc;
      display: block;
      position: absolute;
      width: 100px;
      top: 50%;
      left: 100px;
    }

    h3::after {
      content: '';
      border-top: 1px solid #ccc;
      display: block;
      position: absolute;
      width: 100px;
      top: 50%;
      right: 100px;
    }

		font-size: 30px;
  }
`
