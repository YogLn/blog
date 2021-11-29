import React from 'react'
import { Route  } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/home'))
const Article = React.lazy(() => import('@/pages/article'))
const About = React.lazy(() => import('@/pages/about'))
const Message = React.lazy(() => import('@/pages/message'))
const Photo = React.lazy(() => import('@/pages/photo'))
const Login = React.lazy(() => import('@/pages/login'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Route path='/home' element={<Home/>} />
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/article',
    component: Article
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
