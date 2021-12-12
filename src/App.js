import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'
import './utils/clicklove'

import { BackTop } from 'antd'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Loading from '@/pages/loading'
import rocket from '@/assets/img/rocket.png'

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
          <Footer />
          <BackTop>
            <img src={rocket} alt="" style={{width: '50px', height: '50px'}} />
          </BackTop>
        </div>
      </BrowserRouter>
    </Provider>
  )
})
