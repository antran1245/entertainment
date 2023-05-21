# Objective

Recreate [entertainment-app](https://github.com/antran1245/entertainment-app) with Next.js, a database for users to keep track of bookmark show(s)/movie(s), and using TypeScript.

## Goals

    [ ] Recreate the frontend
      [ ] Use TypeScript
      [ ] No framework. Pure CSS

    [ ] Enable Backend
      [ ] Database: PostgreSQL
      [ ] NextAuth.js
      [ ] Prisma

    [ ] Deploy

## Run

Install packages with `npm install`.

Start the application with `yarn dev` or `npm run dev`.

## Information

Restructure `data.json` file to include a `id` key for easier bookmarking.

- Database
  - PostgreSQL
  - Small dataset, so saving array of `id` for bookmark as a one to many relation.
  - If the dataset is large, saving the full detail of the series/movies with a many to many relation database.

- Languages
  - JavaScript/TypeScript
  - HTML
  - CSS

## Features

- Able to Sign Up and Log in.
- Log in automatically to previous log in account.
- Bookmark movies and Tv Series.

## Credit

-  [Frontend Mentor](https://www.frontendmentor.io/)
  - JSON data file
  - Figma Design
- [Google Font Material Symbols and Icons](https://fonts.google.com/)
  - Account Cirlce Icon 