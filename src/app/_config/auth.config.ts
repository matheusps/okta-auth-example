/** Config for Okta  */
export const AuthConfig = {
    issuer: 'https://{your_domain}.com/oauth2/default',
    redirectUri: 'http://localhost:4200/implicit/callback',
    clientId: '{client_id}'
};