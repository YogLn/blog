import request from './request';

export function getUserInfo(id) {
	return request({
		url: `users/${id}`
	})
}

export function register(data) {
	return request({
		url: '/users',
		method: 'POST',
		data
	})
}

export function login(data) {
	return request({
		url: '/login',
		method: 'POST',
		data
	})
}
export function uploadAvatarAPI(id, data) {
	return request({
		url: `/users/avatar/${id}`,
		method: 'POST',
		data
	})
}