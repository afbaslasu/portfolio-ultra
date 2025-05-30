# Portfolio Project 1 - Showcase

## Overview

This responsive portfolio showcase features a dynamic grid layout that adapts to different screen sizes, with filtering capabilities to display projects by category. Built with Tailwind CSS, it provides an elegant solution for presenting creative work in a clean, modern interface.

## Key Features
Fully Responsive Design:

1 column on mobile

2 columns on tablets

3 columns on desktops

4 columns on large screens

🔍 Category Filtering: Filter projects by HTML, Photoshop, Wordpress, or Mobile

🎨 Hover Effects: Elegant overlay animation on project hover

📐 Consistent Sizing: Uniform card dimensions across all screen sizes

🚀 Lightweight: Pure HTML/CSS with minimal JavaScript

Installation & Usage
Include Tailwind CSS in your project:

html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
Copy the portfolio section HTML into your project file

Add the JavaScript for filtering functionality

## File Structure

portfolio-showcase/
├── index.html           # Main HTML file
├── script.js            # JavaScript for filtering
├── README.md            # Project documentation
└── screenshot.png       # Project screenshot

## Customization Options
Change Colors:

html
<!-- Primary color -->
<div class="bg-primary"> → <div class="bg-blue-600">
<!-- Background color -->
<section class="bg-light"> → <section class="bg-gray-100">
Adjust Card Height:

html
<div class="h-64"> → <div class="h-48"> <!-- For shorter cards -->
<div class="h-64"> → <div class="h-80"> <!-- For taller cards -->
Add More Categories:

html
<!-- Add new filter button -->
<button class="filter-button ..." data-filter=".new-category">New Category</button>

<!-- Add category to portfolio items -->
<div class="portfolio-item new-category ...">
Responsive Behavior
Screen Size	Columns	Breakpoint Classes
Mobile (<768px)	1	grid-cols-1
Tablet (≥768px)	2	md:grid-cols-2
Desktop (≥1024px)	3	lg:grid-cols-3
Large (≥1280px)	4	xl:grid-cols-4
Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Mobile Safari

Chrome for Android

License
This project is licensed under the MIT License - see the LICENSE file for details.

Credits
Images from Unsplash

UI built with Tailwind CSS


