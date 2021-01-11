# Pabau

## Welcome

This monorepo contains all of our code (with the exception of `/.env`). The monorepo was created by [nx](https://nx.dev). For more information type `yarn run nx`.

### Paths
- `/apps` - where most of our projects reside.
- `/apps/web` - the main application Frontend.
- `/apps/*-e2e` - End-to-end testing with Cypress.
- `/libs` - where any shared libraries reside. These can be referenced (used) in any app.
- `/libs/ui` - our shared UI (React Components).
- `/tools` - repo-level tooling.
- `**/cicd` - devops only.

## Setup

1. Install Node 14 LTS
   1. Opt in for the extra build tools
1. Install yarn: `npm i -g yarn`
   1. `yarn --version` \>=1.22.10 && <2 is fine.
1. Ensure your terminal is posix (cmd and PS not supported)
   1. Windows + Vscode: `"terminal.integrated.shell.windows": "c:/program files/git/bin/bash.exe",`

### Storybook
Any component that is likely to be needed on other pages, such as a table, button, heading, avatar, etc, should live in `/libs/ui/`. Each component in here should be exposed as a Storybook item, and is visible on https://storybook.new.pabau.com or run `yarn run nx run ui:storybook` to develop on it locally with live reloading.

To create a new component, such as "Button", do the following:
1. `yarn run nx g @nrwl/react:component --project=ui --style=less --export --pascalCaseFiles --name=Button`

### Frontend
To view the Frontend, you can either visit https://crm.new.pabau.com or run `yarn start` to develop on it locally with live reloading.

Each Page on the Frontend should use as many components as possible from our Storybook.

To create a new page (route), such as "/marketing/sources", do the following:
1. `yarn run nx g @nrwl/next:page --project=web --style=less --directory marketing sources`
1. add `import { } from '@pabau/ui'` at top and fill in the {} with components you need.

## Code Rules

* Branch from master, PR back to master.
  * Small PR's are good
  * Tag your commits and/or PR with the JIRA issue ID.
* Keep eye on your build pipeline status. If it fails, the onus is on your to make it green.
* Never do `import './MyComponent.less'` - always change it to `import styles from './MyComponent.module.less'`
* Never run your IDE or npm/yarn/npx as root or Administrator.
* Never commit secrets, passwords, or tokens to this repo.
