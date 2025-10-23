import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ContactPage } from '../pages/contact.page';

test.describe('Contact Form Tests', () => {
  let homePage: HomePage;
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    contactPage = new ContactPage(page);
    await homePage.navigateToHome();
    await homePage.scrollToSection('contact');
  });

  test('should display contact form', async () => {
    await expect(contactPage.contactForm).toBeVisible();
    await expect(contactPage.nameInput).toBeVisible();
    await expect(contactPage.emailInput).toBeVisible();
    await expect(contactPage.subjectInput).toBeVisible();
    await expect(contactPage.messageTextarea).toBeVisible();
    await expect(contactPage.submitButton).toBeVisible();
  });

  test('should submit contact form successfully', async ({ page }) => {
    // Fill out the form
    await contactPage.fillContactForm({
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'This is a test message for the contact form.'
    });

    // Verify form is valid
    expect(await contactPage.isFormValid()).toBe(true);

    // Submit the form
    await contactPage.submitForm();

    // Wait for API call to complete
    await page.waitForResponse(response => 
      response.url().includes('/api/contact') && response.status() === 200
    );

    // Check for success message
    await contactPage.waitForSuccessMessage();
    await expect(contactPage.successMessage).toBeVisible();
  });

  test('should validate required fields', async () => {
    // Try to submit empty form
    await contactPage.submitButton.click();
    
    // Form should not submit (HTML5 validation)
    await expect(contactPage.nameInput).toHaveAttribute('required');
    await expect(contactPage.emailInput).toHaveAttribute('required');
    await expect(contactPage.subjectInput).toHaveAttribute('required');
    await expect(contactPage.messageTextarea).toHaveAttribute('required');
  });

  test('should validate email format', async () => {
    await contactPage.fillContactForm({
      name: 'John Doe',
      email: 'invalid-email',
      subject: 'Test Subject',
      message: 'This is a test message.'
    });

    await contactPage.submitButton.click();
    
    // Email input should show validation error
    await expect(contactPage.emailInput).toHaveAttribute('type', 'email');
  });

  test('should show loading state during submission', async ({ page }) => {
    await contactPage.fillContactForm({
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'This is a test message.'
    });

    // Start form submission
    await contactPage.submitButton.click();
    
    // Check for loading state
    expect(await contactPage.isFormSubmitting()).toBe(true);
    
    // Wait for API response
    await page.waitForResponse(response => 
      response.url().includes('/api/contact')
    );
  });

  test('should handle API errors gracefully', async ({ page }) => {
    // Mock API to return error
    await page.route('/api/contact', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal server error' })
      });
    });

    await contactPage.fillContactForm({
      name: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'This is a test message.'
    });

    await contactPage.submitForm();
    
    // Wait for error message
    await contactPage.waitForErrorMessage();
    await expect(contactPage.errorMessage).toBeVisible();
  });
});
