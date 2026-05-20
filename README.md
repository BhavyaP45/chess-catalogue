# Bhavya's Chess Catalogue

Bhavya's Chess Catalogue is a beginner-friendly chess resource website built with HTML, CSS, Bootstrap, and vanilla JavaScript. It introduces the rules of chess, explains common terminology, and walks players through practical opening ideas with interactive move trainers.

The project was created for the MYP Personal Project as part of the IB program. It also served as a hands-on way to practice responsive layouts, Bootstrap components, scroll animations, and JavaScript-driven page interactions.

![Bhavya's Chess Catalogue preview](https://github.com/BhavyaP45/chess-catalogue/assets/127996743/674c0db1-f504-49c2-974c-731d1da5154d)

## Features

- Rules guide covering the board, pieces, checkmate, castling, draws, and common chess terms.
- Opening catalogue split between White and Black opening choices.
- Interactive move trainers for:
  - London System
  - Caro-Kann Defense
  - Nimzo-Indian Defense
- Opening pages with history, key ideas, common variations, and annotated move sequences.
- Scroll-triggered entrance animations using Animate.css and the Intersection Observer API.
- Custom visual style with chess-themed imagery, SVG icons, and responsive Bootstrap layouts.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Animate.css
- Google Fonts

## Bootstrap Usage

Bootstrap is used throughout the site for responsive layouts, navigation, cards, buttons, dropdowns, accordions, and spacing utilities. The project loads Bootstrap 5.0.2 from the jsDelivr CDN, which keeps the repository lightweight and removes the need to store Bootstrap's local `dist` files in the project.

## Project Structure

```text
.
|-- HOME PAGE.html              # Landing page
|-- RULES PAGE.HTML             # Chess rules and terms
|-- OPENINGS PAGE.html          # Opening catalogue introduction
|-- WHITE OPENINGS PAGE.html    # White opening selection
|-- BLACK OPENINGS PAGE.html    # Black opening selection
|-- LONDON SYSTEM.html          # London System trainer and guide
|-- CARO KANN.html              # Caro-Kann trainer and guide
|-- NIMZO INDIAN.html           # Nimzo-Indian trainer and guide
|-- chesswebsite.css            # Shared site styles
|-- Animations.js               # Shared scroll animation logic
|-- London_System.js            # London System trainer logic
|-- Caro_Kann.js                # Caro-Kann trainer logic
|-- Nimzo_Indian.js             # Nimzo-Indian trainer logic
`-- Images/                     # Boards, icons, backgrounds, and opening images
```

## Running Locally

This is a static website, so no build step is required.

1. Clone or download the repository.
2. Open `HOME PAGE.html` in a browser.
3. Navigate through the site using the navbar.

For the best local development experience, use a simple static server such as the VS Code Live Server extension. Bootstrap is loaded from a CDN, so an internet connection is required for the Bootstrap styles and components to load.

## Pages

- `HOME PAGE.html` introduces the purpose of the catalogue and links into the learning resources.
- `RULES PAGE.HTML` teaches core rules and chess terms with accordion sections and diagrams.
- `OPENINGS PAGE.html` explains why openings matter and routes users toward White or Black openings.
- `LONDON SYSTEM.html`, `CARO KANN.html`, and `NIMZO INDIAN.html` provide opening-specific lessons and move trainers.

## Credits

Created by Bhavya Patel. Background artwork and visual assets include custom chess-themed imagery, with 3D models created in Blender.
