import request from './request'

export function getLabelList() {
  return request({
    url: '/label'
  })
}

export function getArticleListByLabel(name, offset = 0, size = 10) {
  return request({
    url: `/label/${name}`,
    params: {
      offset,
      size
    }
  })
}
