# Glow Frame Initiative Website

## Overview

A sophisticated website for the Glow Frame Initiative following ghettofilm.org's design patterns with dark minimalist aesthetic, multimedia showcases, and comprehensive program information. The platform serves as both an informational website and application portal for workshop programs, with integrated donation processing capabilities for the 501(c)(3) non-profit organization dedicated to empowering young adults from underserved communities in Arizona through film and AV industry training.

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

## Recent Changes

### Board Member Integration (June 19-20, 2025)
- ✓ Added comprehensive leadership team template to About page
- ✓ Created professional board member cards with headshot placeholders
- ✓ Implemented color-coded role hierarchy (founders in glow-gold, key positions in electric-blue)
- ✓ Added responsive 3-column grid layout for optimal viewing across devices
- ✓ Expanded to include 13 total leadership team members with latest additions
- ✓ Added D'Aaron Battle (Director of Community Programming), John Diaz (Content Specialist/Instructor), and Ruben "Fleek" Anderson (Director of Marketing)
- ✓ Reorganized leadership team into three distinct sections: Board Members, Staff, and Founders
- ✓ Structured hierarchy with Board Members first, Staff second, and Founders positioned at bottom
- ✓ Ready for professional headshot integration when photos become available

### User Experience and Navigation (June 19, 2025)
- ✓ Fixed all image loading issues by copying proprietary assets to public directory
- ✓ Updated workshop fliers to display complete content without cropping using object-contain
- ✓ Improved Programs page layout to show full fliers alongside detailed workshop information
- ✓ Enhanced scrollable design - users can view complete content without clicking for enlargement
- ✓ Applied IMG_6436.jpeg as background for Mission Statement section with proper overlay
- ✓ Added privacy disclaimer to application form with clear data usage policies
- ✓ Implemented automatic scroll-to-top functionality for all page navigation
- ✓ Optimized all site images for better visibility and user experience

### Database Integration (June 19, 2025)
- ✓ Added PostgreSQL database with Drizzle ORM integration
- ✓ Replaced in-memory storage with persistent database storage
- ✓ Created database tables for users, applications, and donations
- ✓ Maintained existing API interface for seamless data layer transition
- ✓ Ensured form submissions are now permanently stored

### Navigation Architecture (June 19, 2025)
- ✓ Restructured from single-page to multi-page navigation system
- ✓ Created minimalist landing page with clear call-to-action cards
- ✓ Built dedicated pages for About, Programs, Community, Resources, Events, Get Involved
- ✓ Updated all components to use proper routing instead of scroll navigation
- ✓ Fixed footer links to work with new page structure

### Design Implementation (June 19, 2025)
- ✓ Implemented ghettofilm.org-inspired dark minimalist design with black backgrounds and white typography
- ✓ Added Glow Frame logo styling with bordered rectangular frame aesthetic
- ✓ Integrated golden yellow (#FFD700) and electric blue (#00BFFF) accent colors from blueprint specifications
- ✓ Applied Montserrat font family throughout for modern geometric look
- ✓ Created responsive navigation with smooth scrolling between sections

### Content Structure (June 19, 2025)
- ✓ Built comprehensive homepage with hero, about, programs, community, application, and donation sections
- ✓ Integrated workshop categories: Content Creation, Audio Production, AV Staging, Camera & Lighting, Grip & Electric, Filmmaking
- ✓ Added comprehensive application form with demographics, interests, and goals tracking
- ✓ Implemented sponsor recognition section with project partners
- ✓ Created equipment donation information alongside financial donations
- ✓ Transformed application section to target industry partners seeking emerging talent
- ✓ Separated individual apprenticeship signups (community page) from business partnerships (application section)
- ✓ Added apprentice interest inquiry form and equipment donation contact form with proper validation

### Technical Foundation (June 19, 2025)
- ✓ Set up React frontend with TypeScript and Wouter routing
- ✓ Implemented Express.js backend with PostgreSQL database
- ✓ Added Stripe integration framework (requires API keys for activation)
- ✓ Built form validation with React Hook Form and Zod schemas
- ✓ Configured responsive design with Tailwind CSS and shadcn/ui components

## User Preferences

```
Preferred communication style: Simple, everyday language.
```