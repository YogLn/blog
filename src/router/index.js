import React from 'react'
import { Redirect  } from 'react-router-dom'

const Home = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/home'))
const Article = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/article'))
const ArticleDetail = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/article-detail'))
const About = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/about'))
const Message = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/message'))
const Photo = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/photo'))
const Login = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/login'))
const Time = React.lazy(() => import(/*webpackPreFetch: true*/'@/pages/time'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/home' element={<Home/>} />
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
    path: '/time',
    component: Time
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
