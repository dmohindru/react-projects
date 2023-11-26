### Introduction

This folder have series of examples to demonstrate following features

- [reactjs user registartion demo](./react-authentication-tutorial/)

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
