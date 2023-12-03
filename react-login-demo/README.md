### Introduction

This folder have series of examples to demonstrate react authentication feature. Series of these example follows this [youtube tutorial series](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd)

### [Example 1](https://www.youtube.com/watch?v=brcHK3P6ChQ&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=1)

This example demonstrates

- React user registration form with client side validations
- Making REST API call to backend authentication server to register new user.
- Code asset for this example [original repo](https://github.com/gitdagray/react_register_form) and [forked repo](https://github.com/dmohindru/react_register_form)

### [Example 2](https://www.youtube.com/watch?v=X3qyxo_UTR4&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=2)

This example demonstrates

- React user login form
- Getting auth token from backend authentication server
- Code asset for this example [original repo](https://github.com/gitdagray/react_login_form) and [forked repo](https://github.com/dmohindru/react_login_form)

### [Example 3](https://www.youtube.com/watch?v=oUZjO00NkhY&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=3)

This example demonstrates

- How to use react router dom library.
- Implement protected routes in react app.
- Protect routes on the basis of user roles
- Code asset for this example [original repo](https://github.com/gitdagray/react_protected_routes) and [forked repo](https://github.com/dmohindru/react_protected_routes)

### [Example 4](https://www.youtube.com/watch?v=nI8PYZNFtac&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=4)

This example demonstrates

- How to get new access token on its expiry using refresh token and refresh token endpoint.
- Code asset for this example [original repo](https://github.com/gitdagray/react_jwt_auth) and [forked repo](https://github.com/dmohindru/react_jwt_auth)

### [Example 5](https://www.youtube.com/watch?v=27KeYk-5vJw&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=5)

This example demonstrates

- How to presist login across hard refresh of page.
- Store presisted login info to localStorage according to user preferences.
- Code asset for this example [original repo](https://github.com/gitdagray/react_persist_login) and [forked repo](https://github.com/dmohindru/react_persist_login)

### [Example 6](https://www.youtube.com/watch?v=eQrbjvn_fSc&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=6)

This example demonstrates

- How to presist login accross hard refresh of page.
- This example enhances [example 5](#example-5) to presist user login to localStorage using react hooks.
- Code asset for this example [original repo](https://github.com/gitdagray/react_login_hooks) and [forked repo](https://github.com/dmohindru/react_login_hooks)

### [Example 7](https://www.youtube.com/watch?v=3QaFEu-KkR8&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=7)

This example demonstrates

- What are the best practices for react authentication flow.
- Extract necessary data from jwt token and not to store uneccessary data in an app
- Code asset for this example [original repo](https://github.com/gitdagray/react_login_hooks) and [forked repo](https://github.com/dmohindru/react_login_hooks)

### [Example 8](https://www.youtube.com/watch?v=-JJFQ9bkUbo&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=8) --- very important

This example demonstrates

- How to use redux in authentication flow
- Use latest redux rtk query to fetch auth and refresh token
- How to configure rtk query to refetch access token on its expire
- Code asset for this example [original repo](https://github.com/gitdagray/redux_jwt_auth) and [forked repo](https://github.com/dmohindru/redux_jwt_auth)

### [Example 9](https://www.youtube.com/watch?v=pAzqscDx580&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=9)

This example demonstrates

- How to use external identity provider [Auth0](https://auth0.com/) to implement login system in react app
- Code asset for this example [original repo](https://github.com/gitdagray/react_login_auth0) and [forked repo](https://github.com/dmohindru/react_login_auth0)

### Code along exercises

- [reactjs login demo ts version and bit broken](./react-authentication-tutorial/)
- [reactjs auth flow using redux toolkit](./react-redux-authentication-tutorial/)
- [reactjs auth flow using auth0](./react-authentication-oauth0/)
- [supporting backend app for react examples](./nodejs_jwt_auth-main/)

### Note

All the demos in this folder will be supported by this [backend application](./mongo_async_crud_backend/). This backend is downloaded from this [github repo](https://github.com/gitdagray/nodejs_jwt_auth)

Instruction to run this backend. First
[install mongodb on ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04-source)

Start mongodb

```shell
sudo systemctl start mongod.service
```

Check mongodb running status

```shell
sudo systemctl status mongod
```

Check connection status of mongodb

```shell
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

Enable MongoDB on startup

```shell
sudo systemctl enable mongod
```

export enviornment variable connection string used by backend

```shell
export DATABASE_URI="mongodb://127.0.0.1:27017"
export ACCESS_TOKEN_SECRET='dhruv12345'
export REFRESH_TOKEN_SECRET='dhruv12345'
```
