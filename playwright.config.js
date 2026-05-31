// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Prevent test.only in Jenkins
  forbidOnly: !!process.env.CI,

  // Retry failed tests in Jenkins
  retries: process.env.CI ? 2 : 0,

  // Run 2 tests simultaneously
  workers: 2,

  // Reports
  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }

    // Uncomment later when required

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox']
    //   }
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari']
    //   }
    // }
  ]
});