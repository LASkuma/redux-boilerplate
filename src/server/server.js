import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.config.dev'

import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'

import renderFullPage from './utils/renderFullPage'

const devMode = process.env.NODE_ENV == 'development'
const port = process.env.PORT || 3000
const server = global.server = express()

server.disable('x-powered-by')
server.set('port', port)
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cookieParser())
server.use(compression())

if (devMode) {
  server.use(morgan('dev'))
  const compiler = webpack(config)
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: true,
      modules: false,
    }
  })
  server.use(middleware)
  server.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))
}

server.get('*', (req, res) => {
  res.status(200).send(renderFullPage())
})

server.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

module.exports = server
