import React, { memo, useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { headerLinks } from '@/common/local-data.js'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function Header() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const showSelectItem = (item, index) => {
    if (index !== 4) {
      return (
        <NavLink to={item.link}>
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
                  className={
                    classNames('select-item', { active: index === currentIndex })
                  }
                  key={item.link}
                  onClick={e => setCurrentIndex(index)}
                >
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  )
})
