import request from './request';

export function getMessageList (offset = 0, size = 10) {
	return request({
		url: '/message',
		params: {
			offset,
			size
		}
	})
}