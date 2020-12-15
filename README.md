# Pabau

## Welcome

This monorepo contains all of our code (with the exception of `/.env`). The monorepo was created by [nx](https://nx.dev). For more information type `yarn run nx`.

### Paths
- `/apps` - where most of our projects reside.
- `/apps/web` - the main application Frontend.
- `/apps/*-e2e` - Cypress testing for apps.
- `/libs` - where any shared libraries reside. These can be referenced (used) in any app.
- `/libs/ui` - our shared UI components.
- `/tools` - repo-level tooling.
- `/tools/cicd` - devops only.

### Storybook
To view the UI components available to us, you can either visit https://storybook.new.pabau.com or run `yarn run nx run ui:storybook`

### Frontend
To view the Frontend, you can either visit https://crm.new.pabau.com or run `yarn start`.

