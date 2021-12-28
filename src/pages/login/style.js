import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  .tab {
    margin-top: 20px;
    width: 50%;
  }
 
  @media screen and (min-width: 900px) {
    min-height: calc(100vh - 140px);
  }
  @media screen and (max-width: 900px) {
    min-height: calc(100vh - 20vh);
  }
`
