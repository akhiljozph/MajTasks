# Proman - Project Management System

A full-stack monorepo project for project management using React, NestJS, Prisma, PostgreSQL, Redis, and Docker.

## Prerequisites

- Node.js 20+
- pnpm 8+
- Docker & Docker Compose

## Local Development

### 1. Install dependencies
```bash
pnpm install
```

### 2. Start databases
```bash
docker-compose up -d
```

### 3. Setup database
```bash
cd packages/database
pnpm generate
pnpm migrate
```

### 4. Start development servers
```bash
# From root directory
pnpm dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Prisma Studio: `cd packages/database && pnpm studio`

## Production Build

### Build with Docker
```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Build locally
```bash
pnpm build
```

## Project Structure
```
proman/
├── apps/
│   ├── backend/          # NestJS
│   └── Frontend/          # React
├── packages/
│   └── database/     # Prisma schema & client
├── docker-compose.yml
├── docker-compose.prod.yml
└── pnpm-workspace.yaml
```

# Planning to reqamp this.