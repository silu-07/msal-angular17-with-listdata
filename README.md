# MSAL Angular17 with Listdata display

# Install json-server and run
- npm install json-server
- json-server --watch db.json

# Update environment values 
    ````
    msalConfig: {
        auth: {
            clientId: <client-id>,
            authority: 'https://login.microsoftonline.com/<tenant-id>'
        }
    }
    ````

# Install Angular dependencies and run
- npm install
- ng start
