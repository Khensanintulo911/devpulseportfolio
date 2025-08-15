# Overview

This is a full-stack portfolio application built with React frontend and Express.js backend. The application showcases a developer's profile, projects, and contact information with a clean, modern design. It features a responsive layout with sections for about, projects, and contact, along with an editable profile system. The application uses in-memory storage for development and is configured to use PostgreSQL with Drizzle ORM for production deployments.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend uses React with TypeScript and is built with Vite for fast development and optimized production builds. The application follows a component-based architecture with:

- **UI Framework**: Uses Radix UI components with shadcn/ui for consistent, accessible design components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React Query (TanStack Query) for server state management and API data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
The backend is built with Express.js and follows a RESTful API pattern:

- **Server Framework**: Express.js with TypeScript for type safety
- **Data Layer**: Abstracted storage interface that currently uses in-memory storage for development
- **API Structure**: RESTful endpoints for profile management (`GET /api/profile`, `PUT /api/profile`)
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Development Features**: Hot module replacement with Vite integration for seamless development experience

## Data Storage Solutions
The application uses a flexible storage architecture:

- **Development**: In-memory storage with default profile data for quick setup
- **Production Ready**: Drizzle ORM configured for PostgreSQL with proper schema definitions
- **Database Schema**: Users and profiles tables with proper relationships and constraints
- **Migration Support**: Drizzle Kit for database schema management and migrations

## Authentication and Authorization
Currently implements a basic structure for user management:

- **User Schema**: Username/password based authentication schema defined
- **Profile Management**: Separate profile system for managing public-facing information
- **API Security**: Basic error handling and request validation in place

## External Dependencies

### Core Technologies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for Node.js
- **TypeScript**: Type safety across the entire application
- **Vite**: Build tool and development server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Accessible component primitives for building the UI
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography

### Data and State Management
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation for type-safe data handling
- **Drizzle ORM**: Type-safe SQL ORM for database operations

### Database and Infrastructure
- **PostgreSQL**: Primary database (via @neondatabase/serverless)
- **Drizzle Kit**: Database schema management and migrations
- **Connect PG Simple**: Session store for PostgreSQL

### Development Tools
- **Replit Integration**: Development environment optimizations
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx & class-variance-authority**: Dynamic className generation
- **cmdk**: Command palette functionality
- **Wouter**: Lightweight routing solution