import styled from 'styled-components'

export const LoginWrapper = styled.div`
  @media screen and (min-width: 900px) {
    min-height: calc(100vh - 150px);
  }
  @media screen and (max-width: 900px) {
    min-height: calc(100vh - 20vh);
  }
  width: 80%;
  .tab {
    margin-top: 20px;
    width: 100%;
  }
`
