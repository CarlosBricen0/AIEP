import { Builder, By, until } from 'selenium-webdriver';

(async function example() {
  let driver = new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.instagram.com/');
    await driver.wait(until.elementLocated(By.name('username')), 10 * 1000);
    await driver.findElement(By.name('username')).sendKeys('aiep.briceno@gmail.com');
    await driver.wait(until.elementLocated(By.name('password')), 10 * 1000);
    await driver.findElement(By.name('password')).sendKeys('carlosaiep');
    await driver.findElement(By.css('#loginForm > div > div:nth-child(3)')).click();
    await driver.wait(until.elementLocated(By.className('wpO6b')), 10 * 1000);
    await driver.findElement(By.className('wpO6b')).click();
    await driver.wait(until.elementLocated(By.className('sqdOP')), 10 * 1000);
    await driver.findElement(By.className('sqdOP')).click();
    await driver.wait(until.elementLocated(By.className('yWX7d')), 10 * 1000);
    await driver.findElement(By.className('yWX7d')).click();
    await driver.wait(until.elementLocated(By.className('sqdOP')), 10 * 1000);
    await driver.findElement(By.className('sqdOP')).click();
    await driver.wait(until.elementLocated(By.className('PUqUI')), 10 * 1000);
    await driver.findElement(By.name('PUqUI')).sendKeys('automatizando AIEP');
    await driver.wait(until.elementLocated(By.className('sqdOP')), 10 * 1000);
    await driver.findElement(By.className('sqdOP')).click();
    await driver.wait(until.elementLocated(By.name('s4Iyt')), 10 * 1000);
    await driver.wait(until.elementLocated(By.name('_2hvTZ')), 10 * 1000);
  } finally {
    await driver.quit();
  }
})();