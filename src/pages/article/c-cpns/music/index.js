import React, { memo, useState, useRef, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import {
  PlayCircleTwoTone,
  LeftCircleTwoTone,
  RightCircleTwoTone,
  PauseCircleTwoTone
} from '@ant-design/icons'
import { getPlaySong } from '@/utils/play'
import { MusicWrapper } from './style'
import { useCallback } from 'react'

export default memo(function Music() {
  const [play, setPlay] = useState(false)
  let [index, setIndex] = useState(0)
  const { playList } = useSelector(
    state => ({
      playList: state.getIn(['article', 'playList'])
    }),
    shallowEqual
  )
  let [currentSong, setCurrentSong] = useState(playList[index])
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.src = getPlaySong(playList[index]?.id)
  }, [])

  const changeIndex = tag => {
    if (tag === 'left') {
      let newIndex = index - 1
      if (newIndex < 0) {
        newIndex = 4
      }
      setIndex(newIndex)
      setCurrentSong(playList[newIndex])
      audioRef.current.src = getPlaySong(playList[newIndex]?.id)
      audioRef.current.play().then(res => {
        setPlay(true)
      }).catch(err => {
        console.log(err);
      })
    } else {
      let newIndex = index + 1
      if (newIndex > 4) {
        newIndex = 0
      }
      setIndex(newIndex)
      setCurrentSong(playList[newIndex])
      audioRef.current.src = getPlaySong(playList[newIndex]?.id)
      audioRef.current.play().then(res => {
        setPlay(true)
      }).catch(err => {
        console.log(err);
      })
    }
  }

  const handlePlay = useCallback(() => {
    setPlay(!play)
    play ? audioRef.current.pause() : audioRef.current.play()
  }, [play])

  const handleMusicEnded = useCallback(() => {}, [])

  return (
    <MusicWrapper>
      <div className="header">
        <div className="title">
          <PlayCircleTwoTone twoToneColor="#FF0000" />
          <span className="title-name">音乐播放</span>
        </div>
        <a href="http://music.yogln.top">more</a>
      </div>
      <div className="music">
        <div className="left">
          <img src={currentSong?.al?.picUrl} alt="" />
        </div>
        <div className="right">
          <div className="info">
            <div className="music-name">
              {currentSong?.name || ''}
            </div>
            <div className="author">{currentSong?.ar[0]?.name || ''}</div>
          </div>
          <div className="control">
            <LeftCircleTwoTone
              twoToneColor="#395AA8"
              className="left-circle"
              onClick={e => changeIndex('left')}
            />
            {!play ? (
              <PlayCircleTwoTone
                twoToneColor="#395AA8"
                className="center-circle"
                onClick={e => handlePlay()}
              />
            ) : (
              <PauseCircleTwoTone
                twoToneColor="#395AA8"
                className="center-circle"
                onClick={e => handlePlay()}
              />
            )}
            <RightCircleTwoTone
              twoToneColor="#395AA8"
              className="right-circle"
              onClick={e => changeIndex('right')}
            />
          </div>
        </div>
      </div>
      <audio ref={audioRef} onEnded={e => handleMusicEnded()} />
    </MusicWrapper>
  )
})
