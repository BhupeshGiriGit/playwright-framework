import { expect, test } from '@playwright/test';

test('Basic Actions-1', async ({ page }) => {

    await page.goto('https://xqa.io/practice');

    // Page Assertions
    await expect(page).toHaveURL('https://xqa.io/practice');
    await expect(page).toHaveTitle('40+ Free Automation Testing Practice Exercises | Selenium, Cypress, Playwright | XQA');
    await expect(page).toHaveTitle(/Playwright/i);

    console.log(await page.title());

    // Verify Elements heading is visible
    await expect(
        page.getByRole('heading', { name: 'Elements' })
    ).toBeVisible();

    await page.getByRole('heading', { name: 'Elements' }).click();

    await page.waitForLoadState('networkidle');

    // Verify navigation
    await expect(page).toHaveURL('https://xqa.io/practice/text-box');
    await expect(page).toHaveTitle(/Text Box/i);

    console.log(await page.title());

    // Verify Full Name textbox
    await expect(page.getByLabel('Full Name')).toBeVisible();
    await expect(page.getByLabel('Full Name')).toBeEnabled();

    // Verify Email textbox
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeEnabled();
});

test('Basic Actions-2', async ({ page }) => {

    await page.goto('https://xqa.io/practice/text-box');

    const fullName = page.locator('#userName');

    await expect(fullName).toBeVisible();
    await expect(fullName).toBeEnabled();

    await fullName.fill('Bhupesh Giri');

    // Verify entered value
    await expect(fullName).toHaveValue('Bhupesh Giri');

    console.log(await fullName.inputValue());
    console.log(await page.title());

    await expect(page).toHaveTitle(/Practice/i);
});

test('Basic Actions-3', async ({ page }) => {

    await page.goto('https://xqa.io/practice/text-box');

    console.log(await page.title());

    await expect(page).toHaveTitle(/Testing Practice/i);

    const fullName = page.getByPlaceholder('John Doe');

    await expect(fullName).toBeVisible();
    await expect(fullName).toBeEditable();
    await expect(fullName).toHaveAttribute('placeholder', 'John Doe');
});

test('Basic Actions-4', async ({ page }) => {

    await page.goto('https://xqa.io/practice/text-box');

    const textBox = page.getByRole('textbox', { name: 'Full Name' });

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    await expect(textBox).toBeEditable();
});