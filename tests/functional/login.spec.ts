import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test('login page should load page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await expect(page).toHaveTitle(/\S+/);
});