# 🛒 Smart Academy Tailwind Cart App

A simple cart UI built with **Next.js**, **React**, and **Tailwind CSS**. This project fetches cart data from an external API and displays products along with pricing and totals in a clean, responsive layout.

---

## 🚀 Tech Stack

* **Next.js 16**
* **React 19**
* **Tailwind CSS 4**
* **ESLint**

---

## 📦 Features

* Fetches cart data from a public API (`https://dummyjson.com/carts/1`)
* Displays:

  * Product image
  * Title
  * Quantity & price
  * Total per product
* Shows cart summary:

  * Total items
  * Total quantity
  * Discounted total price
* Responsive UI (mobile + desktop)
* Styled with Tailwind CSS utility classes

---

## 📁 Project Structure

```
/app
  └── page.jsx   # Main Home component
/public          # Static assets
/styles          # Global styles (if applicable)
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/smart-academy-tailwind-four.git
cd smart-academy-tailwind-four
```

Install dependencies:

```bash
npm install
```

---

## 🧑‍💻 Development

Run the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🏗️ Build & Production

Build the app:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---

## 🔍 Code Overview

### Data Fetching

The app uses `useEffect` to fetch cart data:

```js
useEffect(() => {
  fetch("https://dummyjson.com/carts/1")
    .then((resp) => resp.json())
    .then((res) => setCart(res));
}, []);
```

---

### State Management

```js
const [cart, setCart] = useState(null);
```

* Stores cart data
* Initially `null` until API response arrives

---

### Rendering Products

```js
cart?.products?.map((product) => (...)
```

* Uses optional chaining to prevent runtime errors
* Iterates through products and renders UI cards

---

### Cart Summary

```js
cart?.discountedTotal.toFixed(2)
```

* Displays formatted totals
* Includes discount calculation from API

---

## 🎨 Styling

* Tailwind CSS utility classes
* Responsive layout using:

  * `flex`
  * `sm:` breakpoints
* Card-based UI with shadows and rounded corners

---

## 📌 Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```

---

## 🧪 Linting

Run ESLint:

```bash
npm run lint
```

---

## 📡 API Used

* DummyJSON Cart API
  https://dummyjson.com/carts/1

---

## ⚠️ Notes / Improvements

* Add loading state while fetching data
* Add error handling for API failures
* Improve accessibility (ARIA labels, alt text enhancements)
* Add cart interactions (remove item, update quantity)
* Integrate real backend or database

---

## 📄 License

This project is private and created for educational purposes.

---

## 👨‍💻 Author

Developed as part of Smart Academy training.
