/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

function setViewportSize(driver, width, height) {
  driver.manage().window().setRect({ width, height });
}

function sleep(time) {
  return new Promise((r) => setTimeout(r, time));
}

export const viewportsTests = {
  async mobile(): Promise<void> {
    setViewportSize(this.browser, 320, 568);
    await sleep(500);
    await this.expect(await this.takeScreenshot()).to.matchImage("mobile");
  },
  async tablet(): Promise<void> {
    setViewportSize(this.browser, 768, 1024);
    await sleep(500);
    await this.expect(await this.takeScreenshot()).to.matchImage("tablet");
  },
  async desktopMD(): Promise<void> {
    setViewportSize(this.browser, 1280, 800);
    await sleep(500);
    await this.expect(await this.takeScreenshot()).to.matchImage("desktopMD");
  },
  async desktopHD(): Promise<void> {
    setViewportSize(this.browser, 1440, 900);
    await sleep(500);
    await this.expect(await this.takeScreenshot()).to.matchImage("desktopHD");
  },
  async desktopFullHD(): Promise<void> {
    setViewportSize(this.browser, 1920, 1080);
    await sleep(500);
    await this.expect(await this.takeScreenshot()).to.matchImage("desktopFullHD");
  },
  async desktopUltra(): Promise<void> {
    setViewportSize(this.browser, 2100, 900);
    await sleep(500);
    await this.expect(await this.takeScreenshot()).to.matchImage("desktopUltra");
  },
};
