require('dotenv').config({ silent: true })
const express = require('express')
const middleWarez = require('./index.js')
const port = process.env.PORT || 3000

const app = express()

console.log('auth');
// Initial page redirecting to Github
app.get('/auth', middleWarez.auth)

// Callback service parsing the authorization token
// and asking for the access token
console.log('callback');
app.get('/callback', middleWarez.callback)

console.log('success');
app.get('/success', middleWarez.success)

console.log('index');
app.get('/', middleWarez.index)

app.listen(port, () => {
  console.log("Netlify CMS OAuth provider listening on port " + port)
})
