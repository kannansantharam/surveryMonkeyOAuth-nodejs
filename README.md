# surveryMonkeyOAuth-nodejs
SurkeyMonkey OAuth using axios (NodeJS app)


Redirect the users to this URL (replace the client id and redirect URL)
https://api.surveymonkey.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:3000/auth/callback&client_id={{client_id}}


This will take the user to login page, after successfull authorization surveyMonkey will provide a code and it will hit the callback URL. (http://domain.com/auth/callback).


Use the code along with other parameters (clientid, secret etc) to get the access token.

