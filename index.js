'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const https_options = {

};

app.set('port', process.env.PORT || 3001);
app.set('ports', process.env.PORT || 3000);

require('mongoose-middleware').initialize(mongoose)
// SET MANDRILL_API_KEY
process.env.MANDRILL_API_KEY = 'GzR7luc-BGxLd-7f_fzUBw'

mongoose.Promise = global.Promise
mongoose.connect(config.db, { useMongoClient: true }, (err, res) => {
  if (err) {
    return console.log(`Error. Not found  BD: ${err}`)
  }
  console.log('Connected to DB')


  const httpServer = http.createServer(app);
  httpServer.listen(app.get('port'), () => {
    console.log(` ${new Date()} : ---------------------------------------------------`);
    console.log(` ${new Date()} : SERVER NODEJS-EXPRESS [http] listening  at port ${app.get('port')}`);
  });

  // starting server https
  const httpsServer = https.createServer(https_options, app);
  httpsServer.listen(app.get('ports'), () => {
    console.log(` ${new Date()} : SERVER NODEJS-EXPRESS  [https] listening  at port ${app.get('ports')}`);
  });
})
