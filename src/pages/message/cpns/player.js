import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import APlayer from 'aplayer'

import {
  getMusicListAction
} from '../store/actionCreators'
import { PlayerWrapper } from './style'

export default memo(function Player() {
  const dispatch = useDispatch()
  const { musicList } = useSelector(
    state => ({
      musicList: state.getIn(['message', 'musicList'])
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getMusicListAction())
  }, [dispatch])

  useEffect(() => {
    new APlayer({
      container: document.querySelector('.player'),
      mini: false,
      autoplay: false,
      theme: '#FADFA3',
      loop: 'all',
      preload: 'auto',
      volume: 0.7,
      mutex: true,
      listFolded: false,
      lrcType: 1,
      audio: musicList
    })
  }, [musicList])

	console.log('object');

  return (
    <PlayerWrapper>
      <div className="player"></div>
    </PlayerWrapper>
  )
})
