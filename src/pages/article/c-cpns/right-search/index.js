import React, { memo } from 'react'
import { Input } from 'antd'

import { SearchWrapper } from './style'

export default memo(function Search() {
  const { Search } = Input
  const onSearch = () => {}

  return (
    <SearchWrapper>
      <Search
        placeholder="输入文章关键字搜索···"
        onSearch={onSearch}
        enterButton/>
    </SearchWrapper>
  )
})
