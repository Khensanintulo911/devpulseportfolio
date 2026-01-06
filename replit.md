# DevPulse Portfolio

A modern portfolio website showcasing skills and projects in full-stack development.

## Overview

This is a React + TypeScript frontend with Express backend portfolio application.

## Project Structure

- `client/` - React frontend with TypeScript
  - `src/components/` - UI components built with shadcn/ui
  - `src/pages/` - Page components using wouter for routing
  - `src/lib/` - Utility functions and query client
- `server/` - Express backend
  - `index.ts` - Server entry point (runs on port 5000)
  - `routes.ts` - API routes for profile management
  - `storage.ts` - In-memory storage for user and profile data
  - `vite.ts` - Vite dev server configuration
- `shared/` - Shared types and schemas using Drizzle + Zod

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query
- **Backend**: Express.js, TypeScript
- **Build**: Vite, tsx
- **Routing**: wouter

## Running the Project

The application runs via `npm run dev` which starts the Express server with Vite middleware on port 5000.

## API Endpoints

- `GET /api/profile` - Get the current profile
- `PUT /api/profile` - Update the profile

## User Preferences

None recorded yet.
