# React Localization Mini Project

This mini project demonstrates how to implement localization in a React app using the `react-i18next` library. The app includes a dropdown menu with different languages, allowing users to switch between them, dynamically changing the text on the website to match the selected language.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Localization Setup](#localization-setup)

## Demo

You can see the live demo of this project [here](https://language-localization-eight.vercel.app/).

## Features

- Dropdown menu for selecting languages (e.g., German, English, French, Arabic, Hindi).
- Real-time language switching with dynamic content updates.
- Utilizes the `react-i18next` library for localization.
- Easily extensible for adding more languages and translations.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/nikhilchhetri/language-localization.git
   ```

2. Change to the project directory:

   ```bash
   cd language-localization
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

To start the development server and view the app locally, run:

```bash
npm start
```

This will launch the app in your default web browser at `http://localhost:3000`.

## Localization Setup

This project uses the `react-i18next` library for localization. You can find the translation files and configuration in the `src/i18n` directory. To add or modify translations, follow these steps:

1. Create a new JSON file for the desired language (e.g., `en.json` for English) in the `public/assets/locales/` directory.

2. Define your translations in the JSON file using the following format:

   ```json
   {
     "key1": "Translation for key1",
     "key2": "Translation for key2"
   }
   ```

3. Import and use the translation keys in your React components as shown in the code examples.

4. To switch languages, use the `useTranslation` hook from `react-i18next` in your components and set the desired language.

5. Don't forget to add new languages to the `i18n.js` configuration file.
