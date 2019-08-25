const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '.env.local') });
dotenv.config({ path: path.resolve(__dirname, '.env') });

const bundler = new Bundler('src/public/index.html', {
  cache: false,
});

const app = express();

app.use(
  '/api',
  proxy({
    target: process.env.WEBPACK_DEV_API,
    changeOrigin: true,
  }),
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234));
