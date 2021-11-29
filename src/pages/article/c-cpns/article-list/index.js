import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

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
          return <Article info={item} key={item.id} />
        })}
    </ArticleListWrapper>
  )
})
