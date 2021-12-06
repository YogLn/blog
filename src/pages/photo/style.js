import styled from 'styled-components'

export const PhotoWrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    .content {
      width: 1100px;
      margin: 0 auto;
      columns: 4;
      column-gap: 0;
    }
  }
  @media only screen and (min-width: 980px) and (max-width: 1200px) {
    .content {
      width: 800px;
      margin: 0 auto;
      columns: 3;
      column-gap: 0;
    }
  }
  @media only screen and (max-width: 500px) {
    .content {
      width: 300px;
      margin: 0 auto;
      columns: 1;
      column-gap: 0;
    }
  }
`
