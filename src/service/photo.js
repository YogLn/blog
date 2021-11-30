/*
 * @Author: your name
 * @Date: 2021-11-30 17:51:11
 * @LastEditTime: 2021-11-30 17:53:54
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /blog/src/service/photo.js
 */
import request from './request';

export function getPhotoList(offset = 0, size = 10) {
	return request({
		url: `photo`,
		params: {
			offset,
			size
		}
	})
}