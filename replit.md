# Glow Frame Initiative - Application Platform

## Overview

The Glow Frame Initiative is a modern web application built for a 501(c)(3) non-profit organization dedicated to empowering young adults from underserved communities in Arizona through film and AV industry training. The platform serves as both an informational website and application portal for workshop programs, with integrated donation processing capabilities.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server components:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM
- **Payment Processing**: Stripe integration for donations
- **Build System**: Vite for frontend bundling and esbuild for server bundling
- **Deployment**: Replit autoscale deployment with PostgreSQL module

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom color scheme (glow-gold, electric-blue themes)
- **Forms**: React Hook Form with Zod validation
- **Payment UI**: Stripe React components for donation processing

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful endpoints for applications and donations
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Payment Processing**: Stripe server-side integration
- **Storage Abstraction**: Interface-based storage layer with in-memory fallback

### Database Schema
- **users**: Basic user authentication (id, username, password)
- **applications**: Comprehensive workshop application data with demographics, interests, and goals
- **donations**: Payment tracking with Stripe integration (amount, email, status, payment intent ID)

## Data Flow

1. **Application Submission**: Client form → validation → API endpoint → database storage
2. **Donation Processing**: Client payment form → Stripe payment intent creation → payment confirmation → database record
3. **Content Delivery**: Static content served from components with smooth scrolling navigation
4. **Development**: Vite dev server with hot module replacement and error overlay

## External Dependencies

### Payment Processing
- **Stripe**: Complete payment infrastructure for donation processing
- **Environment Variables**: `STRIPE_SECRET_KEY` and `VITE_STRIPE_PUBLIC_KEY` required

### Database
- **PostgreSQL**: Primary database with connection via `DATABASE_URL`
- **Neon Database**: Serverless PostgreSQL adapter for cloud deployment

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first styling framework

## Deployment Strategy

The application is configured for Replit's autoscale deployment:

- **Development**: `npm run dev` starts both Vite dev server and Express API
- **Production Build**: Vite builds client assets, esbuild bundles server
- **Runtime**: Node.js server serves API and static files
- **Database**: PostgreSQL module provides managed database instance
- **Environment**: Production and development configurations with appropriate middleware

## Changelog

```
Changelog:
- June 19, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```