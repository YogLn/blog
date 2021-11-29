import styled from 'styled-components'

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DetailLeft = styled.div`
  flex: 1;
  padding: 0 40px;
  border: 1px solid #ccc;
  .top {
    margin-top: 10px;
    width: 100%;
    height: 60px;
    background-color: #e1f0ff;
    line-height: 60px;
    display: flex;
    align-items: center;

    .back {
      font-size: 20px;
      color: #2782e3;
      font-weight: bold;
      margin-right: 5px;
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
    color: #399161;
  }
  .image {
    margin-top: 20px;
    text-align: center;
    img {
      width: 1000px;
      object-fit: contain;
    }
  }
  .description {
    margin-top: 20px;
    color: #666;
    text-align: center;
  }
  .content {
    img {
      width: 800px;
      object-fit: fill;
    }
  }
`
export const DetailRight = styled.div`
  border: 1px solid #ccc;
  width: 320px;
`
