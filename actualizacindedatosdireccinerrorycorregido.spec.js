// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Actualización de datos- dirección error y corregido', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Actualización de datos- dirección error y corregido', async function() {
    await driver.get("https://nntp-frontend-dev.nntp-dev.protectasecuritycloud.pe/intranet")
    await driver.manage().window().setRect({ width: 1294, height: 694 })
    await driver.findElement(By.css(".react-responsive-modal-overlay")).click()
    await driver.findElement(By.linkText("Actualización de datos")).click()
    await driver.executeScript("window.scrollTo(0,135)")
    await driver.findElement(By.css(".inputIcon-address .injected-svg")).click()
    await driver.findElement(By.css(".sc-eJwWfJ")).click()
    await driver.findElement(By.name("address")).sendKeys("n")
    await driver.findElement(By.css(".container-buttons > .sc-gsDKAQ")).click()
    {
      const element = await driver.findElement(By.css(".container-buttons > .sc-gsDKAQ"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.name("address")).click()
    await driver.findElement(By.name("address")).sendKeys("Maracaibo")
    await driver.findElement(By.css(".container-buttons > .sc-gsDKAQ")).click()
    {
      const element = await driver.findElement(By.css(".container-buttons > .sc-gsDKAQ"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css(".modal-success-button > .sc-gsDKAQ")).click()
    {
      const element = await driver.findElement(By.css(".dynamicRow-mails .row-container:nth-child(1) .sc-pVTFL"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
  })
})
