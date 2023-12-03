### Introduction

This folder have series of examples to demonstrate react authentication feature. Series of these example follows this [youtube tutorial series](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd)

### [Example 1](https://www.youtube.com/watch?v=brcHK3P6ChQ&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=1)

This example demonstrates

- React user registration form with client side validations
- Making REST API call to backend authentication server to register new user.
- Code assert for this example [original repo](https://github.com/gitdagray/react_register_form) and [forked repo](https://github.com/dmohindru/react_register_form)

### [Example 2](https://www.youtube.com/watch?v=X3qyxo_UTR4&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=2)

This example demonstrates

- React user login form
- Getting auth token from backend authentication server
- Code assert for this example [original repo](https://github.com/gitdagray/react_login_form) and [forked repo](https://github.com/dmohindru/react_login_form)

### [Example 3](https://www.youtube.com/watch?v=oUZjO00NkhY&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=3)

This example demonstrates

- How to use react router dom library.
- Implement protected routes in react app.
- Protect routes on the basis of user roles
- Code assert for this example [original repo](https://github.com/gitdagray/react_protected_routes) and [forked repo](https://github.com/dmohindru/react_protected_routes)

- [reactjs login demo ts version and bit broken](./react-authentication-tutorial/)
- [reactjs auth flow using redux toolkit](./react-redux-authentication-tutorial/)

### Note

All the demos in this folder will be supported by this [backend application](./mongo_async_crud_backend/). This backend is downloaded from this [github repo](https://github.com/gitdagray/mongo_async_crud)

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
