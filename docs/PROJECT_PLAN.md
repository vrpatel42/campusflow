# CampusFlow Project Plan

## Product goal

Create an interview-ready, cloud-deployable application that demonstrates:

- Object-oriented and modular design
- REST API development
- SQL database modeling
- Testing and debugging
- Git-based collaboration
- CI/CD fundamentals
- Cloud deployment
- Operational awareness

## Scope rules

The project is intentionally narrow. Every feature must strengthen at least one Amazon SDE qualification.

## Sprint 1: Foundation and task API

### Deliverables

- Repository initialized
- PostgreSQL running with Docker
- Prisma schema migrated
- Express server starts successfully
- `GET /api/health`
- `GET /api/tasks`
- `POST /api/tasks`
- Validation and error handling
- Backend tests
- Basic React dashboard

### Definition of done

- Code compiles with no TypeScript errors
- Tests pass
- README instructions work
- Commits use descriptive messages
- Pull request opened and reviewed before merge

## Sprint 2: Complete task management

- Update task
- Delete task
- Status transitions
- Priority and due-date filters
- Pagination
- Empty/loading/error states
- Additional tests

## Sprint 3: Authentication and ownership

- Register
- Login
- Password hashing
- JWT authentication
- User-specific tasks
- Authorization tests

## Sprint 4: Notes and AI feature

- Notes CRUD
- Search
- AI summary endpoint
- Prompt safety and error handling
- Usage limits

## Sprint 5: Production readiness

- AWS deployment
- Environment configuration
- Logging
- CloudWatch monitoring
- CI/CD deployment workflow
- Architecture diagram
- Demo video
- Resume bullets
