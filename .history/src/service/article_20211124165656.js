import request from './request'

export function getArticleList(offset = 0, size = 10) {
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
