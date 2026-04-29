# 🐕 Dog Arena — Premium Dog Selling Platform

A modern, mobile-responsive, and production-ready dog selling website. Built with a focus on high-end aesthetics, smooth interaction, and easy content management.

---

## 🚀 Quick Launch
This is a static web application. To view the site:
1.  Open `index.html` in any modern web browser.
2.  (Optional) For the best experience, use a local development server (like VS Code "Live Server").

---

## 🛠️ Tech Stack
-   **Structure**: Semantic HTML5
-   **Styling**: Tailwind CSS (via Play CDN) + Custom CSS enhancements
-   **Logic**: Vanilla JavaScript (ES6+)
-   **Typography**: *Playfair Display* (Headings) & *Lato* (Body)

---

## ⚙️ How to Maintain Content
The website is designed for easy updates without touching the core logic. All data is managed in three central files:

### 1. [`config.js`](./config.js) — *Contact & Site Settings*
Change your WhatsApp number, phone, email, and modal button text here.
```javascript
const shopConfig = {
    whatsapp: { number: "234..." },
    phone: "+234...",
    email: "hello@dogarena.com"
};
```

### 2. [`products.js`](./products.js) — *Dog Catalog*
Add or edit dogs here. Products are automatically classified into **Available Now** and **Recently Listed** based on their `New` date.
-   `New`: Set to today's date (YYYY-MM-DD) to show in **Available Now**.
-   `New`: Set to yesterday's date to show in **Recently Listed**.
-   `New`: Older dates are hidden from the main sections.
-   **All Products** always shows everything.

### 3. [`events.js`](./events.js) — *Upcoming Events*
Manage dog events (shows, adoption fairs, breed showcases, etc.) here. They appear in a clean grid at the bottom of the page.

---

## ✨ Features
-   **Horizontal Auto-Scroll**: The "All Products" section features an infinite marquee animation.
-   **Product Details Modal**: Clicking a dog listing opens a beautiful popup with a direct WhatsApp inquiry link.
-   **Mobile First**: Fully responsive navigation with a custom hamburger menu.
-   **Zero-State Messages**: If a section is empty, it shows a friendly "no dogs available" message with a WhatsApp button.
-   **High Performance**: Lazy-loaded images and optimized Tailwind utility classes.

---

## 📂 File Structure
-   `index.html`: Main page structure.
-   `styles.css`: Custom animations and Tailwind overrides.
-   `script.js`: Core rendering logic and interactions.
-   `images/`: Directory for dog and event photos.

---

*© 2026 Dog Arena · Your Perfect Companion Awaits*
