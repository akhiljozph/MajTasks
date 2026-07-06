export default [
  {
    extends: [
      '**/vite.config.{mjs,js,ts,mts}',
      '**/vitest.config.{mjs,js,ts,mts}',
    ],
    test: {
      name: 'tasks-ui',
      browser: {
        enabled: false,
      },
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./apps/tasks-ui/src/test-setup.ts'],
    },
  },
];