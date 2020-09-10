require('newrelic');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 4003;

app.use('/:id', express.static('public'));

// // Photo Carousel
// app.use('/api/photos/:id', createProxyMiddleware({ target: 'http://13.57.187.79:3003', changeOrigin: true }));

// // Info Sidebar
// app.use('/:copyId/restaurants/:id', createProxyMiddleware({ target: 'http://3.135.211.26/', changeOrigin: true }));

// // Tips & Recommendations
// app.use('/api/tips/:id', createProxyMiddleware({ target: 'http://18.221.151.50:3003/', changeOrigin: true }));
// app.use('/api/articles/:id', createProxyMiddleware({ target: 'http://18.221.151.50:3003/', changeOrigin: true }));

// // Similar Restaurants
// app.use('/restaurants/:id', createProxyMiddleware({ target: 'http://44.235.211.208:3004/', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});