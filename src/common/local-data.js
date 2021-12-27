import React from 'react'
import {
  HomeOutlined,
  BookOutlined,
  InstagramOutlined,
  MessageOutlined,
	FieldTimeOutlined,
	TeamOutlined
} from '@ant-design/icons'

export const headerLinks = [
  {
    title: '首页',
    link: '/home',
    icon: <HomeOutlined />
  },
  {
    title: '文章',
    link: '/article',
    icon: <BookOutlined />
  },
  {
    title: '照片墙',
    link: '/photo',
    icon: <InstagramOutlined />
  },
  {
    title: '留言板',
    link: '/message',
    icon: <MessageOutlined />
  },
  {
    title: '归档',
    link: '/time',
    icon: <FieldTimeOutlined />
  },
  {
    title: '登录/注册',
    link: '/login',
    icon: <TeamOutlined />
  }
]

export const avatarList = [
  'https://s2.loli.net/2021/12/09/wKgIbHG983LNZl1.png',
  'https://s2.loli.net/2021/12/09/HE3Fa2cAypoYk6C.png',
  'https://s2.loli.net/2021/12/09/ucjeLR1zH83p5b9.png',
  'https://cdn.learnku.com/uploads/images/201710/30/1/TrJS40Ey5k.png'
]
