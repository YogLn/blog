import request from './request';

export function getCommentListById(id) {
	return request({
		url: `/comment/${id}`
	}) 
}

export function addComment(data) {
	return request({
		url: '/comment',
		method: 'POST',
		data
	})
}

export function replayComment(id, data) {
	return request({
		url: `comment/${id}/reply`,
		method: 'POST',
		data
	})
}

export function like(id) {
	return request({
		url: `/comment/${id}/like`,
		method: 'POST'
	})
}

export function dislike(id) {
	return request({
		url: `/comment/${id}/dislike`,
		method: 'POST'
	})
}