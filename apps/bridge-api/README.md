## To test locally on Linux:

```bash
yarn nx deploy bridge-api && docker build -t bridge -f tools/cicd/bridge.Dockerfile dist/apps/bridge-api/ && docker run --rm -it bridge
```
