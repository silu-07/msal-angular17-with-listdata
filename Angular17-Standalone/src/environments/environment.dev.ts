export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: 'c1eed0b4-a59d-46bd-b3ee-416e35abbfa3',
            authority: 'https://login.microsoftonline.com/3e11228a-56f5-450d-9cf1-6283bdb7f12c'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};
