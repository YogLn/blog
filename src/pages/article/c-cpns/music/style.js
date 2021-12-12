import styled from 'styled-components'

export const MusicWrapper = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;
  padding: 10px 10px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #3ad923;
    padding-bottom: 5px;

    .title {
      color: #666;
    }
    .play {
      color: #a83232;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: #7087ed;
    }
  }

  .music {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      width: 40%;
      padding: 8px;
      img {
        width: 90%;
      }
    }
    .right {
      width: 55%;
      .info {
        display: flex;
        align-items: center;
        .music-name {
          font-size: 16px;
          font-weight: bold;
        }
        .author {
          font-size: 12px;
          color: #666;
          padding: 8px 0 0 5px;
        }
      }
      .control {
        margin-top: 10px;
        .left-circle {
          cursor: pointer;
          svg {
            width: 35px;
            height: 35px;
          }
        }
        .center-circle {
          cursor: pointer;
          margin: 0 8px;
          svg {
            width: 35px;
            height: 35px;
          }
        }
        .right-circle {
          cursor: pointer;
          svg {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }
`
