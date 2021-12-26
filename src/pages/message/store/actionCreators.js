import * as actionTypes from './constant'
import { getMessageList } from '@/service/message'
import { getMusicListAPI } from '@/service/music'

const changeMessageListAction = messageList => ({
  type: actionTypes.CHANGE_MESSAGE_LIST,
  messageList
})
const changeMusicListAction = musicList => ({
  type: actionTypes.CHANGE_MUSIC_LIST,
  musicList
})

export const getMessageListAction = (offset, size) => {
  return dispatch => {
    getMessageList(offset, size).then(res => {
      dispatch(changeMessageListAction(res))
    })
  }
}
export const getMusicListAction = () => {
  return dispatch => {
    getMusicListAPI().then(res => {
      dispatch(changeMusicListAction(res))
    })
  }
}
