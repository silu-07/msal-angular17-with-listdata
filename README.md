# How to make this working?

###  Install json-server and run
- npm install json-server
- json-server --watch db.json

### Update environment values 
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
