const { test, expect,beforeEach,afterEach } = require("@playwright/test");
const {
  login,
  logout,
  goHomePage,
  checkCheckboxByText,
  
} = require("../src/testBaseZidle.js");
const constants = require("../src/constantsZidle.js");
const exp = require("constants");


//aktivace constant
const zidleLoginPage = constants.zidleLoginPage;
const username = constants.username;
const password = constants.password;
const baseURL = constants.baseURL;
const pageUrls = constants.pageUrls;
const votingMachineAPP = constants.votingMachineAPP;




//Zde začíná test
test.describe("Tlačítka a jejich funkčnost ", () => {
  test.beforeEach(async ({ page }) => {
    // Function for log in
    await login(page, zidleLoginPage, username, password, pageUrls.dashboard);
    
  });

  test.afterEach(async ({ page }) => {
    // logout ze židle
    await logout(page, pageUrls.logOutPage);
    
  });

test("Horní panel", async ({ page }) => {
  //login do židle
 

  // Kódy pro simulaci kliknutí na tlačítka

  //Kliknutí na normální schůzi v horním panelu první schůze v liště
  await page.locator("(//span[@class='v-chip__content'])[1]").click();

  //asertace, že proklik byl úspěšný
  const expectedElement = await page.getByText("Tisky Dokumenty");
  await expect(expectedElement).toBeVisible();

  // vrátit se na hlavní stránku
  await goHomePage(page, pageUrls.dashboard);

  //Speciální schůze první schůze v liště spec. schůzí
  await page.locator("(//div)[31]").click();
  //asertace, že proklik byl úspěšný
  await expect(expectedElement).toBeVisible();

  // vrátit se na hlavní stránku
  await goHomePage(page, pageUrls.dashboard);

  //Kliknutí na tlačítko Dny jednací PS
  await page.getByRole('button', { name: '󰃭' }).click();
  //asertace, že proklik byl úspěšný
  const dialog = await page.locator('#app-root > div.v-dialog__content.v-dialog__content--active');
  await page.waitForTimeout(1000);
  await expect(dialog).toBeVisible();
  await page.locator('.text-right > .v-btn').click();

  // vrátit se na hlavní stránku
  await goHomePage(page, pageUrls.dashboard);

  //Kliknutí na tlačítko Nastavení aplikace
  await page.getByRole("button", { name: "󰖷" }).click();
  //asertace, že proklik byl úspěšný
  await expect(page).toHaveURL(pageUrls.appSettings);
  console.log(page.url());

  // vrátit se na hlavní stránku
  await goHomePage(page, pageUrls.dashboard);

  // Kliknutí na tlačítko pro Uživatelksé nastavení
  await page.getByRole("button", { name: "󰒓" }).click();
  //asertace, že proklik byl úspěšný
  const expectedElement2 = await page.getByRole("heading", {
    name: "Uživatelské nastavení",
  });
  await expect(expectedElement2).toBeVisible();
  console.log(page.url());

  
});

test("Filtr sněmovních tisků", async ({ page }) => {
 

  
  
  //Selectbar Volební období ověření funkčnosti, že se otevírá nabídka

  const listboxFiltrST = await page
    .locator("form")
    .filter({
      hasText:
        "Volební období9. (od 2021) Číslo schůze Zákony připravené pro 1. čtení Zákony př",
    })
    .getByRole("button");
  await listboxFiltrST.click();

  const selectedItem = await page.getByText("6. (2010 - 2013)");

  await selectedItem.click();

  //
  const comboboxFiltrST = await page.locator(
    '[role="combobox"][aria-haspopup="listbox"]'
  );
  await comboboxFiltrST.click();


  

  await page
    .getByRole("option", { name: "6", exact: true })
    .locator("div")
    .first()
    .click();

  //await page.locator("//div[@role='listbox']")

  //kontrola první checkboxů ve filtru sněmovních tisků
  await checkCheckboxByText(page, "Zákony připravené pro 1. čtení");

  await checkCheckboxByText(page, "Zákony připravené pro 2. čtení");

  await checkCheckboxByText(page, "Zákony připravené pro 3. čtení");

  await checkCheckboxByText(
    page,
    "Zákony vrácené ze Senátu připravené k projednávání"
  );

  await checkCheckboxByText(
    page,
    "Zákony vrácené prezidentem připravené k projednávání"
  );

  await checkCheckboxByText(page, "Smlouvy připravené pro 1. čtení");

  await checkCheckboxByText(page, "Smlouvy připravené pro 2. čtení");

  await checkCheckboxByText(
    page,
    "Smlouvy vrácené ze Senátu připravené k projednávání"
  );

  await checkCheckboxByText(
    page,
    "Zprávy a akty EU, které nebyly dosud projednány"
  );

  await checkCheckboxByText(page, "Sněmovní tisky podle čísla");

  await checkCheckboxByText(page, "Všechny tisky připravené na pořad schůze");

  await checkCheckboxByText(page, "Zákony nepřipravené pro 1. čtení");

  await checkCheckboxByText(page, "Smlouvy nepřipravené pro 1. čtení");

  await checkCheckboxByText(page, "Sněmovní dokumenty podle čísla");

  await checkCheckboxByText(page, "Sněmovní dokumenty neprojednané");

  //Potvrzení formuláře kliknutím na tlačítko OK
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(1000);
  await expect(page.url()).toMatch(/meeting/);
  console.log(page.url())

  //Jít zpátky na domovskou stránku
  await goHomePage(page,pageUrls.dashboard);



  //Zrušení filtrů 
   //kontrola první checkboxů ve filtru sněmovních tisků
   await checkCheckboxByText(page, "Zákony připravené pro 1. čtení");

   await checkCheckboxByText(page, "Zákony připravené pro 2. čtení");
 
   await checkCheckboxByText(page, "Zákony připravené pro 3. čtení");
 
   await checkCheckboxByText(
     page,
     "Zákony vrácené ze Senátu připravené k projednávání"
   );
 
   await checkCheckboxByText(
     page,
     "Zákony vrácené prezidentem připravené k projednávání"
   );
 
   await checkCheckboxByText(page, "Smlouvy připravené pro 1. čtení");
 
   await checkCheckboxByText(page, "Smlouvy připravené pro 2. čtení");
 
   await checkCheckboxByText(
     page,
     "Smlouvy vrácené ze Senátu připravené k projednávání"
   );
 
   await checkCheckboxByText(
     page,
     "Zprávy a akty EU, které nebyly dosud projednány"
   );
 
   await checkCheckboxByText(page, "Sněmovní tisky podle čísla");
 
   await checkCheckboxByText(page, "Všechny tisky připravené na pořad schůze");
 
   await checkCheckboxByText(page, "Zákony nepřipravené pro 1. čtení");
 
   await checkCheckboxByText(page, "Smlouvy nepřipravené pro 1. čtení");
 
   await checkCheckboxByText(page, "Sněmovní dokumenty podle čísla");
 
   await checkCheckboxByText(page, "Sněmovní dokumenty neprojednané");

   //Tlačítko zrušit
   const buttonCancel = await page.getByRole('button', { name: 'Zrušit filtry' });
   await buttonCancel.click();

   //Ověření alertu o potvrezní zrušení 
   const alertMessage = await page.getByRole('paragraph');
   await page.waitForTimeout(1000);
   await expect(alertMessage).toBeVisible();

   //Ověření, že alert už není na stránce
   await page.waitForTimeout(1000);
   await expect(alertMessage).not.toBeVisible();



   

   



  
});



test("Tabulka schůzí", async ({ page }) => {
   


    //Selectbox volební období 
    await page.getByRole('button', { name: 'Volební období 9. (od 2021)' }).nth(1).click();

    //Vybereme první hodnotu
    await page.getByRole('option', { name: '1. (1992 - 1996)' }).locator('span').click();

    //vytisknutí dat, které se nacházejí v seznamu
    const votePeriod = await page.getByText('1. (1992 - 1996) 2. (1996 - 1998) 3. (1998 - 2002) 4. (2002 - 2006) 5. (2006 - 2').textContent();
    console.log(votePeriod);
    //OVěření, že došlo ke změně v tabulce
    
    const tableDataElement = await page.locator('.col-md-8').first();
    const tableData = await tableDataElement.textContent();
    console.log(tableData);

    await expect(tableData).toContain('1992 - 1996');


    //selectbox 
    await page.getByRole('button', { name: 'Stav schůze' }).click();
    //Vybrání hodnoty 
    await page.getByRole('option', { name: 'zrušena' }).click();

    //vytisknutí dat ze seznamu
    
    const stateMeetingList = await page.locator("#app-root > div.v-menu__content.theme--light.menuable__content__active").textContent();
    console.log(stateMeetingList); 
    
    await goHomePage(page,pageUrls.dashboard); 


    //Typ schůze selectbox
    await page.getByRole('button', { name: 'Typ schůze' }).click();

    const meetingType = await page.locator("#app-root > div.v-menu__content.theme--light.menuable__content__active").textContent();

    //vytisknutí dat ze seznamu
    console.log(meetingType);

    

    
    
});



test("Tlačítka Nová schůze a speciální schůze", async ({ page }) => {
 

  //Kliknutí na tlačítno nová schůze
  await page.getByRole('button', { name: 'Nová schůze' }).click();

  //Ověření dialogu s formulářem
  const newMeetingDialog = await page.locator('#app-root > div.v-dialog__content.v-dialog__content--active > div');
  await page.waitForTimeout(1000);
  await expect(newMeetingDialog).toBeVisible();
  //Kliknutí na storno pro zavření okna
  await page.getByRole('button', { name: 'Storno' }).click();
  //Ověření že se okno s formulářem zavřelo
  await expect(newMeetingDialog).toBeHidden();
  

  //Kliknutí na tlačítno nová schůze
  await page.getByRole('button', { name: 'Speciální schůze' }).click();
  //Ověření dialogu s formulářem
  const newMeetingDialog1 = await page.locator("#app-root > div.v-dialog__content.v-dialog__content--active");
  await page.waitForTimeout(1000);
  await expect(newMeetingDialog1).toBeVisible();
  //Kliknutí na storno pro zavření okna
  await page.getByRole('button', { name: 'Storno' }).click();

  await expect(newMeetingDialog1).toBeHidden();

  
});

test("Schůze v tabulce ", async ({ page }) => {
 

  //dvojté kliknutí na schůzi pro její otevření detailu
  await page.locator("#app-root > div.v-application--wrap > div:nth-child(1) > main > div > div > div > div > div.col-md-8.col-12 > div > div:nth-child(3) > div > div:nth-child(1) > div").dblclick();
  await page.waitForTimeout(1000);
  //Ověření, že jsme se dostali na detail schůze
  await expect(page.url()).toMatch(/meeting/);
  
});

})