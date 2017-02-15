var http = require('http');

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

var app = require('./config/express')(config);
require('./config/database')(app, config);

http.createServer(app).listen(config.port, config.ip, () => {
	if (config.log !== "disabled"){
		var now = new Date();
		console.log('PersonManager server is running in localhost:' + config.port + '\nStart time: ' + now);
	}
});

module.exports = app;