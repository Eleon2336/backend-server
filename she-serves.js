const http = require("http");



const server = http.createServer((req, res) => {
    res.setHeader("content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200); //status code HTTP 200 / OK

    let dataObj = {"id": 5648, "name": "Raiden", "email": "raiden@hismail.com"};
    let data = JSON.stringify(dataObj);
    res.end(data);
});




server.listen(1234, () => {
    console.log("listening on port 1234");
})