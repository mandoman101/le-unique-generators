const http = require('http');
const requestIp = require('request-ip');
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ]
});

const server = http.createServer((req, res) => {
    const clientIp = requestIp.getClientIp(req);
    logger.info({
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
        clientIp: clientIp
    });

    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
