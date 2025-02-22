# CoffeeShop-Website ☕🌍

Welcome to the **Coffee Shop Website** project! This repository contains the source code for a modern and interactive coffee shop website, perfect for showcasing your coffee shop’s menu and engaging with visitors. Built with **HTML**, **CSS**, and **JavaScript**, this website is designed with **responsiveness** in mind, ensuring it works smoothly on both mobile and large desktop screens.

---

## Table of Contents 📑

- [Features 🚀](#features)

- [Technologies Used 🛠️](#technologies-used)

- [Live Demo 🌐](#live-demo)

- [Installation Instructions ⚙️](#installation-instructions)

- [File Structure 📁](#file-structure)

- [Usage 💻](#usage)

- [Customization 🔧](#customization)

- [Contributing 🤝](#contributing)

- [Acknowledgments 🙏](#acknowledgments)

---

## Features 🚀

This project includes several amazing features designed to make your coffee shop website look and feel professional:

- **Responsive Design** 📱: The website is built to be mobile-first, ensuring it looks great on devices ranging from phones and tablets to large desktop displays (with special handling for 2K resolutions).

- **Interactive Navigation** 🔄: A dynamic navigation bar that adapts depending on screen size. It includes a hamburger-style menu for smaller screens.

- **Eye-Catching Home Page** 🏠: Featuring vibrant images of coffee-related items like coffee beans, ice cubes, and cups, making the homepage visually appealing.

- **Product Showcase** 🛍️: A section dedicated to displaying popular coffee products with smooth hover effects and clear descriptions, including pricing and a quick action button.

- **Contact Page** 📞: A simple and easy-to-use contact form to help your customers get in touch with you, with social media links for better engagement.

- **CSS Animations & Hover Effects** ✨: Elegant animations for elements on the page to keep users engaged and provide a modern, smooth user experience.

- **SwiperJS for Product Carousel** 🌀: An interactive product carousel using SwiperJS, offering a smooth and responsive image slider.

- **ScrollReveal Animations** 🎬: Animations and effects applied as the user scrolls down the page, making the site feel dynamic and engaging.

- **Well-Organized Structure** 🗂️: The code is clean, structured, and easy to follow, making it a great base for further development.

---

## Technologies Used 🛠️

This project utilizes the following technologies:

- **HTML5** 📝: Used for creating the structure of the website.

- **CSS3** 🎨: For styling and building a responsive design with the help of CSS Grid, Flexbox, and Media Queries.

- **JavaScript** ⚙️: For adding interactivity like the navigation menu toggle and other dynamic behaviors.

- **SwiperJS** 🔄: A modern mobile touch slider library used for creating smooth, responsive carousels on the homepage to display popular products.

- **ScrollReveal** 🌟: A powerful animation library to reveal elements on scroll, providing smooth entrance animations for various sections on the website.

- **CSS Variables** 🌈: For global design properties like color, font sizes, and spacing, allowing easy customization.

- **CSS Grid and Flexbox** 🧩: These layout techniques are used to create flexible and responsive designs that adjust to different screen sizes.

---

## Live Demo 🌐

Check out the live demo of the Coffee Shop Website by clicking the link below! You can interact with the product carousel, scroll through animations, and explore all the features.

🔗 **[Live Demo - Coffee Shop Website](https://your-live-demo-link.com)**

Feel free to explore the design and functionality of the website, and see how the dynamic effects and interactive elements work in real-time.

---

## Installation Instructions ⚙️

To set up the Coffee Shop Website on your local machine, follow these steps:

### Step 1: Clone the repository.

Use Git to clone the repository to your local machine. Open your terminal and run:

```bash
git clone https://github.com/sudhanshu-j/coffee-shop-website.git
```

### Step 2: Navigate to the project folder.

Move into the project directory:

```bash
cd coffee-shop-website
```

### Step 3: Open the project in a code editor.

Open the `index.html` file in your preferred web browser. You should see the website display and be able to interact with it.

```bash
open index.html  # For MacOS
start index.html  # For Windows
```

You can now start modifying and customizing the website as needed! 🎉

---

## File Structure 📁

Here is the breakdown of the file structure in this project:

```bash
/coffee-shop-website
  ├── index.html             # The main HTML file with the structure of the website
  ├── style.css              # The CSS file for all the styling and responsive design
  ├── main.js                # JavaScript for interactive features like menu toggle and button actions
  ├── images/                # Folder containing all the images used in the project (coffee, beans, cups, etc.)
  ├── README.md              # This markdown file with detailed documentation
  ├── LICENSE                # The open-source license (MIT License) for contributing
  └── libs/                  # Folder containing external libraries (SwiperJS, ScrollReveal)
      ├── swiper.min.js      # SwiperJS library for image sliders
      └── scrollreveal.min.js# ScrollReveal library for scroll animations
```

---

## Usage 💻

### Home Page 🏠

The **homepage** is the first thing users will see. It features a clean, vibrant layout with a **hero section** showcasing coffee beans, cups, and other visually appealing elements. As users scroll, they’ll encounter the following sections:

- **Introduction Text** 📜: An introductory section about your coffee shop.

- **Popular Products** 🛍️: Cards showing popular coffee products, each with images and
  pricing.

- **Interactive Elements** ✨: Dynamic visual elements like beans, ice cubes, and coffee shapes that move and animate as users scroll.

---

### Navigation 🌐

On smaller screens (mobile and tablet), the **navigation bar** is collapsed into a **hamburger menu** for a cleaner layout. On larger screens, the navigation items are displayed in a row.

- **Navigation Toggle** 🍔: A hamburger icon appears on smaller screens for easy access to the menu.

- **Link Highlighting** 🔗: Links on the navigation bar are highlighted on hover to provide visual feedback.

---

### Product Section 🛒

The **product section** displays a series of coffee options, each represented by a **product card** containing an image, name, price, and description. Visitors can interact with these cards for more information.

- **Product Cards** 🏷️: Each product card has an image, a title, a price, and a button (like "Add to Cart").

- **Hover Effects** ✨: Products react to user interaction with smooth hover animations.

---

### SwiperJS Carousel 🌀

The **SwiperJS** library powers the **product carousel** on the homepage. This carousel allows users to swipe through popular coffee products or featured items smoothly on both mobile and desktop devices.

- **Horizontal Swiping** ⬅️➡️: Allows users to swipe through product cards horizontally on smaller screens.

- **Navigation Buttons** 🔲: Optional buttons (next/previous) to navigate through the carousel.

---

### ScrollReveal Animations 🎬

The **ScrollReveal** library adds smooth entrance animations to various sections as users scroll down the page, enhancing the user experience with dynamic visual effects.

- **Reveal Effects** 👀: Elements fade in, slide up, or bounce as they come into view, keeping the website engaging and visually dynamic.

---

### Customization 🔧

This website is highly customizable! You can adjust the design and functionality with ease by modifying the **style.css** and **main.js** files.

#### Changing the Theme 🎨

To adjust the colors and fonts of the site, update the **CSS variables** defined in the `style.css` file:

```css
:root {
  --primary-color: #ff6347; /* Set your main brand color */
  --secondary-color: #fff; /* Background color for most text areas */
  --normal-font-size: 16px; /* Default font size */
  --header-height: 60px; /* Height of the header */
}
```

#### Adding New Products 🛒

To add new products to the "Popular Products" section, you can simply copy and modify one of the existing product card elements inside the HTML:

```bash
<div class="popular-card">
  <div class="popular-shape">
    <img src="images/coffee-product.jpg" alt="Coffee Product" />
  </div>
  <div class="product-data">
    <h3 class="product-name">New Coffee Blend</h3>
    <p class="product-price">$15.99</p>
    <button class="product-button">Add to Cart</button>
  </div>
</div>
```

Just update the image, name, and price to reflect the new product!

---

## Contributing 🤝

We welcome contributions to improve this project! If you'd like to contribute, please follow these steps:

1. **Fork the repository** by clicking the "Fork" button on GitHub.

2. **Clone your fork** to your local machine.

3. **Create a new branch**: `git checkout -b feature-branch`.

4. **Make your changes** and test them locally.

5. **Commit your changes**: `git commit -am 'Add new feature'`.

6. **Push to your fork**: `git push origin feature-branch`.

7. **Create a pull request** on GitHub.

---

## Acknowledgments 🙏

A special thanks to:

- **RemixIcons** for their awesome icons used throughout the site.

- **SwiperJS** for the interactive carousels and sliders.

- **ScrollReveal** for the smooth scroll animations that enhance the user experience.

---

Thank you for checking out the **Coffee Shop Website**! Feel free to explore, modify, and contribute to this project. Happy coding! 😄🌟
