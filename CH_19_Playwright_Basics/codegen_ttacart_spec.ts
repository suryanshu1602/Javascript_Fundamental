import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abc');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('admin');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abc');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('abcadmin');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').dblclick();
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByRole('heading', { name: 'TTACart' })).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});