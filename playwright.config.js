const { devices } = require('@playwright/test');
const config = {
  globalSetup: require.resolve('./server'),
  use: {
    trace: 'off',
    headless: false,
    baseURL: 'http://localhost:3000',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};
module.exports = config;
