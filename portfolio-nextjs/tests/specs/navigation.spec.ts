import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Navigation Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHome();
  });

  test('should display header with navigation', async () => {
    await expect(homePage.header).toBeVisible();
    await expect(homePage.navigationMenu).toBeVisible();
  });

  test('should navigate to different sections', async () => {
    // Test navigation to About section
    await homePage.clickNavigationLink('About');
    await homePage.scrollToSection('about');
    
    // Test navigation to Works section
    await homePage.clickNavigationLink('Works');
    await homePage.scrollToSection('projects');
    
    // Test navigation to Contact section
    await homePage.clickNavigationLink('Contact');
    await homePage.scrollToSection('contact');
  });

  test('should toggle mobile menu on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Initially mobile menu should be closed
    await expect(homePage.navigationMenu).not.toHaveClass(/nav-list-open/);
    
    // Click mobile menu button
    await homePage.toggleMobileMenu();
    
    // Mobile menu should be open
    await expect(homePage.navigationMenu).toHaveClass(/nav-list-open/);
  });

  test('should have working logo link', async ({ page }) => {
    const logo = homePage.header.locator('.logo');
    await expect(logo).toBeVisible();
    await logo.click();
    
    // Should scroll to top/home section
    await expect(homePage.heroSection).toBeInViewport();
  });
});
