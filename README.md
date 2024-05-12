![](https://github.com/ryannninodizon/msal-angular17-with-listdata/blob/main/banner.png)

# How to make this working?

This template is based on the official MSAL JavaSscript template: [msal-angular](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular "msal-angular")

###  Install json-server and run
- npm install json-server
- json-server --watch db.json

### Update environment values 
You have to get the **ClientId** and **TenantId** from the App Registration page and update this file: 
> Angular17-Standalone/src/environments/environment.dev.tsAngular17-Standalone/src/environments/environment.dev.ts

   ```json
 msalConfig: {
        auth: {
            clientId: <client-id>,
            authority: 'https://login.microsoftonline.com/<tenant-id>'
        }
    }
```
If you don't know where to get the clientId and TenantId, you can watch my YouTube video: [How to use the Microsoft Identity Platform with Angular Application](https://youtu.be/QZnX_KXTpfI "How to use the Microsoft Identity Platform with Angular Application")

### Install Angular dependencies and run
- npm install
- ng start


# Screenshots

#### Profile page
![](https://github.com/ryannninodizon/msal-angular17-with-listdata/blob/main/Screenshots/profile-page.JPG)

#### Details page
![](https://github.com/ryannninodizon/msal-angular17-with-listdata/blob/main/Screenshots/details-page.JPG)
