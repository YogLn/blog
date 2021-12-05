import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  cursor: pointer;
  margin: 20px 5px;
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
  width: 410px;
  padding: 6px 10px;

  .image {
    width: 410px;
    height: 250px;
    overflow: hidden;

    img {
      width: 410px;
      height: 250px;
      transition: all 0.5s;
      object-fit:cover;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`
export const ArticleRight = styled.div`
  width: 410px;
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
    width: 380px;
    text-align: center;
    margin: 0 auto;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
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
`
