### Introduction
Spring boot resource server protected by [Okta](https://oauth0.com)

### Tutorial
-[Spring boot Okta Resource server](https://developer.auth0.com/resources/guides/api/spring/basic-authorization)

### Commands
Get Access Token
```shell
auth0 test token -a https://dev-tjdq4avw0xcms7ni.us.auth0.com/api/v2/ -s openid
```

Build Docker Image
```shell
./scripts/dokcer-build.sh
```

Push Docker Image
```shell
docker push dmohindru/wisecrack-api:latest
```

Run docker image with different profiles
```shell
docker run -e SPRING_PROFILES_ACTIVE=cluster1 -p 8081:8081 dmohindru/wisecrack-api:latest
docker run -e SPRING_PROFILES_ACTIVE=cluster2 -p 8081:8081 dmohindru/wisecrack-api:latest
```

