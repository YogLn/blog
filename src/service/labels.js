import request from './request'

export function getLabelList() {
	return request({
		url: '/label'
	})
}

