import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import { Input } from 'antd'

import { getArticleListActionByName } from '../../store/actionCreators'

import { SearchWrapper } from './style'

export default memo(function Search() {
  const { Search } = Input
  const dispatch = useDispatch()
  const onSearch = value => {
    dispatch(getArticleListActionByName({ name: value }))
  }

  return (
    <SearchWrapper>
      <Search
        placeholder="输入文章关键字搜索···"
        onSearch={onSearch}
        enterButton
      />
    </SearchWrapper>
  )
})
