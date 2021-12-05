import * as actionTypes from './constants'
import { getArticleDetail, getCommentListById } from '@/service/article'

const changeArticleDetailAction = articleDetail => ({
  type: actionTypes.CHANGE_ARTICLE_DETAIL,
  articleDetail
})

const changeCommentListAction = commentList => ({
  type: actionTypes.CHANGE_COMMENT_LIST, 
  commentList
})

export const getArticleDetailAction = id => {
  return dispatch => {
    getArticleDetail(id).then(res => {
			dispatch(changeArticleDetailAction(res[0]))
    })
  }
}

export const getCommentListAction = id => {
  return dispatch => {
    getCommentListById(id).then(res => {
      dispatch(changeCommentListAction(res))
    })
  }
}
