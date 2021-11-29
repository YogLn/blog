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
    width: 100%;
    height: 60px;
    background-color: #e1f0ff;
    line-height: 60px;

    display: flex;
    align-items: center;
  }
  .title {
    text-align: center;
  }
  .image {
    margin-top: 20px;
    text-align: center;
    img {
      width: 800px;
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
