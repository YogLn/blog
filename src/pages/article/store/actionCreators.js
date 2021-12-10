import * as actionTypes from './constants'
import { getArticleList, getArticleListByName, getHotArticle } from '@/service/article'
import { getUserInfo } from '@/service/user'
import { getLabelList, getArticleListByLabel } from '@/service/labels'

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

const changeHotListAction = hotList => ({
  type: actionTypes.CHANGE_HOT_LIST,
  hotList
})

export const getArticleListAction = (offset, size = 5) => {
  return dispatch => {
    getArticleList(offset, size).then(res => {
      dispatch(changeArticleListAction(res))
      dispatch(changeTotalAction(res[0].total))
    })
  }
}

export const getLabelListAction = (offset, size = 0) => {
  return (dispatch, getState) => {
    getLabelList().then(res => {
      setTimeout(() => {
        const total = getState().getIn(['article', 'total'])
        res.unshift({ labelName: 'All', color: '#e62ee6', total })
        dispatch(changeLabelListAction(res))
      }, 100)
    })
  }
}

export const getUserInfoAction = id => {
  return dispatch => {
    getUserInfo(id).then(res => {
      dispatch(changeUserInfoAction(res[0]))
    })
  }
}

export const getArticleListActionByName = data => {
  return dispatch => {
    getArticleListByName(data).then(res => {
      dispatch(changeArticleListAction(res))
    })
  }
}

export const getArticleListByLabelNameAction = name => {
  return (dispatch, getState) => {
    getArticleListByLabel(name).then(res => {
      const total = res.length
      dispatch(changeTotalAction(total))
      dispatch(changeArticleListAction(res))
    })
  }
}

export const getHotListAction = () => {
  return dispatch => {
    getHotArticle().then(res => {
      dispatch(changeHotListAction(res))
    })
  }
}
