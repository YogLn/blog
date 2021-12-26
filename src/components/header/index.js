import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useDarkreader } from 'react-darkreader'
import classNames from 'classnames'

import { headerLinks } from '@/common/local-data.js'
import {
  getArticleListAction,
  getLabelListAction,
  getUserInfoAction,
  getHotListAction
} from '@/pages/article/store'

import { Drawer, Tooltip } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'
import RightSearch from '@/pages/article/c-cpns/right-search'
import Music from '@/pages/article/c-cpns/music'
import RightInfo from '@/pages/article/c-cpns/right-info'
import About from '@/pages/article/c-cpns/about'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function Header() {
  const dispatch = useDispatch()
  const [, { toggle }] = useDarkreader(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  // hooks
  useEffect(() => {
    dispatch(getArticleListAction(0, 5))
    dispatch(getLabelListAction())
    dispatch(getUserInfoAction(8))
    dispatch(getHotListAction())
  }, [dispatch])

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const showSelectItem = (item, index) => {
    return (
      <NavLink to={item.link} onClick={e => onClose()}>
        <i className={item.icon}></i>
        {item.title}
      </NavLink>
    )
  }

  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft onClick={toggle}>
          <Tooltip placement="bottom" title="切换主题">
            <a href="#/" className="logo">
              <span>YogLn</span>
            </a>
            <span className="desc">桃李不言 下自成蹊</span>
          </Tooltip>
        </HeaderLeft>
        <HeaderRight>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div
                  className={classNames('select-item', {
                    active: index === currentIndex
                  })}
                  key={item.link}
                  onClick={e => setCurrentIndex(index)}
                >
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
          <div className="menu" onClick={e => showDrawer()}>
            <MenuFoldOutlined />
          </div>
        </HeaderRight>
      </div>
      <div className="drawer">
        <Drawer
          placement="right"
          onClose={onClose}
          visible={visible}
          width="80%"
          headerStyle={{ backgroundColor: '#FBE8E6' }}
          bodyStyle={{
            fontSize: '16px',
            backgroundImage: `url('https://s2.loli.net/2021/12/04/4ygIYEfKsnBwtUG.png')`,
            objectFit: 'center',
            backgroundPositionX: '-80%'
          }}
        >
          <div className="menu-list">
            {headerLinks.map((item, index) => {
              return (
                <div
                  key={item.link}
                  onClick={e => setCurrentIndex(index)}
                  style={{
                    fontWeight: '600',
                    letterSpacing: '3px',
                    fontStyle: 'oblique',
                    fontFamily: 'Times New Roman'
                  }}
                >
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
          {visible && <RightSearch />}
          {visible && <Music />}
          {visible && <RightInfo />}
          {visible && <About />}
        </Drawer>
      </div>
    </HeaderWrapper>
  )
})
