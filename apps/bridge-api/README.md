## To test locally on Linux:

```bash
yarn && yarn prisma:generate && yarn nx deploy bridge-api && docker build -t bridge -f tools/cicd/bridge.Dockerfile dist/apps/bridge-api/ && docker run --rm -it -p 4000:4000 bridge
```
