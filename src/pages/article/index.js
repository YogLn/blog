import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import {
  getArticleListAction,
  getLabelListAction,
  getUserInfoAction,
  getHotListAction
} from './store/actionCreators'

import ArticleHeader from './c-cpns/article-header'
import ArticleList from './c-cpns/article-list'
import RightSearch from './c-cpns/right-search'
import RightInfo from './c-cpns/right-info'
import About from './c-cpns/about'
import Music from './c-cpns/music';
import Pagination from '@/components/pagination'
import { ArticleWrapper, ArticleLeft, ArticleRight } from './style'

export default memo(function Article() {
  const dispatch = useDispatch()
  const { total } = useSelector(
    state => ({
      total: state.getIn(['article', 'total'])
    }),
    shallowEqual
  )

  // hooks
  useEffect(() => {
    dispatch(getArticleListAction(0, 5))
    dispatch(getLabelListAction())
    dispatch(getUserInfoAction(8))
    dispatch(getHotListAction())
  }, [dispatch])

  return (
    <ArticleWrapper>
      <ArticleLeft>
        <ArticleHeader />
        <ArticleList />
        <Pagination total={total} />
      </ArticleLeft>
      <ArticleRight>
        <RightSearch />
        <Music/>
        <RightInfo />
        <About />
      </ArticleRight>
    </ArticleWrapper>
  )
})
