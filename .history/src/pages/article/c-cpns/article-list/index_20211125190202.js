import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { CSSTransition } from 'react-transition-group'
import Article from '@/components/article'
import { ArticleListWrapper } from './style'

export default memo(function ArticleList() {
  const { articleList } = useSelector(
    state => ({
      articleList: state.getIn(['article', 'articleList'])
    }),
    shallowEqual
  )

  return (
    <ArticleListWrapper>
      {articleList &&
        articleList.map(item => {
          return (
            <CSSTransition timeout={5000} appear unmountOnExit={true} className="article">
              <Article info={item} key={item.id} />
            </CSSTransition>
          )
        })}
    </ArticleListWrapper>
  )
})
