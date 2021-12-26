import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import { getArchiveListAction } from './store/actionCreator'
import { formatUtcString } from '@/utils/format'
import { TimeWrapper } from './style'

export default memo(function Time() {
  const dispatch = useDispatch()

  const { archiveList } = useSelector(
    state => ({
      archiveList: state.getIn(['archive', 'archiveList'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getArchiveListAction())
  }, [dispatch])
  return (
    <TimeWrapper>
      <Timeline mode="alternate" pending="Get 技能中..." reverse>
        {archiveList?.map((item, index) => {
          return (
            <Timeline.Item
              key={item.id}
              className="timeline"
              dot={index % 2 === 0 && <ClockCircleOutlined style={{ fontSize: '16px', color: 'red' }} />}
              color="rebeccapurple"
            >
              <div className="title">{item?.title}</div>
              <div className="content">{item?.content}</div>
              <img src={item?.image} alt="" />
							<div className="time">{formatUtcString(item.createAt)}</div>
            </Timeline.Item>
          )
        })}
      </Timeline>
    </TimeWrapper>
  )
})
