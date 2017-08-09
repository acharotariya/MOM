var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SOCKET_IO: '"http://localhost:3030"',
  USER_AUTH: '"http://ec2-34-229-146-53.compute-1.amazonaws.com"',
  USER_DETAIL: '"http://162.242.223.167:3002"',
  COPY_URL_PATH: '"http://localhost:3000"'
})
