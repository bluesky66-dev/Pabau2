# Pabau

## Welcome

This monorepo contains all of our code (with the exception of `/.env`). The monorepo was created by [nx](https://nx.dev). For more information type `yarn run nx`.

### Paths

- `/` -
- `/.run/` - scripts for all devs (and Jetbrains IDE's)
- `/.storybook/` - global Storybook config
- `/.vscode/` - vscode specific settings for all devs
- `/apps/` - where most of our projects reside.
- `/apps/web/` - the main application Frontend.
- `/apps/*-e2e/` - End-to-end testing with Cypress.
- `/dist/` - temporary directory (local only)
- `/hasura/` - our database configuration
- `/libs/` - where any shared libraries reside. These can be referenced (used) in any app.
- `/libs/ui/` - our shared UI (React Components).
- `/tools/` - repo-level tooling.
- `**/cicd/` - devops only.

## Setup

1. Install Node 14 LTS (Opt in for the extra build tools)
1. Install yarn: `npm i -g yarn` (`yarn --version` \>=1.22.10 && <2 is fine)
1. Ensure your terminal is BASH (cmd and PS not supported. Vscode: `"terminal.integrated.shell.windows": "c:/program files/git/bin/bash.exe",`)
1. Ensure your IDE has eslint plugin setup and configured to auto-fix on save.
1. Ensure your Git config user.name is your full name, and user.email is the same email you registered as with Bitbucket.org.

### Storybook

Any component that is likely to be needed on other pages, such as a table, button, heading, avatar, etc, should live in `/libs/ui/`. Each component in here should be exposed as a Storybook item, and is visible on [https://storybook.new.pabau.com](https://storybook.new.pabau.com) or run `yarn run nx run ui:storybook` to develop on it locally with live reloading.

To create a new component, such as "Button", do the following:

```bash
yarn run nx g @nrwl/react:component --project=ui --style=less --export --pascalCaseFiles --name=Button
```

### Frontend

To view the Frontend, you can either visit [https://prelive-crm.new.pabau.com](https://prelive-crm.new.pabau.com) or run `yarn start` to develop on it locally with live reloading (HMR).

Each Page on the Frontend should use as many components as possible from our Storybook.

To create a new page (route), such as "/marketing/sources", do the following:

```bash
yarn run nx g @nrwl/next:page --project=web --style=less --directory marketing sources
```

Now add `import { } from '@pabau/ui'` at top of the new page file and fill in the {} with components you need.

## Backend

The backend is a REST MVC framework. We are using NestJS and converting it into Serverless Vercel Functions at compile-time.

The backend is designed to only be called from Hasura (Webhooks and Actions).

To view the Backend, you can either visit [https://backend.new.pabau.com](https://backend.new.pabau.com) or run `yarn nx serve backend` to develop on it locally with live reloading (HMR).

## Code Rules

- Branch from master, PR back to master.
  - Small PR's are good
  - Tag your commits and/or PR with the JIRA issue ID.
- Keep eye on your build pipeline status. If it fails, the onus is on your to make it green.
- Never do `import './MyComponent.less'` - always change it to `import styles from './MyComponent.module.less'`
- Never run your IDE or npm/yarn/npx with sudo or as root/Administrator.
- Never commit secrets, passwords, or tokens to this repo.
- To help keep DRY maybe you can tag me in a PR early on in any new component you are writing, so I can primarily help with the naming of things (as they saying goes "naming things is hard"). Or a screenshare, or just type out your plan more. Also have you looked at a wide variety of FIGMA designs? that would help. Also check out https://vimeo.com/user30916972 for some videos of our old system, to get an idea for the domain and intended user.
- Best to use jsx ternary rather than display none in react
- Best to make each component responsive on its own (Storybook even has a mobile preview button), rather than based on outside props.
- Open to all disagreements and other ideas. Please raise threads about problems you see in the code, my code, or future code.
- Don't use index key in JSX
- Never use the CR character
- Configure your IDE's eslint to autofix on save
- Is master build broken? please hotfix it on its own branch (eg hf_master_build) then other devs can merge that branch into theirs, allowing us all to continue work.
- `husky` lints your code as you `git commit`, and tests your code as you `git push`.
- Keep assets close to the components which use them
- Don't `import '../../..` across project boundaries - use `import { ... } from '@pabau/ui'` instead.
- Dont do `setBlah(!blah)`, it's `setBlah(e => !e)`

## Delineation between /apps/web/components/ ("App components") and /libs/ui/ ("UI components")

- Most components should be a UI component, because most elements on a page should be "natural" to the user.
- Only UI components can be shown in Storybook
- UI components cannot access database
- UI components have to expose full control via Storyboard Controls
- App components will involve Database interaction (via Apollo Client)
- Maybe for a one-off type widget, App component is fine

## Our Stack

- [TypeScript](https://www.typescriptlang.org/) - strong-typing is key to team success within DDD paradigm
- [nx](https://nx.dev/) - our monorepo orchestrator
- [eslint](https://eslint.org/) / [prettier](https://prettier.io/) - auto-cleans your code on save
- [Hasura](https://hasura.io/) - used as our ORM layer, provides websocket push notifications
- [Postgres](https://www.postgresql.org/) - the underlying SQL database that sits behind Hasura
- Backend uses [NestJS](https://nestjs.com/) (and converted to Vercel's [Serverless Functions](https://vercel.com/docs/serverless-functions/introduction) at deploy-time)
- [ant.design](https://ant.design/) - the base for most of our UI components
- [Vercel](https://vercel.com/) - Our hosting platform (except for hasura, which is on our [Rancher](https://rancher.com/) self-hosted platform)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - modern React using Functional Programming principles
- [NextJS](https://nextjs.org/) - frontend framework that uses React
- [LESS Modules](https://webpack.js.org/loaders/less-loader/#css-modules-gotcha) - our CSS language of choice
- [Apollo Client 3](https://www.apollographql.com/docs/react/) - client-side database access layer
- [Formik](https://formik.org/) - handles any \<form> we need
- [Storybook](https://storybook.js.org/) - for previewing our UI component library
- [LogEntries](https://logentries.com/) - a legal vault where we track changes to data
- [Figma](https://www.figma.com/) - pre-JSX designs/specifications
- [Husky](https://github.com/typicode/husky#readme) - pre-commit and pre-push hooks to ensure no errors exist in code
- [Sentry](https://sentry.io/for/react/) - [TODO] production app error logging and reporting
- [yup]() - [TODO] write business-level validation once that's used in frontend and backend
- Twilio Video + Sendgrid
- Atlassian: JIRA, Bitbucket (& Pipelines)

## Ticket workflow

1. Gather requirements, designs, and tests (BDD). Plan and research for an hour or so. Arrive at a rational conclusion to which npm modules, ant design components, and Pabau ui are needed.
1. Arrange a 2-5 minute call with James (or Dipak if James is unavailable) to discuss your plan. Or thread in main channel.
1. On the JIRA sub-task, click Create new branch (from master)
1. Checkout this in your IDE and code away :)
1. Commit often. Push once or twice a day at least.
1. When you feel very much finished, do a final push and open up a PR for it (to master)
1. Configure Bitbucket to receive email upon code comment, 'Changes requested', or merged
1. Of course, start your next ticket immediately while you follow through the remaining steps
1. After 10 mins or so, release-bot will post in the channel. Reply to the message with a link to a more specific page that highlights the work done. Also copy the vercel URL and paste it into the JIRA ticket as a comment. Finally, change the JIRA status to CODE REVIEW. This will let William browse all CODE REVIEW's and click the direct vercel link to see changes. 
1. If you receive an email that require you to make more changes: code, push, wait for the slack bot to post another url, reply to that tagging in @James and @Dipak
1. When you receive an email that your code is merged, you should also find your ticket is moved to 'QA' status.


## GraphQL workflow

1. [optional] Please install Hasura locally. On Linux it's very easy. 
1. Create a hasura/.env file:
   HASURA_GRAPHQL_ADMIN_SECRET=madskills
   HASURA_GRAPHQL_ENDPOINT=https://api.new.pabau.com/

1. Edit the database:
  1. Open the hasura console
  1. Create a new table (in the singular tense ie 'user' not 'users')
  1. Insert 3 'Frequently used columns' - the ID being GUID, and the created_at and updated_at
  1. Add a very clear comment for the table. Customers will see this.
  1. Change the table permissions so that 'public' role can do pretty much everything (for now).
  1. Check your table's public role permission for SELECT has the Aggregation queries permissions enabled.
  1. Oh hey there's a nice Clone Permissions feature
  1. Now run `yarn hasura:export` in your IDE, commit the changes to your branch.



  
   then yarn hasura:export



## To do (big engineering items)

- Apollo persisted queries (automatic, or build time)
- Apollo local state
- Apollo getfromtree
- Ant design babel import loader
- Playroom
- Apollo Typed Documents
- local dev env for hasura, migrations
- graphql-code-generator
- Convert from 'next export' to full on next server with ssr (i'm not sure)
- proper next i18n at build time
- Install a working serverless adapter for NestJS
- stylelint within eslint
- eslint should capture tsc errors too
- Create a bridge to our old LAMP app
  1. generate jwt in php
  2. ...?
