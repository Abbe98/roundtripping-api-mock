var http = require('http');
var mockserver = require('mockserver');

http.createServer(mockserver('mocks')).listen(9001);
console.log('Mock server running at localhost port 9001')
