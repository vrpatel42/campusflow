# CampusFlow

A cloud-ready student productivity platform built to demonstrate software engineering fundamentals for Amazon SDE internship applications.

## Why this project exists

CampusFlow helps students organize assignments, notes, and priorities in one place. The first release focuses on a clean REST API, typed frontend, database-backed CRUD operations, testing, containerization, and CI.

## Tech stack

- Frontend: React, TypeScript, Vite
- Backend: Node.js, Express, TypeScript
- Database: PostgreSQL with Prisma ORM
- Testing: Vitest and Supertest
- DevOps: Docker, Docker Compose, GitHub Actions
- Planned cloud deployment: AWS

## Current MVP

- Health-check API
- Task creation and retrieval
- Typed frontend API client
- PostgreSQL schema
- Backend unit/integration test foundation
- Dockerized local development
- Continuous integration workflow

## Planned milestones

1. Authentication and user accounts
2. Task CRUD with priority, status, and due dates
3. Search and filtering
4. Notes module
5. AI note summarizer
6. AWS deployment and monitoring

## Architecture

```text
React + TypeScript
        |
        | REST/JSON
        v
Express + TypeScript
        |
        | Prisma ORM
        v
PostgreSQL
```

## Local setup

### Requirements

- Node.js 20+
- Docker Desktop

### Start PostgreSQL

```bash
docker compose up -d db
```

### Backend

```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run dev
```

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## API

### Health check

```http
GET /api/health
```

### List tasks

```http
GET /api/tasks
```

### Create a task

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Finish data structures review",
  "description": "Review hash maps and binary trees",
  "priority": "HIGH",
  "dueDate": "2026-08-15T23:59:00.000Z"
}
```

## Resume-ready direction

After deployment and completion, this project can support a bullet such as:

> Engineered a full-stack student productivity platform using React, TypeScript, Express, PostgreSQL, and Prisma; designed REST APIs, automated tests, Docker-based development, and CI workflows for reliable delivery.

Do not use this bullet until the related features are implemented and verified.
