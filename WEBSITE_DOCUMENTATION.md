# IZAD Systems - Website Documentation

## Overview
This document outlines the architecture, design system, functionality, and component structure of the IZAD Systems website built to date. It serves as a central reference for the current state of the codebase.

## Technology Stack
- **Framework:** React 18 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React
- **Routing:** React Router DOM

## Design System & Aesthetics
- **Theme:** Ultra-luxury, premium dark mode, glassmorphism, and deep 3D space aesthetics.
- **Color Palette:** 
  - Backgrounds: Deep black (`#050505`, `bg-black`) with subtle atmospheric blue radial gradients.
  - Primary Brand: Electric Blue spectrum (`brand-300` to `brand-600` / mapped to Tailwind's `sky` colors).
- **Typography:** Bold, tightly tracked display fonts for headings (`font-display`, `tracking-tighter`), and clean sans-serif for body copy.
- **UI Effects:** Heavy use of `backdrop-blur` for frosted glass, inner/outer `box-shadow` for neon glows, and 3D CSS transforms (`rotateX`, `rotateZ`, `translateZ`) for depth.

## Application Routing (Pages)
- **`/` (Home):** The main landing page. Features the dynamic Hero, Services accordion, About preview, FAQ, and CTA.
- **`/services` (Our Services):** Dedicated page detailing the 3 core system offerings.
- **`/about` (About Us):** Dedicated page explaining the agency's mission ("Why We Build Real Systems"), featuring the 3D Systems Core animation.
- **`/pricing` (Pricing):** 3-tier glassmorphic pricing structure (Core System, Growth System, Scale System).
- **`/contact` (Contact):** Lead capture and booking page.

## Core Features & Components

### 1. The AI Voice Widget (`AIVoiceButton.tsx`)
A globally available, highly interactive simulated AI voice button fixed to the bottom right of the screen.
- **Dynamic Sizing:** Uses `useLocation` and scroll event listeners. On the Home page, it starts massive in the hero section and shrinks elegantly upon scrolling down. On all other pages (Services, About, Pricing), it defaults to a permanently "very small", unobtrusive pill size.
- **Interactive Call Sequence:** Simulates a real AI call flow when clicked:
  - `idle`: "Just talk in english" (with brand-blue highlight on 'english').
  - `connecting` (2s delay): Turns bright Green with "CONNECTING...".
  - `listening` (4s delay): Turns bright Red with "LISTENING..." and animated sonar radar pulses emitting from the widget.
  - `speaking` (5s delay): Turns Brand Blue with "ASSISTANT IS SPEAKING...".
  - `ended`: "SPEAK AGAIN".

### 2. The Hero Section (`Hero.tsx`)
Features a dynamic dual-typewriter effect using Framer Motion, cleanly stacked with no vertical gaps.
- **Line 1:** Fixed white "We build" followed by blue typing: "Website systems", "AI receptionist", "Booking systems".
- **Line 2:** Fixed white "For" followed by blue typing: "Med Spas", "Dental clinics", "Beauty salons", "Contractors".
- Contains the primary "Book online" CTA with a luxury glowing hover effect (no arrows).

### 3. Interactive Services Section (`Services.tsx`)
Displays the 3 core offers via an interactive accordion on the left, paired with pure CSS 3D motion graphics on the right.
- **Website System:** A 3D isometric stack of layered glass planes that float up and down.
- **Voice AI Receptionist:** A "Siri-like" 3D animated blob with multi-colored shifting gradients (cyan, blue), floating behind a glass core with active audio equalizer bars and emitting sound rings.
- **Automated Booking System:** A 3D isometric 3x3 grid of glass calendar tiles undulating along the Z-axis.

### 4. About "Real Systems" Section (`About.tsx`)
Explains the agency's mission to kill inefficiency, omitting the standard "agency hype" rhetoric.
- **3D Isometric Systems Core:** A complex, pure CSS 3D animation housed in a compact square frame. It features three floating layers (Cloud Interface, Processing Core with spinning plasma, and Data Grid) connected by vertical glowing data streams.

### 5. Global Navigation (`Navbar.tsx` & `Footer.tsx`)
- **Navbar:** Sticky, glassmorphic top bar with desktop links and a mobile hamburger menu. Includes a highly visible "Book online" CTA.
- **Footer:** Deep glassmorphic (`backdrop-blur-2xl`) footer containing the logo, menu links (Home, Our Services, About Us, Pricing, Contact), and legal links.

## The 3 Core Offers
The entire website copy and structure has been consolidated to strictly sell these 3 systems:
1. **Website Systems**
2. **Voice AI** (AI Receptionist)
3. **Booking Systems**
