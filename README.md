
## TECH Stack
  
  ### Frontend Technologies
 - **React.js Framework**  - For the Frontend Webapp Design.
 - **React-toaster** - For the toast notifications used for displaying success and errors occured.
 - **Reactjs-popup** - For Creating the popup for selecting the options.
 - **React-Router-Dom** - To implement dynamic routing in a yoga app.

  ### Backend Technologies
  - **Express.js**  - For creating and managing servers and route.
  - **cors** - To implement the cross server origin requests on the webapp.
  - **mysql** - For connecting and executing the queries on the backend.
  - **dotenv** - To create envirnment varaibles which hold sensitive data like API keys , passwords etc.
  
  ## Functionalities
   - Users can create an account or existing users can login function
   - When clicked on register it will take the user to registration page where user have to provide details in the form (The form contains basic validations for the data being filled in).
   - When succesfull an floating message (react toast message) would be shown at the top informing the user that account has been succesfully created.
   - The user is redirected to the profile section page which contains an profile card having the details of the user.
   - The user here can change the Batch timing and renew its membership (assuming the membership s going to expire soon and the batch timing can be changed at that time).
   - When trying to login the user is asked with email and password used at the time of registration . The email contains basic regex validation for correct input at frontend. If the credentials entered by the user is wrong an error message is shown at the top containg the error message (also generated using react hot toast).

  ## Deployment Instruction
   - Clone the Repo to the system.
   - In the frontend directory (assuming the system has node.js configured) run the command in sequence. 
   ```
   npm install
   
   npm run
   ```
   - Above command will install all the dependencies (10 - 15 min depends on the system) and run the webapp on the localhost
   - Now for the backend the **Mysql Server** should be install and have tables **person** and **membership** , assuming that the tables and **Mysql service** is running replace the Host , database, password, user in the index.js file and to run the server and install dependencies run the following
   ```
   npm install
   
   npm start
   ```
  ## Images   
   
  ![image](https://user-images.githubusercontent.com/63805002/207304932-c9a1c334-8667-4d54-a282-5daa2ee308b5.png)
  ![image](https://user-images.githubusercontent.com/63805002/207307322-ffb9ed14-45dc-4906-ae78-a37040a4afff.png)
  ![image](https://user-images.githubusercontent.com/63805002/207307522-c181101a-a030-4ca9-a7f6-3793187954ad.png)
  ![image](https://user-images.githubusercontent.com/63805002/207307673-07ff99df-7d1f-46ea-955c-319a57e791ea.png)


