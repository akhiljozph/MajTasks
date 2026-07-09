# MajTasks

## Apps

### Tasks UI

To serve the app:
```bash
npm run tasks-ui:start
```

To do the unit test of the app:
```bash
npm run tasks-ui:test
```

To run end to end test on the app:
```bash
npm run tasks-ui:e2e
```

### Tasks API

To serve the app:
```bash
npm run tasks-api:start
```

To do the unit test of the app:
```bash
npm run tasks-api:test
```

To run end to end test on the app:
```bash
npm run tasks-api:e2e
```

## Technical Stack
### Monorepo
- nx

### Frontend
- React - V19
- React Error Boundary
- React Router DOM - V6

### State Management
- Redux Toolkit (@reduxjs/toolkit, react-redux)

### Component Library
- Material UI

### Backend
- Nest.js

### Code Quality & Tooling
- ESLint + eslint-plugin-perfectionist (Line-length sorting and scope grouping)
- Vitest (`tasks-ui` test runner)
- Jest (`tasks-api` test runner)
