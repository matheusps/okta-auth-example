# Okta Auth Example

### Before run
1. Go to Okta's developers page at: https://developer.okta.com/.
2. Create an account if you do not have one
3. Create an SPA application if you do not have one. 
3. Change the file ./_config/auth.config.ts, with your app's parameters:
```sh
/** Config for Okta  */
export const AuthConfig = {
    issuer: 'https://{your_domain}.com/oauth2/default',
    redirectUri: 'http://localhost:4200/implicit/callback',
    clientId: '{client_id}'
};
```

### Running

This project requires angular-cli to run.
Install the dependencies and devDependencies and start the server.

```sh
$ cd okta-auth-example
$ yarn
$ ng serve
```
Obs.: You can use npm, but use yarn => because it is cooler!... duh!
