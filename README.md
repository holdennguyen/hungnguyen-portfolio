<p align="center">
  <img src="https://img.shields.io/apm/l/atomic-design-ui.svg?" />
  <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" />
</p>

# minhung.link

This is my personal website and portolio showcase. Built with no front-end developement experiement...

## Overview

I really like this [portfolio](https://github.com/sergiobarria/sergiobarria.com). After a little research to simplify and ended with the result you see [here](https:/minhung.link/).

## Folder Structure

```
minhung.link/
├── __tests__/
├── .github/
├── .husky/
├── .vscode/
├── cypress/
├── prisma/
├── public/
├── scripts/
├── src/
│   ├── components/
│   ├── content/
│   ├── context/
│   ├── fixtures/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   └── utils/
├── README.md
└── ...(other root files)
```

Most of the project content is inside the `src` folder.

- `components/*` - All project components
- `content/*` - All data used to populate blog posts, library and projects info
- `context/*` - React context
- `fixtures/*` - Static info used around the website
- `hooks/*` - Custom hooks
- `lib/*` - Script utitlities to comunicate with 3rd party services
- `pages/*` - Project pages
- `styles/*` - All related to tailwind styles and global css styles
- `types/*` - Global Typescript styles that are used in more than one component
- `utils/*` - Utility files that didn't fit any of the other categories

## Tech Stack

**Language:** Typescript

**Client:** React, Next.js

**Styling:** Tailwind CSS, CSS modules

**Databases:** Planetscale with Prisma

**Content:** MDX, [Contentlayer](https://github.com/contentlayerdev/contentlayer)

**API's:** Github GraphQL API

## Run Locally

- Clone the project

```bash
  $ git clone https://github.com/holdennguyen/hungnguyen-portfolio.git
  $ cd hungnguyen-portfolio
  $ yarn && yarn dev
```

> Use NodeJS v16
