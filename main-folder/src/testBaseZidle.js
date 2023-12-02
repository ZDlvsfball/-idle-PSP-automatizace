const { test, expect } = require("@playwright/test");
const { pageUrls } = require("./constantsZidle");







async function login(page,zidleLoginPage,username,password,baseURL) {
    // kroky pro přihlášení do aplikace židle
    await page.goto(zidleLoginPage);
    await page.getByPlaceholder('Uživatelské jmeno').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Sign in' }).click();

    //asertace, že jsme byli úspěšně přihlášeni
    await expect(page).toHaveURL(baseURL);
}



async function logout(page,url) {
    // kliknutí na tlačítko odhlásit se
    await page.getByRole('button', { name: '󰍃' }).click();

    //asertace, že odhlášení bylo úspěšné
    await expect(page).toHaveURL(url);

}

async function goHomePage(page,url) {

    // Kliknutí na tlačítko dashboardu čili jít domů
    await page.getByRole('button', { name: '󰋜' }).click();

    //asertace prokliknutí
    await expect(page).toHaveURL(url)
}


async function checkCheckboxByText(page, checkboxText) {
    let checkboxSelector;

    if (checkboxText.includes('Zákony připravené pro 1. čtení')) {
        checkboxSelector = "(//label[contains(text(),'Zákony připravené pro 1. čtení')])[1]";
    } 
    
    else if (checkboxText.includes('Zákony připravené pro 2. čtení')) {
        checkboxSelector = "(//label[contains(text(),'Zákony připravené pro 2. čtení')])[1]";
    } 
    
    else if (checkboxText.includes('Zákony připravené pro 3. čtení')) {
        checkboxSelector= "(//label[contains(text(),'Zákony připravené pro 3. čtení')])[1]";
    } 
    
    else if (checkboxText.includes('Zákony vrácené ze Senátu připravené k projednávání')) {
        checkboxSelector= "(//label[contains(text(),'Zákony vrácené ze Senátu připravené k projednávání')])[1]";
    }
    
    else if (checkboxText.includes('Zákony vrácené prezidentem připravené k projednávání')) {
        checkboxSelector= "(//label[contains(text(),'Zákony vrácené prezidentem připravené k projednávání')])[1]";
    } 
    
    else if (checkboxText.includes('Smlouvy připravené pro 1. čtení')) {
        checkboxSelector= "(//label[contains(text(),'Smlouvy připravené pro 1. čtení')])[1]";
    } 
    
    else if (checkboxText.includes('Smlouvy připravené pro 2. čtení')) {
        checkboxSelector= "(//label[contains(text(),'Smlouvy připravené pro 2. čtení')])[1]";
    } 
    
    else if (checkboxText.includes('Smlouvy vrácené ze Senátu připravené k projednávání')) {
        checkboxSelector= "(//label[contains(text(),'Smlouvy vrácené ze Senátu připravené k projednáván')])[1]";
    } 
    
    else if (checkboxText.includes('Zprávy a akty EU, které nebyly dosud projednány')) {
        checkboxSelector= "(//label[normalize-space()='Zprávy a akty EU, které nebyly dosud projednány'])[1]";
    } 
    
    else if (checkboxText.includes('Sněmovní tisky podle čísla')) {
        checkboxSelector= "(//label[contains(text(),'Sněmovní tisky podle čísla')])[1]";
    } 
    
    else if (checkboxText.includes('Všechny tisky připravené na pořad schůze')) {
        checkboxSelector= "(//label[contains(text(),'Všechny tisky připravené na pořad schůze')])[1]";
    } 
    
    else if (checkboxText.includes('Zákony nepřipravené pro 1. čtení')) {
        checkboxSelector= "(//label[contains(text(),'Zákony nepřipravené pro 1. čtení')])[1]";
    } 
    
    else if (checkboxText.includes('Smlouvy nepřipravené pro 1. čtení')) {
        checkboxSelector= "(//label[contains(text(),'Smlouvy nepřipravené pro 1. čtení')])[1]";
    } 
    
    else if (checkboxText.includes('Sněmovní dokumenty podle čísla')) {
        checkboxSelector= "(//label[contains(text(),'Sněmovní dokumenty podle čísla')])[1]";
    } 
    
    else if (checkboxText.includes('Sněmovní dokumenty neprojednané')) {
        checkboxSelector= "(//label[contains(text(),'Sněmovní dokumenty neprojednané')])[1]";
    } 

    await page.locator(checkboxSelector).click();
    
    
    



  
}




module.exports={

    login,
    logout,
    goHomePage,
    checkCheckboxByText,
    
}