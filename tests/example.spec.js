import { expect, test } from '@playwright/test';

test('Basic Actions-1', async({page}) =>{

await page.goto('https://xqa.io/practice');
await expect(page).toHaveURL('https://xqa.io/practice');
await expect(page).toHaveTitle("40+ Free Automation Testing Practice Exercises | Selenium, Cypress, Playwright | XQA");
await expect(page).toHaveTitle(/Playwright | XQA /i);   //----> Another way to validate the title
await page.waitForTimeout(2000);
console.log(await page.title());

await page.getByRole('heading',{name:'Elements'}).click();
await expect(page).toHaveURL('https://xqa.io/practice/text-box');
console.log(await page.title());
await expect(page).toHaveTitle(/Text Box/i);
await expect(page).toHaveTitle('Text Box - Automation Testing Practice | XQA');

await expect(page.getByLabel('Full Name')).toBeVisible();
await page.waitForTimeout(5000);

})
// Locator finding by using css selector and use the assertions
test('Basic Actions-2', async({page}) =>{
    await page.goto('https://xqa.io/practice/text-box');
    await page.locator('#userName').fill('Bhupesh Giri');
    console.log(await page.locator('#userName').inputValue());
    console.log(await page.title());
   await expect(page).toHaveTitle(/Practice/i);
    await page.waitForTimeout(3000);
})
// Locator finding by using getByPlaceholder and use the assertions
test('Basic Actions-3', async({page})=>{
    await page.goto('https://xqa.io/practice/text-box');
    console.log(await page.title());
    await expect(page).toHaveTitle(/Testing Practice/i);
   await expect(page.getByPlaceholder('John Doe')).toBeVisible();
   await page.waitForTimeout(3000);
})

// Locator finding by using getByRole and use the assertions
test('Basic Actions-4', async({page}) =>{
    await page.goto('https://xqa.io/practice/text-box');
    await expect(page.getByRole('textbox', {name:'Full Name'})).toBeVisible();
    await page.waitForTimeout(3000);
})