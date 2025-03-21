# Brujo Influence

A digital agency website showcasing influencer-focused services with a unique Mexican-Norwegian design aesthetic.

## 🔗 Live Demo

Visit the live site: [Brujo Influence (GitHub Pages)](https://quasimodocodes.github.io/BrujoInfluence/)

_Note: We're in the process of setting up our custom domain (brujoinfluence.com). In the meantime, you can access the site via the GitHub Pages URL above._

## ✨ Features

- Modern, responsive design with Mexican and Norwegian cultural influences
- Engaging animations powered by Framer Motion
- Component-based architecture using React and TypeScript
- Styled with Tailwind CSS for rapid development and custom design elements
- Optimized for performance, SEO, and accessibility

## 🛠️ Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- PostCSS for CSS processing

## 📁 Project Structure

- `/components`: Reusable UI components
  - `/layout`: Header, Footer, and layout components
  - `/sections`: Main page sections (Hero, Services, Portfolio, etc.)
  - `/ui`: Small UI components like buttons, cards, etc.
- `/services`: Service-related functionality
- `/public/images`: Static images used throughout the site

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/QuasimodoCodes/BrujoInfluence.git
   cd BrujoInfluence
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🎨 Design Approach

The design combines Mexican vibrancy with Norwegian minimalism, featuring:

- Geometric shapes inspired by Norwegian design
- Vibrant colors and patterns inspired by Mexican folk art
- Clean typography and functional layouts for optimal user experience

## 🌐 GitHub Pages Deployment

The site is deployed using GitHub Pages. To deploy your own version:

1. In your project settings, go to the "Pages" section
2. Select the main branch as the source
3. Configure the build settings to deploy from the `/build` folder
4. Save your changes and wait for the deployment to complete

You can also use GitHub Actions to automate the build and deployment process:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: build
```

## 📄 License

MIT
