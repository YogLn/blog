import React, { memo, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import { AppWrapper } from './style'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Provider } from 'react-redux'
import CanvasNest from 'canvas-nest.js';

export default memo(function App() {
  
  // const cn = new CanvasNest(element, {
  //   color: '0,0,255',
  //   opacity: 0.7,
  //   zIndex: -2,
  //   count: 99,
  // });
  
  return (
    <Provider store={store}>
      <HashRouter>
        <AppWrapper>
          <Header />
          <Suspense fallback={<div>page loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
          <Footer />
        </AppWrapper>
      </HashRouter>
    </Provider>
  )
})
