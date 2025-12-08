# Core Functionality
## Task Management
	•	Create, read, update, delete tasks
	•	Each task has: title, description (optional), due date (optional), priority level, completion status
	•	Mark tasks complete/incomplete
	•	Delete completed tasks (bulk option)

## Organization
	•	Categories or tags for grouping tasks
	•	Filter by: completion status, priority, category
	•	Sort by: due date, priority, creation date, alphabetical
	•	Search functionality

## User Management
	•	Each user has isolated task list

## Stretch Goals
	•	Routing
	•	Move to data base and fetch
	•	Paginate task lists if count exceeds reasonable threshold (50-100)
	•	Use RxJS and observables (maybe a store?)
	•	Lazy load task details if needed

# Data Model
User:
- user_id (unique)
- username

Task:
- id (unique)
- user_id (foreign key)
- title (required)
- description
- due_date
- priority (low/medium/high)
- is_completed (boolean)
- category (personal, work)
