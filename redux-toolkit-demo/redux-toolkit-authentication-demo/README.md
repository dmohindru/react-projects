# Introduction

This application demonstrates how to use [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) to make api call for CRUD operation. This application uses advanced feature like [Entity Adapter](https://redux-toolkit.js.org/usage/usage-with-typescript#createentityadapter) to store normalized data in an application. This is a follow up demo to the [previous one](../redux-toolkit-entity-adapter-demo/) which uses authentication flow in redux rtk toolkit based application.

# Instruction

This demo will be the running against [this jwt based protected server](../fake-api-jwt-json-server/)

> Start Authenticated DB Server

```shell
cd ../fake-api-jwt-json-server/
npm run start-auth
```

> Start Application

```shell
npm run start
```
