# Portfolio Website

## Overview

This is a personal portfolio website for Tharun M, built as a full-stack application showcasing his software engineering skills and experience. The application is structured as a modern web application with a React frontend and Express backend, featuring a clean, responsive design with dark/light theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state, React Context for UI state
- **Animations**: Framer Motion for smooth transitions and interactions
- **Theme**: Custom theme system with dark/light mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage (development) with plans for PostgreSQL sessions
- **API Pattern**: RESTful API endpoints

## Key Components

### Frontend Components
- **Navigation**: Responsive navbar with smooth scrolling to sections
- **Sections**: Modular portfolio sections (Hero, About, Experience, Skills, Projects, Contact)
- **UI Library**: Comprehensive component library from shadcn/ui
- **Forms**: Contact form with validation and submission handling
- **Animations**: Intersection observer-based animations for section reveals

### Backend Components
- **Routes**: API endpoints for contact form submission
- **Storage**: Abstracted storage layer with in-memory implementation
- **Development Tools**: Vite integration for hot module replacement
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users**: Basic user table (id, username, password)
- **Contact Messages**: Table for storing contact form submissions (id, name, email, subject, message, createdAt)
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client Request**: User interacts with portfolio sections or submits contact form
2. **API Call**: Frontend makes HTTP requests to Express backend
3. **Validation**: Server validates incoming data using Zod schemas
4. **Storage**: Data is stored using the abstracted storage interface
5. **Response**: Server returns success/error responses to client
6. **UI Update**: Frontend updates UI based on response and shows toast notifications

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Animation**: Framer Motion for smooth animations
- **Forms**: React Hook Form with Hookform Resolvers
- **HTTP Client**: Native fetch API with TanStack Query wrapper

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: PostgreSQL via Neon serverless, Drizzle ORM
- **Development**: Vite for frontend bundling, ESBuild for backend building
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking

## Deployment Strategy

### Development Environment
- **Frontend**: Vite development server with HMR
- **Backend**: tsx for TypeScript execution with auto-restart
- **Database**: Environment-based PostgreSQL connection
- **Integration**: Vite middleware integration for seamless development

### Production Build
- **Frontend**: Vite build process generating static assets
- **Backend**: ESBuild compilation to single JavaScript file
- **Database**: Drizzle migrations for schema management
- **Deployment**: Single Node.js process serving both API and static files

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection
- **Build Scripts**: Separate development and production npm scripts
- **Asset Handling**: Vite handles frontend assets, Express serves them in production

The architecture supports easy scaling and deployment while maintaining a clean development experience with hot reloading and type safety throughout the stack.