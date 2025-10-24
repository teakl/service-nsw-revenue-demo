import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./features", // Your .feature files will be compiled into tests
  timeout: 60000,
  retries: 0,
  reporter: [["html", { open: "never" }]],
  use: {
    headless: false, // show browser for demo
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
