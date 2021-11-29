import * as actionTypes from './constants';
import { getArticleDetail } from '@/service/article';

export const getArticleDetailAction = (id) => {
	return dispatch => {
		getArticleDetail(id).then(res => {
			console.log(res);
		})
	}
}