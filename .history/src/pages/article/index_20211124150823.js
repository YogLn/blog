import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getArticleListAction, getLabelListAction, getUserInfoAction } from './store/actionCreators'

import ArticleHeader from './c-cpns/article-header'
import ArticleList from './c-cpns/article-list'
import RightSearch from './c-cpns/right-search'
import RightInfo from './c-cpns/right-info';
import { ArticleWrapper, ArticleLeft, ArticleRight } from './style'

export default memo(function Article() {
  // state
  const [page, setPage] = useState(0)
  // redux-hooks
  const dispatch = useDispatch()
  // hooks
  useEffect(() => {
    dispatch(getArticleListAction(page, 10))
		dispatch(getLabelListAction())
    dispatch(getUserInfoAction(5))
  }, [dispatch, page])

  return (
    <ArticleWrapper className="wrap-v1">
      <ArticleLeft>
        <ArticleHeader />
        <ArticleList />
      </ArticleLeft>
      <ArticleRight>
        <RightSearch />
        <RightInfo />
      </ArticleRight>
    </ArticleWrapper>
  )
})
