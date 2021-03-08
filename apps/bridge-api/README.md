## To test locally on Linux:

```bash
yarn \
  && yarn prisma:generate \
  && yarn nx deploy bridge-api \
  && docker build --no-cache -t bridge -f tools/cicd/bridge.Dockerfile dist/apps/bridge-api/ \
  && docker run --rm -it -p 4000:4000 bridge
  
  
1. git checkout master && git pull
2. install php/mysql as per other repo
3. cp apps/bridge-api/prisma/.env.SAMPLE .env
4. yarn && yarn bridge:generate


```
