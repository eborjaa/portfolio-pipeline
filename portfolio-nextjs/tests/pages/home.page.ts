import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly header: Locator;
  readonly heroSection: Locator;
  readonly contactForm: Locator;
  readonly navigationMenu: Locator;
  readonly mobileMenuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('header');
    this.heroSection = page.locator('#home');
    this.contactForm = page.locator('#contact');
    this.navigationMenu = page.locator('.nav-list');
    this.mobileMenuButton = page.locator('.nav-btn');
  }

  async navigateToHome() {
    await this.page.goto('/');
  }

  async clickNavigationLink(linkText: string) {
    await this.navigationMenu.locator(`text=${linkText}`).click();
  }

  async toggleMobileMenu() {
    await this.mobileMenuButton.click();
  }

  async isMobileMenuOpen(): Promise<boolean> {
    return await this.navigationMenu.locator('.nav-list-open').isVisible();
  }

  async scrollToSection(sectionId: string) {
    await this.page.locator(`#${sectionId}`).scrollIntoViewIfNeeded();
  }
}
