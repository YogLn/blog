import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getMessageListAction } from './store/actionCreators';
import MessageTheme from '@/components/message-theme';
import { MessageWrapper } from './style';

export default memo(function Message() {
	const dispatch = useDispatch()
	const { messageList } = useSelector(state => ({
		messageList: state.getIn(['message', 'messageList'])
	}),shallowEqual)

	useEffect(() => {
		dispatch(getMessageListAction(0, 10))
	}, [dispatch])
	return (
		<MessageWrapper className="wrap-v2">
			{
				messageList.map(item => {
					return <MessageTheme info={item} key={item.id} />
				})
			}
		</MessageWrapper>
	)
})
