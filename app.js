require('autoboot')(function(err){
  var config = require('config');

  if (err != null) logger.fatal(err) && process.exit(1);

  var port = config.get('app.port');
  var host = config.get('app.host');

  require('./lib/app').listen(port, host, function(){
    logger.info('app listening at %s:%s', host, port);
  });
});