import styled from 'styled-components'

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DetailLeft = styled.div`
  padding: 20px 20px;
  border: 1px solid #ddd;
  width: 900px;
  background-color: #fff;
  .top {
    width: 100%;
    height: 60px;
    background-color: #e1f0ff;
    line-height: 60px;
    display: flex;
    align-items: center;
    font-size: 20px;

    .back {
      color: #2782e3;
      font-weight: bold;
      margin-right: 5px;
      cursor: pointer;
      text-decoration: underline;
      
    }
  }
  .title {
    text-align: center;
    color: #2782e3;
    font-weight: bold;
    margin: 20px 0;
  }
  .info {
    display: flex;
    justify-content: space-around;
    color: #333;
  }
  .image {
    margin-top: 20px;
    text-align: center;
    img {
      width: 850px;
      object-fit: contain;
    }
  }
  .description {
    margin-top: 20px;
    color: #666;
    text-align: center;
  }
  .content {
    font-family:Georgia, Arial;
    color: #000;
    img {
      width: 800px;
      object-fit: fill;
    }
  }
  .update{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #ddd;
  }
`
export const DetailRight = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  color: #000;
  opacity: 0.5;
  width: 280px;
  .article-menu {
    width: 100%;
  }
`
