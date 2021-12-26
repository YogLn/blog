import request from './request'

export function getArchiveList() {
	return request({
		url: '/archive'
	})
}