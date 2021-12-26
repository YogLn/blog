import * as actionTypes from './constant';
import { getArchiveList } from '@/service/archive';

const changeArchiveListAction = archiveList => ({
	type: actionTypes.CHANGE_ARCHIVE_LIST,
	archiveList
})

export const getArchiveListAction = () => {
	return dispatch => {
		getArchiveList().then(res => {
			dispatch(changeArchiveListAction(res))
		})
	}
}