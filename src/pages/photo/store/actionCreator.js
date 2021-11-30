/*
 * @Author: your name
 * @Date: 2021-11-30 17:50:35
 * @LastEditTime: 2021-11-30 18:08:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/pages/photo/store/actionCreator.js
 */
import * as actionTypes from './constant';
import { getPhotoList } from '@/service/photo';

const changePhotoListAction = photoList => ({
	type: actionTypes.CHANGE_PHOTO_LIST,
	photoList
})

export const getPhotoListAction = (offset, size) => {
	return dispatch => {
		getPhotoList().then(res => {
			dispatch(changePhotoListAction(res))
		})
	}
}