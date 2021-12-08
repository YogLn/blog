import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  @media screen and (min-width: 900px) {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 30px;
  }
`

export const ArticleLeft = styled.div`
  transition: all 0.8s;
  width: 68%;
  animation: article-move 0.8s linear;
  @keyframes article-move {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 1250px) {
    width: 90%;
  }
`

export const ArticleRight = styled.div`
  width: 30%;
  animation: left-move 0.7s linear 0.1s;
  transition: all 0.8s;

  @keyframes left-move {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 1250px) {
    display: none;
  }
`
