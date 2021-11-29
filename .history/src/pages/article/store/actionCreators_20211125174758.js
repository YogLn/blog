import * as actionTypes from './constants'
import { getArticleList } from '@/service/article'
import { getUserInfo } from '@/service/user'
import { getLabelList } from '@/service/labels'

const changeArticleListAction = articleList => ({
  type: actionTypes.CHANGE_ARTICLE_LIST,
  articleList
})

const changeTotalAction = total => ({
  type: actionTypes.CHANGE_ARTICLE_TOTAL,
  total
})

const changeLabelListAction = labelList => ({
  type: actionTypes.CHANGE_LABELS_LIST,
  labelList
})

const changeUserInfoAction = userInfo => ({
  type: actionTypes.CHANGE_USER_INFO,
  userInfo
})

export const changeCurrentIndex = index => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  index
})

export const getArticleListAction = (offset, size = 0) => {
  return dispatch => {
    getArticleList(offset, size).then(res => {
      dispatch(changeArticleListAction(res))
      dispatch(changeTotalAction(res[0].total))
    })
  }
}

export const getLabelListAction = (offset, size = 0) => {
  return dispatch => {
    getLabelList().then(res => {
      dispatch(changeLabelListAction(res))
    })
  }
}

export const getUserInfoAction = (id) => {
  return dispatch => {
    getUserInfo(id).then(res => {
      dispatch(changeUserInfoAction(res[0]))
    })
  }
}
