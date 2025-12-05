# 📋 Portfolio Website Test Plan

## 1. 📖 Introduction

This test plan outlines the strategy for validating the correct rendering, behavior, and functionality of a personal portfolio website. The site consists of the Hero, About, Skills, Projects, Experience, and Contact sections, each containing information about the candidate's background and capabilities.

## 2. 🎯 Project Overview

The portfolio is divided into six primary sections:

* **🎬 Hero section:** The landing section containing the person's name, role, a brief description, and hyperlinks to GitHub, LinkedIn, and email. It also includes navigation buttons that allow users to move through the site or access the contact form.
* **👤 About section:** Provides a summary of the candidate's qualities and key highlights.
* **🛠️ Skills section:** Displays categorized skill pills such as programming languages, automation tools, and frameworks.
* **💼 My Works section:** Contains a series of cards that display project information on hover. Clicking a card redirects the user to the corresponding resource.
* **💻 Work Experience section:** Shows cards with high-level summaries of past roles, including company, position, time period, and responsibilities.
* **📧 Contact section:** Includes a short message aimed at potential collaborators or employers, as well as a contact form and general contact details.

## 3. 🎯 Objectives

* ✅ Validate that all sections of the portfolio render correctly.
* 🔗 Ensure navigation, hyperlinks, contact form, and interactive components behave as expected.
* 📱 Confirm responsive design across devices and browsers.
* ♿ Validate accessibility compliance using automated tools.
* 🚀 Ensure the deployment functions reliably across supported environments.

## 4. 👥 Roles and Responsibilities

| Role                    | Responsibilities                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **🧪 SDET (You)**          | Test planning, writing automated tests, API testing, accessibility testing, CI integration, maintaining test suite |
| **👨‍💻 Developer (You)**     | Fix defects, implement improvements, validate build pipeline                                                       |
| **👀 Reviewer (Optional)** | Code review, QA review for completeness and consistency                                                            |

## 5. 🚪 Entry Criteria

* ✅ Deployment URL is accessible.
* 🎨 UI components are stable and not undergoing frequent redesign.
* 📡 Contact form backend endpoint is active.
* 🌐 Test environment browsers are available via Playwright.
* 📊 Required test data has been prepared.

## 6. 🛠️ Test Tools

| Tool                                  | Purpose                                 |
| ------------------------------------- | --------------------------------------- |
| **🎭 Playwright**                        | Functional, UI, cross-browser tests     |
| **♿ Axe Core (Playwright integration)** | Automated accessibility checks          |
| **📮 Postman/Newman**                    | API testing for the contact form        |
| **🔧 Jenkins**                           | CI pipeline for running automated tests |
| **☁️ Vercel**                            | Site deployment environment             |

## 3. 📐 Scope of Testing

The following areas are included in the testing scope:

* ✅ Correct rendering and display of all components across all sections
* 🔘 Proper functioning of navigation buttons
* 🔗 Proper functioning of all hyperlinks
* 🖱️ Correct behavior of hover-based interactive elements
* 📝 Fully functional contact form with input validation
* 🌓 Light/dark theme toggle functionality
* ♿ Accessibility validation for both themes
* 🌐 Cross-browser compatibility
* 📱 Responsive rendering across desktop and mobile devices

## 4. ❌ Out of Scope

* 📄 Full text-by-text content verification
* ✍️ Grammar validation
* 🎨 Pixel-perfect visual validation
* ⚡ Performance, scalability, and reliability testing (PSR), given that the site is a personal portfolio
* 🔥 Stress testing

## 5. 🧪 Testing Approach

* 🤖 Functional tests will be automated using Playwright and organized per section.
* 🔌 Contact form API validation will be performed using Postman and Newman.

## 6. 📝 Test Types

* **💨 Smoke tests:** Validate that all elements render and populate correctly.
* **⚙️ Functional and UI tests:** Validate hyperlink navigation and button behavior using Playwright.
* **♿ Accessibility tests:** Conducted using Axe Core integrated with Playwright.

## 7. 🌍 Test Environment

* 🌐 Deployment URL: [https://emmanuelborja.com](https://emmanuelborja.com)
* 🖥️ Testing will be conducted on Chromium, Firefox, and WebKit (Playwright-supported browsers).
* 📱 Tests will include desktop and mobile device rendering.

## 8. 📊 Test Data

Mock data for testing the contact form:

* **👤 Name:** Mock Person
* **📧 Email:** [mock@person.com](mailto:mock@person.com)
* **📌 Subject:** Mock email test
* **💬 Message:** This is a test.

## 9. 📋 High-Level Test Cases

Proposed test structure:

```
tests/
  features/
    navigation.spec.ts      - Validates navigation buttons on the Hero section
    hyperlinks.spec.ts      - Ensures all hyperlinks redirect to valid URLs
    scrolling.spec.ts       - Validates scrolling behavior
    contactForm.spec.ts     - Tests input validation and successful form submission
    themeToggle.spec.ts     - Validates light/dark theme toggle functionality

  sections/
    heroSection.spec.ts     - Validates component visibility and correctness
    aboutSection.spec.ts
    skillsSection.spec.ts
    projectsSection.spec.ts
    experienceSection.spec.ts
    contactSection.spec.ts

  cross/
    responsiveness.spec.ts  - Validates responsiveness on desktop, tablet, and mobile
    accessibility.spec.ts   - Validates accessibility for both light and dark themes
```

## 10. ⚠️ Risks & Mitigations

* 🔗 **External links may break** due to dependency on third-party services.
* ⚙️ **API misconfiguration** may affect contact form functionality.
* 📱 **Differences in mobile/desktop rendering** require specific automation considerations.
* 🔄 **Latest framework or Node.js versions may not be widely supported**, potentially affecting compatibility.

## 11. 📦 Deliverables

* 📄 Test Plan document
* 🎭 Playwright automated test suite
* 🔧 Jenkins CI pipeline integration for website deployment
* 📮 Newman/Postman API testing suite
* ☁️ Deployment pipeline integration using Vercel
