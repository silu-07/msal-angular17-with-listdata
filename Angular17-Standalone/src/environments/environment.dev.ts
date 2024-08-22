export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '34de5cc9-b1ce-4355-a051-6c3d2de0cb0d',
            authority: 'https://login.microsoftonline.com/ae3145ca-fe36-494d-8095-d08fd421505d'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};
