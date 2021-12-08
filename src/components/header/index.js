import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { headerLinks } from '@/common/local-data.js'

import { Drawer } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'
import RightSearch from '@/pages/article/c-cpns/right-search'
import RightInfo from '@/pages/article/c-cpns/right-info'
import About from '@/pages/article/c-cpns/about'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function Header() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  const showSelectItem = (item, index) => {
    if (index !== 4) {
      return (
        <NavLink to={item.link} onClick={e => onClose()}>
          <i className={item.icon}></i>
          {item.title}
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>
          <i className={item.icon}></i>
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo">
            <span>YogLn</span>
          </a>
          <span className="desc">桃李不言 下自成蹊</span>
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
          bodyStyle={{ fontSize: '16px' }}
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
          <RightSearch />
          <RightInfo />
          <About />
        </Drawer>
      </div>
    </HeaderWrapper>
  )
})
