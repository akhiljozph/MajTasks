MajTasks/
├── apps/
│   ├── tasks-ui/                    # React frontend (Vite + SCSS)
│   │   ├── public/
│   │   │   └── favicon.ico
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── app.tsx
│   │   │   │   ├── app.module.scss
│   │   │   │   └── app.spec.tsx
│   │   │   ├── assets/
│   │   │   │   └── .gitkeep
│   │   │   ├── main.tsx
│   │   │   └── styles.scss
│   │   ├── index.html
│   │   ├── package.json             # @org/tasks-ui
│   │   ├── vite.config.mts
│   │   ├── tsconfig.json
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.spec.json
│   │   └── eslint.config.mjs
│   │
│   ├── tasks-ui-e2e/                # Playwright e2e tests for UI
│   │   ├── src/
│   │   │   └── example.spec.ts
│   │   ├── package.json             # @org/tasks-ui-e2e
│   │   ├── playwright.config.mts
│   │   ├── tsconfig.json
│   │   └── eslint.config.mjs
│   │
│   ├── tasks-api/                   # NestJS backend (Webpack)
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── app.module.ts
│   │   │   │   ├── app.controller.ts
│   │   │   │   ├── app.service.ts
│   │   │   │   ├── app.controller.spec.ts
│   │   │   │   └── app.service.spec.ts
│   │   │   ├── assets/
│   │   │   │   └── .gitkeep
│   │   │   └── main.ts
│   │   ├── package.json             # @org/tasks-api
│   │   ├── webpack.config.js
│   │   ├── jest.config.cts
│   │   ├── tsconfig.json
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.spec.json
│   │   └── eslint.config.mjs
│   │
│   └── tasks-api-e2e/               # Jest e2e tests for API
│       ├── src/
│       │   ├── support/
│       │   │   ├── global-setup.ts
│       │   │   ├── global-teardown.ts
│       │   │   └── test-setup.ts
│       │   └── tasks-api/
│       │       └── tasks-api.spec.ts
│       ├── package.json             # @org/tasks-api-e2e
│       ├── jest.config.cts
│       ├── tsconfig.json
│       └── eslint.config.mjs
│
├── packages/                        # Shared libs (empty — .gitkeep only)
│   └── .gitkeep
│
├── .vscode/
│   ├── launch.json
│   └── extensions.json
│
├── .nx/                             # Nx cache & workspace data (generated)
│
├── package.json                     # Root workspace: @org/source
├── package-lock.json
├── nx.json                          # Nx plugins & target config
├── tsconfig.json
├── tsconfig.base.json
├── vitest.workspace.ts
├── jest.config.ts
├── jest.preset.js
├── eslint.config.mjs
└── README.md