import styled from 'styled-components'

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DetailLeft = styled.div`
  width: 600px;
  padding: 0 40px;
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
  width: 320px;
`
