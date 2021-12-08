import styled from 'styled-components'

export const PhotoWrapper = styled.div`
  @media screen and (min-width: 1300px) {
    columns: auto 4;
    column-gap: 0;
  }
  @media screen and (min-width: 900px) and (max-width: 1300px) {
    width: 100%;
    margin: 0 auto;
    columns: auto 3;
    column-gap: 0;
  }
  @media screen and (min-width: 700px) and (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
    columns: auto 2;
    column-gap: 0;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0 auto;
    columns: auto 1;
    column-gap: 0;
  }
`
