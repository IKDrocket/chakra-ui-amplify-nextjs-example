# Command Hooks

Command hooks can be used to run custom scripts upon Amplify CLI lifecycle events like pre-push, post-add-function, etc.

To get started, add your script files based on the expected naming convention in this directory.

Learn more about the script file naming convention, hook parameters, third party dependencies, and advanced configurations at https://docs.amplify.aws/cli/usage/command-hooks



```bash

$ amplify init --appId XXXXXX

$ npm install aws-amplify @aws-amplify/ui-react

$ amplify add auth
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Email
 Do you want to configure advanced settings? No, I am done.
✅ Successfully added auth resource chakrauiamplifynextj17dc168d locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```
