import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux';

import { getArticleListAction } from '@/pages/article/store';
import { backTop } from '@/utils/view.js';
import { Pagination } from 'antd';
import { PaginationWrapper } from './style'

export default memo(function MyPagination(props) {
	const { total } = props
	const dispatch = useDispatch()
	
	const onShowSizeChange = useCallback((current, size) => {
		dispatch(getArticleListAction((current * size - 1),  size))
		backTop()
	}, [dispatch])

	const pageChange = useCallback((page, pageSize) => {
		dispatch(getArticleListAction((page - 1) * pageSize, pageSize))
		backTop()
	}, [dispatch])

  return (
    <PaginationWrapper>
      <Pagination
        showSizeChanger
				defaultPageSize={5}
				defaultCurrent={1}
        total={total}
				pageSizeOptions={['5', '10', '15', '20']}
				onChange={pageChange}
        onShowSizeChange={onShowSizeChange}
				className="pagination"
      />
    </PaginationWrapper>
  )
})
