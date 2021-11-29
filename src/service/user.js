import request from './request';

export function getUserInfo(id) {
	return request({
		url: `users/${id}`
	})
}