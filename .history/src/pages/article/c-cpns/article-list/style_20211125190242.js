import styled from 'styled-components';

export const ArticleListWrapper = styled.div`
	.article-enter, .article-appear {
  opacity: 0;
  transform: scale(.6);
}

.article-enter-active, .article-appear-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 300ms, transform 300ms;
}

.article-enter-done, .article-appear-done {

}

.article-exit {
  opacity: 1;
  transform: scale(1);
}

.article-exit-active {
  opacity: 0;
  transform: scale(.6);
  transition: opacity 300ms, transform 300ms;
}

.article-exit-done {
  opacity: 0;
}

`