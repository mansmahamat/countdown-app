# Countdown App

A responsive countdown timer application built with Angular 19 and TypeScript.

## Features

- **Responsive countdown timer** with auto-fitting text
- **Event management** with local storage persistence  
- **Canvas confetti animation** when countdown reaches zero
- **Adaptive input sizing** for long event names
- **Mobile-optimized** for portrait and landscape orientations

## Quick Setup

```bash
npm install
ng serve
```

Open `http://localhost:4200`

## Tech Stack

- **Angular 19** (Standalone components)
- **TypeScript**
- **Canvas Confetti** for celebrations
- **Local Storage** for persistence
- **CSS Clamp** for responsive typography

## Project Structure

```
src/app/
├── features/
│   ├── countdown/          # Timer display component
│   └── event-form/         # Event input form
├── core/
│   └── services/           # Countdown logic & storage
└── shared/                 # (empty - cleaned up)
```

## Development

```bash
npm start              # Development server
npm run build          # Production build
npm test               # Unit tests
```

## Key Components

- **CountdownComponent**: Real-time timer with confetti trigger
- **EventFormComponent**: Auto-resizing input fields  
- **CountdownService**: Time calculation logic
- **StorageService**: Local persistence

Built with modern Angular patterns: standalone components, reactive forms, and CSS clamp for responsive design.
