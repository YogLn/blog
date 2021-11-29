import styled from 'styled-components'

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
export const DetailLeft = styled.div`

`
export const DetailRight = styled.div`
	width: 50%;
`
