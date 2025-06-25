# GitHub Actions Workflows

This directory contains automated workflows for the Product Framework Website.

## Workflows Overview

### 🚀 Deploy Workflow (`deploy.yml`)
**Triggers:** Push to `main` branch, Pull Requests, Manual dispatch

**What it does:**
- ✅ Validates HTML, JSON, and PWA configuration
- 🧪 Tests both Python (Flask) and Node.js servers
- 📦 Optimizes and packages static assets
- 🌐 Deploys to GitHub Pages automatically
- 📱 Ensures PWA features work correctly
- 🌍 Validates multilingual (i18n) system

### 🔍 Test Workflow (`test.yml`)
**Triggers:** Push to `main`/`develop`, Pull Requests

**What it does:**
- 🔍 Comprehensive code quality checks
- 📊 Performance analysis
- ♿ Basic accessibility validation
- 🔒 Security scanning
- 📝 Content validation
- 🌐 i18n system testing

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository Settings
2. Navigate to "Pages" section
3. Set Source to "GitHub Actions"
4. The workflow will automatically deploy to GitHub Pages

### 2. Repository Permissions
The workflows use `GITHUB_TOKEN` which is automatically provided. No additional secrets needed.

### 3. Custom Domain (Optional)
To use a custom domain:
1. Add your domain to the `cname:` field in `deploy.yml`
2. Configure DNS settings to point to GitHub Pages

## Workflow Features

### 🎯 Automated Deployment
- **Production**: Automatic deployment on `main` branch push
- **Preview**: PR preview notifications (can be extended to actual preview deployments)
- **Manual**: Can be triggered manually from Actions tab

### 🔧 Quality Assurance
- **HTML Validation**: Ensures proper HTML structure
- **JSON Validation**: Validates manifest.json and i18n files
- **PWA Compliance**: Checks service worker and manifest
- **Server Testing**: Validates both backend server options work
- **Performance**: Basic file size and optimization checks

### 🌐 Multi-language Support
- **Translation Validation**: Ensures all JSON translation files are valid
- **Language Consistency**: Basic checks for translation key consistency
- **Character Encoding**: UTF-8 support for Chinese characters

### 📱 PWA Validation
- **Manifest**: Validates web app manifest structure
- **Service Worker**: Ensures service worker is present
- **Icons**: Checks for PWA icon references
- **Offline Support**: Validates offline functionality setup

## Monitoring & Debugging

### View Workflow Results
1. Go to repository → Actions tab
2. Click on any workflow run to see detailed logs
3. Each step shows success/failure with detailed output

### Common Issues & Solutions

**HTML Validation Errors**: Check HTML structure in framework pages
**JSON Validation Errors**: Verify syntax in `manifest.json` and i18n files
**PWA Issues**: Ensure service worker and manifest are properly configured
**Server Tests**: May show warnings if servers can't bind to ports (normal in CI)

### Status Badges
You can add status badges to your README:

```markdown
![Deploy Status](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![Test Status](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/Test%20&%20Quality%20Assurance/badge.svg)
```

## Extending the Workflows

### Adding More Tests
- Add new steps to `test.yml` for additional validation
- Include performance testing tools
- Add accessibility testing with tools like `axe-core`

### Enhanced Deployment
- Add staging environment deployment
- Include cache invalidation for CDN
- Add deployment notifications to Slack/Discord

### Security Enhancements
- Add dependency vulnerability scanning
- Include SAST (Static Application Security Testing)
- Add license compliance checking 