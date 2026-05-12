# Amazon Clone

A React + Vite e-commerce demo inspired by Amazon.co.za. This project includes product browsing, a checkout summary, cart support, dark mode, and sorting controls for products.

## Features

- Product listing grid with interactive cards
- Sort products by price (low → high / high → low) and rating
- Responsive product catalogue layout and sidebar filters
- Persistent dark mode toggle with light/dark theme support
- Checkout page with order summary, quantity controls, and proceed-to-checkout flow
- Right-hand cart summary panel for quick basket access

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- React Icons

## Project Structure

- `src/main.jsx` – app entry point
- `src/App.jsx` – application routes and layout wrapper
- `src/components/NavBar/NavBar.jsx` – header, navigation, search, theme toggle
- `src/components/Products/ProductListing.jsx` – product browsing and sorting
- `src/components/Checkout/Checkout.jsx` – checkout page and order summary
- `src/components/CartItems/RightCartPanel.jsx` – persistent cart panel
- `src/components/utils/cartUtil.js` – cart persistence and helpers
- `src/assets/data.json` – seeded product data

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local server URL shown in the terminal to view the app.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Notes

- The project uses Tailwind CSS with the `class` dark mode strategy.
- Cart data is stored in `localStorage` for persistence across page refreshes.
- Product details are passed through `localStorage` for the product details flow.
