import * as actionTypes from './constants'
import { getArticleDetail } from '@/service/article'

const changeArticleDetailAction = articleDetail => ({
  type: actionTypes.CHANGE_ARTICLE_DETAIL,
  articleDetail
})

export const getArticleDetailAction = id => {
  return dispatch => {
    getArticleDetail(id).then(res => {
      console.log(res)
    })
  }
}
