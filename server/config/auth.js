//Authentication modules
var jwt = require('express-jwt');
var jwksRsa = require('jwks-rsa');
var environment = require('./environment');
// Set up Auth0 configuration
const authConfig = {
    domain: "dev-3mntwbjz.auth0.com",
    audience: environment.backUrl
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-3mntwbjz.auth0.com
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
});

module.exports = checkJwt;
  