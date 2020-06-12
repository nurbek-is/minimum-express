//The first two lines load in the express module and use it to create the app object.*
const express = require('express');
const app = express();
//We then create our html variable to hold the HTML code of our Hello-world page.
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
//use the get() method of the app object to handle routing.
// A.argument is the path that is requested by the client.
// B.The second argument is a callback function that gets called as a result of this request. 
// Our function simply responds with the status, which will be sent with the header, 
// and the HTML stored in our html variable, which will be sent as the response body.

app.get('/', (request, response) => {
    response.status(200);
    response.send(html);
});

app.listen(8080);

//*Technically, both express and app are functions, and functions in JavaScript are first-class objects,
//  so they can have their own methods.