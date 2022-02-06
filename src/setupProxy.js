const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com',
      changeOrigin: true,
    })
  );
};