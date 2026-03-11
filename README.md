# 🎭 Playwright TS Automation

Automation testing project using **Playwright with TypeScript** for end-to-end (E2E) web testing.

---
#### Report Running Test!

[![Playwright Report](https://img.shields.io/badge/Playwright-Report-blue)](https://mrdhwnkml.github.io/api-automation-playwright/)

## 🚀 Tech Stack
- **Playwright**
- **TypeScript (Node.js)**
- **Playwright Test Runner**
- **Chromium / Firefox / WebKit**

---

## 📂 Project Structure
```text
.
├── src/
│   ├── api
│       ├── auth.api.ts
│       ├── base.api.ts
│       ├── user.api.ts
│   └── heler
│       ├── assert.helper.ts
│       ├── auth.helper.ts
├── tests/                    # Test cases
│   ├── auth
│       ├── login.spec.ts
│   └── users
│       ├── getUser.spec.ts
├── playwright.config.ts      # Playwright configuration
├── package.json
└── README.md
```

⚙️ Prerequisites

Make sure you have installed:

 - Node.js v18 or higher
 - npm or yarn

Check installed versions:
```
node -v
npm -v
```
## 📦 Installation
1️⃣ Clone Repository
```
git clone https://github.com/mrdhwnkml/api-automation-playwright.git
cd api-automation-playwright
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Install Playwright Browsers
```
npx playwright install
```
## ▶️ Run Tests

1️⃣ Run all tests
```
npx playwright test
```
2️⃣ Run tests in headed mode
```
npx playwright test --headed
```
3️⃣ Run specific test file
```
npx playwright test tests/login.spec.ts
```
## 📊 Test Report

Generate and open HTML report:
```
npx playwright show-report
```
