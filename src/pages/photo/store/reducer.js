/*
 * @Author: your name
 * @Date: 2021-11-30 17:50:43
 * @LastEditTime: 2021-11-30 18:06:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/pages/photo/store/reducer.js
 */

import { Map } from 'immutable';
import * as actionTypes from './constant';
const initState = Map({
	photoList: []
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_PHOTO_LIST:
			return state.set('photoList', action.photoList);
	
		default:
			return state
	}
}

export default reducer
