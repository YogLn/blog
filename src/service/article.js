import request from './request'

export function getArticleList(offset = 0, size = 5) {
	return request({
		url: '/article',
		params: {
			offset,
			size
		}
	})
}

export function getArticleDetail(id) {
	return request({
		url: `/article/${id}`
	})
}

export function getCommentListById(id) {
	return request({
		url: `comment/${id}`
	})
}

export function getArticleListByName(data) {
	return request({
		url: '/article/search',
		method: 'POST',
		data
	})
}

export function getHotArticle() {
	return request({
		url: '/article/hot'
	})
}