import React from 'react'
import { Redirect  } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/home'))
const Article = React.lazy(() => import('@/pages/article'))
const ArticleDetail = React.lazy(() => import('@/pages/article-detail'))
const About = React.lazy(() => import('@/pages/about'))
const Message = React.lazy(() => import('@/pages/message'))
const Photo = React.lazy(() => import('@/pages/photo'))
const Login = React.lazy(() => import('@/pages/login'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect path='/home' element={<Home/>} />
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/article',
    exact: true,
    component: Article
  },
  {
    path: '/article/detail/:id',
    component: ArticleDetail
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/photo',
    component: Photo
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
