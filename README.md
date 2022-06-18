# ReelGolf

## Installation

##### Basics (ENV: Local)
Download and clone this repository using
This project was developed
```
git clone https://github.com/HIOMedia/reelgolf.com
```
Install dependencies with:
```
npm install
```
Finally, run this project using:
```
npm run dev
```

---
##### Run different environments
To avoid Git converting from LF to CRLF, run the following commands:
```shell
git config --global core.autocrlf false
git config --global core.eol lf
git rm --cached -r .
git reset --hard
```
---
##### Run different environments
Next Boilerplate has support for many different environments right now and running this project with ```npm run dev``` will only deploy a development version in your browser.
You can set an environment variable for any of these before running ```npm run dev``` command
```
SET REACT_APP_ENVIRONMENT=local
SET REACT_APP_ENVIRONMENT=qa
SET REACT_APP_ENVIRONMENT=production
```
If needed, you can change some of the following configurations in any ```env-{NAME}.json``` file located at ```/config/settings```

- Any of the microservices root URL
- Service Mocker configuration
- Redux middleware configuration
- Mocked third party APIs authorizations *(Please, don't leave any of these keys in your production deployment)*

##### Build
For building this code you can simply run
```
npm run build
```

This will generate your production files in ```./build``` folder. Then, you can use any HTTP server to see it or deploy it.

We suggest using npm ```http-server``` for checking the status of the build before deployment.

```
npx http-server ./build

```

##### Avaliable Scripts

React Boilerplate has many other scripts that are pretty helpful for any Dev Team.

- ```lintj``` - You can use this for checking if any change in the code is syntactically correct according to the project's structure.

- ```test``` - this script is related to QA suite, it'll help you to run Unit Tests implemented for this project and collecting the coverage of the tested code.

- ```storybooks``` - This script will run a new server in ```localhost:6006``` with documentation related to components implemented in this project (Atoms, Organisms and Templates).
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create Next App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


---

# Production notes

Written originally by Patrick Paul on 2022/06/08.

## Production deployment

Configure AWS EB CLI:

```
pip install awsebcli

eb init
```

Deploy to environment like `reelgolf-cms-sandbox`:

```
eb use reelgolf-cms-sandbox

# monitor log until ^C
eb deploy

# do not monitor long
eb deploy --nohang
```

*IMPORTANT*: Beanstalk only uses committed work by default.

You can deploy staged work (e.g. when messing with `.ebextensions/` config files) like so:

```
git add .
eb deploy --staged
git reset HEAD --
```

## Production SSH

Obtain the project's shared SSH keypair, or perform:

```
eb ssh --setup
```

Then to SSH inside EC2 instance:

```
eb ssh
```

## Deployment errors

Generally, errors are logged to `eb-engine.log` and can also be found in AWS CloudWatch at a log group named like `/aws/elasticbeanstalk/reelgolf-cms-sandbox/var/log/eb-engine.log`.

You can also SSH during deployment using above information.

## Initial Elastic Beanstalk setup notes

1. Start with the Node.js platform "Sample Application" project
2. Deploy Beanstalk (wait...)
3. Re-configure Beanstalk:
    a. Load Balancer: Add listener port 443 using [correct security policy bundle for application-type load balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies)
    b. Add a PostgreSQL database v14.x+ (and ensure de-couple on delete is selected for production)
    c. Do not include in a VPC (use default VPC and automatically created RDS sec. groups)
    d. Add the `shared@touchto.io` SSH keypair for accessing EC2 instances
    e. Set the env vars (see `.env.template` for what is required, e.g. `NODE_ENV`, `JWT_SECRET`, etc.)
    f. Set appropriate instance size (Strapi requires a lot of memory so `t2.medium` is suggested)
    g. Ignore health check (for future deployments)
    h. Enable Log Streaming to Cloudwatch (7 day retention)
4. Deploy Beanstalk (wait...)
5. Add a Route53 `A` record which is alias to the Beanstalk URL (e.g. `cms-dev.reelgolf.com`)
6. Deploy CMS app using above deployment instructions
7. Enter RDS database and enable delete protection (if working with production)
8. [Enable Application version lifecycle management](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-lifecycle.html) to automatically delete 51st+ versions so that old versions don't consume cloud disk space