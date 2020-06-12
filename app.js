const express = require('express');
const app = express();
const favicon = require('express-favicon');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Hello, world!</title>
</head>
<body>
   <h1>Hello, world!</h1>
</body>
</html>`;

const faviconPath = __dirname + '/favicon.ico';
console.log(faviconPath);
app.use(favicon(faviconPath));

app.get('/', (request, response) => {
    response.status(200);
    response.send(html);
});

app.listen(8080);