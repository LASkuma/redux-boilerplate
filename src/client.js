import React from 'react'
import { render } from 'react-dom'
import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import { Provider } from 'react-redux'

// Your app's reducer and routes:
import createRoutes from './routes/root'
import { configureStore } from './store'

const initialState = window.INITIAL_STATE || {}

// Set up Redux (note: this API requires redux@>=3.1.0):
const store = configureStore(initialState)
const { dispatch } = store
const { pathname, search, hash } = window.location
const routes = createRoutes(store)

// Render app with Redux and router context to container element:
render((
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('root'))
