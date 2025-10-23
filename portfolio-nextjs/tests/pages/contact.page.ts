import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly contactForm: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageTextarea: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactForm = page.locator('.contact-form');
    this.nameInput = page.locator('input[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.subjectInput = page.locator('input[name="subject"]');
    this.messageTextarea = page.locator('textarea[name="message"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.success-message');
    this.errorMessage = page.locator('.error-message');
  }

  async fillContactForm(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.subjectInput.fill(data.subject);
    await this.messageTextarea.fill(data.message);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async isFormSubmitting(): Promise<boolean> {
    const buttonText = await this.submitButton.textContent();
    return buttonText?.includes('Sending...') || false;
  }

  async waitForSuccessMessage() {
    await this.successMessage.waitFor({ state: 'visible' });
  }

  async waitForErrorMessage() {
    await this.errorMessage.waitFor({ state: 'visible' });
  }

  async isFormValid(): Promise<boolean> {
    const nameValue = await this.nameInput.inputValue();
    const emailValue = await this.emailInput.inputValue();
    const subjectValue = await this.subjectInput.inputValue();
    const messageValue = await this.messageTextarea.inputValue();
    
    return !!(nameValue && emailValue && subjectValue && messageValue);
  }
}
