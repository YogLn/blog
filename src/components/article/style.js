import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  width: 100%;
  min-width: 370px;
  cursor: pointer;
  margin: 20px 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:hover {
    box-shadow: 2px 2px 5px #999;
  }
`
export const ArticleLeft = styled.div`
  width: 55%;
  padding: 6px 10px;

  .image {
    width: 100%;
    height: 250px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: all 0.5s;
      object-fit: cover;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`
export const ArticleRight = styled.div`
  width: 45%;
  text-align: center;
  .title {
    font-size: 24px;
    margin: 20px 0;
    text-shadow: 2px 2px 5px #333;
  }
  .desc {
    color: #666;
    margin: 5px;
    font-size: 14px;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    @media (max-width: 550px) {
      display: none;
    }
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    width: 100%;
    .time {
      margin: 0 5px;
      span {
        margin-right: 5px;
        display: inline-block;
      }
    }
    .comment {
      margin: 0 5px;
      span {
        margin-right: 5px;
        display: inline-block;
      }
    }
    .browser {
      margin: 0 5px;
      span {
        margin-right: 5px;
        display: inline-block;
      }
    }
  }

  .label {
    margin: 10px 10px;
    padding: 4px 8px;
  }

  @media (max-width: 630px) {
    .info {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      .time {
        margin: 0 5px;
        span {
          margin-right: 5px;
          display: inline-block;
        }
      }
      .comment {
        margin: 0 5px;
        width: 20%;
        span {
          margin-right: 5px;
          display: inline-block;
        }
      }
      .browser {
        margin: 0 5px;
        span {
          margin-right: 5px;
          display: inline-block;
        }
      }
    }
  }
`
