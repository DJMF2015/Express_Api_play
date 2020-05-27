const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

//https://financialmodelingprep.com/api/v3
const financials = [
  {"ticker" : "BRKA",
  "changes" : 1188.0,
  "price" : "263094",
  "changesPercentage" : "(+0.45%)",
  "companyName" : "Berkshire Hathaway Inc."
}, {
  "ticker" : "BRK-A",
  "changes" : 1188.0,
  "price" : "263094",
  "changesPercentage" : "(+0.45%)",
  "companyName" : "Berkshire Hathaway Inc."
}, {
  "ticker" : "MLTRA.PA",
  "changes" : 400.0,
  "price" : "2640",
  "changesPercentage" : "(+17.86%)",
  "companyName" : "Compagnie des Tramways de Rouen"
}, {
  "ticker" : "DTYS",
  "changes" : 108.223,
  "price" : "120",
  "changesPercentage" : "(+918.90%)",
  "companyName" : "iPath US Treasury 10-year Bear ETN"
}, {
  "ticker" : "CABO",
  "changes" : -59.77,
  "price" : "1776",
  "changesPercentage" : "(-3.26%)",
  "companyName" : "Cable One Inc."
}, {
  "ticker" : "KOKU",
  "changes" : 55.0417,
  "price" : "55.0417",
  "changesPercentage" : "(0%)",
  "companyName" : "Xtrackers MSCI Kokusai Equity ETF"
}, {
  "ticker" : "DTO",
  "changes" : -40.79,
  "price" : "56.21",
  "changesPercentage" : "(-42.05%)",
  "companyName" : "DB Crude Oil Double Short ETN due June 1 2038"
}, {
  "ticker" : "ARGX.BR",
  "changes" : 37.6,
  "price" : "184.2",
  "changesPercentage" : "(+25.65%)",
  "companyName" : "argenx SE"
}, {
  "ticker" : "BKNG",
  "changes" : 35.62,
  "price" : "1631.3",
  "changesPercentage" : "(+2.23%)",
  "companyName" : "Booking Holdings Inc."
}, {
  "ticker" : "SHOP.TO",
  "changes" : 33.66,
  "price" : "1187.98",
  "changesPercentage" : "(+2.92%)",
  "companyName" : "Shopify Inc."
} ]

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(bodyParser.json());

const stocksRouter = createRouter(financials);
app.use('/api/financials', stocksRouter);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
