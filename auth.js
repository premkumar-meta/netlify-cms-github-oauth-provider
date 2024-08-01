const randomstring = require('randomstring')

module.exports = (oauth2) => {
  // Authorization uri definition
  const authorizationUri = oauth2.authorizeURL({
    redirectURI: process.env.REDIRECT_URL,
    scope: process.env.SCOPES || 'repo,user',
    state: randomstring.generate(32)
  })

  console.log('------------------------------------');
  console.log('authorizationUri',authorizationUri);
  console.log('------------------------------------');

  return (req, res, next) => {
    res.redirect(authorizationUri)
  }
}
