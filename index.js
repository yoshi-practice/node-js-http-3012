'use strict';
const http = require('http');
const now = new Date();
const server = http.createServer((req, res) => {
        console.info('[' + now + '] Requested by ' + req.connection.remoteAddress);

        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.write(req.headers['user-agent']);
        res.end();
    }).on('error', (e) => {
        console.error('[' + now + '] Server Error', e);
    })
    .on('clientError', (e) => {
        console.error('[' + now + '] Client Error', e);
    });
const port = 8000;
server.listen(port, () => {
    console.info('[' + now + '] Listening on ' + port);
});