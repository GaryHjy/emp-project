module.exports = ({config}) => {
  const port = 8080
  config.devServer.port(port)
  config.resolve.alias.set('@', resolveApp('./src'))
}
