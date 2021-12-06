import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

export const ArticleLeft = styled.div`
  transition: all 0.8s;
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
`

export const ArticleRight = styled.div`
  width: 350px;
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
`
