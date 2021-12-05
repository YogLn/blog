import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(utcString, dateFormat = DATA_FORMAT) {
	return dayjs.utc(utcString).utcOffset(8).format(dateFormat)
}
export function formatComment(commentList) {
	const res = []
	for (const comment of commentList) {
		if (comment.commentId) {
			let tag = false //没找到
			res.forEach(_rc => {
				if (_rc.id === comment.commentId) {
					tag = true //找到了
					if (_rc.children) {
						_rc.children.push(comment)
					} else {
						_rc.children = [comment]
					}
				} else if(!tag) {
					_rc.children.forEach(_crc => {
						if(_crc.id === comment.commentId) {
							_rc.children.push(comment)
						}
					})
				}
			})
		} else {
			res.push(comment)
		}
	}
	return res
}