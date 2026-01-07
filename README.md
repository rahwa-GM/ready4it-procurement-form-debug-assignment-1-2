Assignment 2 – ESLint, Prettier, Husky & Airbnb Setup

This project was cleaned and formatted as part of Ready4IT Homework Assignment 2 using ESLint, Prettier, Husky, and the Airbnb style guide.
The goal was to improve code quality, enforce professional JavaScript standards, and ensure consistent formatting for the procurement form files.

Files Checked
. procurement.html
. js/procurement.js

Tools Used
. ESLint – for detecting and fixing JavaScript errors and enforcing coding standards
. Prettier – for automatic code formatting
. Husky – for pre-commit linting to ensure code quality before commits
. eslint-plugin-html – to allow linting of JavaScript inside HTML files
. Airbnb style guide – professional JavaScript style rules

Issues Fixed
JavaScript Issues (ESLint + Airbnb rules)

The following problems were detected and fixed:
. Unused variables
. Missing semicolons
. Inconsistent spacing and indentation
. Incorrect or unsafe comparisons
. Use of isNaN replaced with Number.isNaN() per Airbnb rules
. Brace-style errors corrected (else on the same line as })
. Minor syntax warnings

Formatting Issues (Prettier)

Prettier fixed:
. Inconsistent indentation
. Mixed single and double quotes
. Long lines over 80 characters
. Extra or missing spaces
. Inconsistent bracket and line breaks

The formatting rules used are from the .prettierrc file:

{
"semi": true,
"singleQuote": true,
"tabWidth": 2,
"trailingComma": "es5",
"printWidth": 80
}

Husky Pre-commit Linting
. Husky was configured to run lint-staged on staged files before every commit.
. procurement.js is automatically checked with ESLint + Prettier
. procurement.html is automatically formatted with Prettier
. Commits are blocked if linting errors are found

Commands for Husky testing:

    git add js/procurement.js
    git commit -m "Test Husky pre-commit linting"

Commands Used

Lint and fix procurement files:

    npx eslint js/procurement.js procurement.html --fix

Format procurement files:

    npx prettier --write js/procurement.js procurement.html

VS Code Setup
. Enabled Format on Save
. Set Prettier as the default formatter

Files are automatically formatted when saved.

Screenshots

Screenshots were taken to show the before and after formatting results as required by the assignment.

Final Result

After running ESLint, Prettier, Husky, and applying Airbnb rules:
. All formatting issues were fixed
. JavaScript code follows professional Airbnb style standards
. Pre-commit checks prevent committing broken code
. Procurement files are clean, readable, and professional
