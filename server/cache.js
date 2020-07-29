const redis = require('redis');
const config = require('../config');

var client = redis.createClient(config.REDIS_PORT, config.REDISCACHEHOSTNAME,
  {auth_pass: config.REDISCACHEKEY, tls: {servername: config.REDISCACHEHOSTNAME}});


client.on("error", function(error) {
    console.error('There was an error:', error);
  });
client.on('ready', function() {
    console.log('redis is running');
});


module.exports.client = client;
