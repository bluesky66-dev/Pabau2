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

1. Install Node 14 LTS (Opt in for the extra build tools)
1. Install yarn: `npm i -g yarn` (`yarn --version` \>=1.22.10 && <2 is fine)
1. Ensure your terminal is BASH (cmd and PS not supported. Vscode: `"terminal.integrated.shell.windows": "c:/program files/git/bin/bash.exe",`)

### Storybook
Any component that is likely to be needed on other pages, such as a table, button, heading, avatar, etc, should live in `/libs/ui/`. Each component in here should be exposed as a Storybook item, and is visible on [https://storybook.new.pabau.com](https://storybook.new.pabau.com) or run `yarn run nx run ui:storybook` to develop on it locally with live reloading.

To create a new component, such as "Button", do the following:
1. `yarn run nx g @nrwl/react:component --project=ui --style=less --export --pascalCaseFiles --name=Button`

### Frontend
To view the Frontend, you can either visit [https://prelive-crm.new.pabau.com](https://prelive-crm.new.pabau.com) or run `yarn start` to develop on it locally with live reloading.

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

## Our Stack

* [Hasura](https://hasura.io/) - used as our ORM layer, provides websocket push notifications
* [Postgres](https://www.postgresql.org/) - the underlying SQL database that sits behind Hasura
* Backend uses [NestJS](https://nestjs.com/) (and converted to Vercel's [Serverless Functions](https://vercel.com/docs/serverless-functions/introduction) at deploy-time)
* [TypeScript](https://www.typescriptlang.org/) - strong-typing is key to team success within DDD paradigm
* [ant.design](https://ant.design/) - the base for most of our UI components
* [eslint](https://eslint.org/) / [prettier](https://prettier.io/) - auto-cleans your code on save
* [Vercel](https://vercel.com/) - Our hosting platform (except for hasura, which is on our [Rancher](https://rancher.com/) self-hosted platform)
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) - modern React using Functional Programming principles
* [NextJS](https://nextjs.org/) - frontend framework that uses React  
* [LESS Modules](https://webpack.js.org/loaders/less-loader/#css-modules-gotcha) - our CSS language of choice 
* [Apollo Client 3](https://www.apollographql.com/docs/react/) - client-side database access layer
* [Formik](https://formik.org/) - handles any \<form> we need
* [Storybook](https://storybook.js.org/) - for previewing our UI component library
* [LogEntries](https://logentries.com/) - a legal vault where we track changes to data
* [Sentry](https://sentry.io/for/react/) - production app error logging and reporting
* [Figma](https://www.figma.com/) - pre-JSX designs/specifications
* [Husky](https://github.com/typicode/husky#readme) - pre-commit and pre-push hooks to ensure no errors exist in code

## To do (big engineering items)

* Apollo persisted queries
* Apollo local state
* Apollo getfromtree
* Ant design babel import loader
* Convert from 'next export' to full on next server with ssr (i'm not sure)
* Fix 'vercel dev' for backend project
* Playroom
* Apollo Typed Documents
* local dev env for hasura, migrations

