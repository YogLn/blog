import React, { memo, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import { AppWrapper } from './style'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Loading from '@/pages/loading'
import { Provider } from 'react-redux'

export default memo(function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppWrapper>
          <Header />
          <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    </Provider>
  )
})
