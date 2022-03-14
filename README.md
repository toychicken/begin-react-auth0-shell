# begin-react-auth0-shell
Trying to make a simple Begin.com / architect / create-react-app / auth0 boilerplate app


## What I did

### Install begin, and make sure it's running

You can't currently 'just init' Begin - because it's "not a thing". What you're actually doing is creating an [Architect](https://arc.codes) project, with some extra toppings.

**The environment**

```
node -v
// v16.14.0`
```

I installed @architect

```
npm i -g @architect/architect
...
arc version
// Version: Architect 10.1.0

```

**Setup Auth0 Tenant**

Followed steps from [this article](https://blog.begin.com/posts/2022-01-20-auth0-todo-app)

* Created a new tenant
* Created application as 'Regular web app' (not SPA)
* Added callback Urls `http://localhost:3333/callback`
* Added Logout Url `http://localhost:3333` (no trailing slash)

**Made an .env file**

It looks like:

```dotenv
AUTH0_BASE_URL=http://localhost:3333
AUTH0_ISSUER_BASE_URL=https://<name-of-your-tenant>.<region-you-selected>.auth0.com
AUTH0_CLIENT_ID=get-from-auth0-dashboard
AUTH0_CLIENT_SECRET=get-from-auth0-dashboard
```

**NB** 

Had to use `npm install node-fetch@2` (v2) because you can't mix commonJS & ES modules

## Resources used to get here

[https://blog.begin.com/posts/2022-01-20-auth0-todo-app]


### Thoughts on how to do stuff

Use SPA param - [https://arc.codes/docs/en/reference/runtime-helpers/node.js#parameters]
