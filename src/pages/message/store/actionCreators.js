import * as actionTypes from './constant';
import { getMessageList } from '@/service/message';

const changeMessageListAction = messageList => ({
	type: actionTypes.CHANGE_MESSAGE_LIST, 
	messageList
})

export const getMessageListAction = (offset, size) => {
	return dispatch => {
		getMessageList(offset, size).then(res => {
			dispatch(changeMessageListAction(res))
		})
	}
}