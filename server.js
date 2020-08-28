
var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = 3000;
var corsOptions = {
    origin: '*',
    credentials: true
};
const axios = require("axios");
const oauth = require("axios-oauth-client");

app.use(cors(corsOptions));
app.get('/auth/callback', async function (req, res) {
    let code = res.req.originalUrl.substring(20, res.req.originalUrl.length);
    try {
        const getAuthorizationCode = oauth.client(axios.create(), {
            url: 'https://api.surveymonkey.com/oauth/token',
            client_secret: 'XXXX',
            code: code,
            grant_type: 'authorization_code',
            client_id: 'YYY',
            redirect_uri: 'http://localhost:3000/auth/callback'
        });

        const auth = await getAuthorizationCode();
        res.status(200).send(auth);
    } catch (er) {
        console.log(er);
        res.status(200).send(er.response.data);
    }
});

app.options('*', cors()); // Enabling Pre Flight Request for all calls.

app.listen(port);
console.log("appilication started");
