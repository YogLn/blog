import request from './request';

export function getMusicListAPI () {
	return request({
		url: '/music'
	})
}

export function getMusicListDetailAPI (id) {
	return request({
		url: `/music/${id}`
	})
}