if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes(store) {
  return {
    path: 'counter',
    getComponents(location, cb) {
      require.ensure([
          './container',
          './reducer',
        ], (require) => {
          let CounterPage = require('./container').default
          let counterReducer = require('./reducer').default
          injectAsyncReducer(store, 'counter', counterReducer)
          cb(null, CounterPage)
        });
    },
  };
}
