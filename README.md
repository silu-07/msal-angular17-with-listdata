# How to make this working?

This template is based on the official MSAL JavaSscript template: [msal-angular](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular "msal-angular")

###  Install json-server and run
- npm install json-server
- json-server --watch db.json

### Update environment values 
You have to get the **ClientId** and **TenantId** from the App Registration page. Watch my youtube video how to registration your app to Entra ID
    ````
    msalConfig: {
        auth: {
            clientId: <client-id>,
            authority: 'https://login.microsoftonline.com/<tenant-id>'
        }
    }
    ````

### Install Angular dependencies and run
- npm install
- ng start

Feel free to watch my YouTube video if you want to see how I made the project  [How to use the Microsoft Identity Platform with Angular Application](https://www.youtube.com/watch?v=D9fWa6KOhHg "How to use the Microsoft Identity Platform with Angular Application")

# Screenshots
#### Welcome page
![](https://github.com/ryannninodizon/msal-angular17-with-listdata/blob/main/Screenshots/welcome-pag.JPG)

#### Profile page
![](https://github.com/ryannninodizon/msal-angular17-with-listdata/blob/main/Screenshots/profile-page.JPG)

#### List page
![](https://github.com/ryannninodizon/msal-angular17-with-listdata/blob/main/Screenshots/list-page.JPG)

#### Details page
![](https://github.com/ryannninodizon/msal-angular17-with-listdata/blob/main/Screenshots/details-page.JPG)
