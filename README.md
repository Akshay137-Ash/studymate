# StudyMate — Student Task & Study Planner

StudyMate is a simple and responsive student productivity web application built with **React and JavaScript**.

It helps students organize their academic tasks, track study progress, manage priorities, and keep study notes in one place.

The project was developed as a **frontend-only React application** with a focus on simple, beginner-friendly code and a clean user experience.

---

## Features

### 📊 Dashboard

The Dashboard provides a quick overview of study progress.

It includes:

* Total number of tasks
* Completed tasks
* Pending tasks
* High-priority tasks
* Overall completion percentage
* Progress bar
* Tasks due today
* Recently added tasks
* Quick buttons for adding tasks and notes

The dashboard statistics update automatically when tasks are added, edited, completed, or deleted.

---

### ✅ Task Management

StudyMate provides complete task management functionality.

Users can:

* Add new tasks
* View existing tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed
* Mark completed tasks as pending
* Search tasks by title
* Filter tasks

Each task contains:

* Title
* Description
* Category
* Priority
* Due date
* Completion status

---

### 📚 Task Categories

Tasks can be organized into different categories:

* Study
* Assignment
* Exam
* Project
* Personal

This makes it easier to identify the type of work that needs attention.

---

### 🔥 Task Priorities

Each task can have one of three priority levels:

* Low
* Medium
* High

High-priority tasks are also highlighted in the Dashboard statistics and can be found using the High Priority filter.

---

### 🔎 Search and Filters

The Tasks section includes:

**Search**

* Search tasks by title.

**Filters**

* All
* Pending
* Completed
* High Priority
* Study
* Assignment
* Exam
* Project
* Personal

These options make it easier to find specific tasks quickly.

---

### 📝 Study Notes

StudyMate also includes a Notes section for storing useful study information.

Users can:

* Create notes
* View notes
* Edit notes
* Delete notes

Notes are useful for keeping short revision material, reminders, concepts, or important study information.

---

### 💾 Local Storage

StudyMate uses the browser's **localStorage** to save tasks and notes.

This means the user's data remains available even after refreshing the page.

The application uses:

* `localStorage.setItem()`
* `localStorage.getItem()`
* `JSON.stringify()`
* `JSON.parse()`
* React `useState()`
* React `useEffect()`

No backend database is required.

---

### 📱 Responsive Design

The interface is designed to work across different screen sizes.

The layout adapts for:

* Desktop
* Tablet
* Mobile

The application was manually tested at different viewport sizes to make sure the content remains usable without horizontal scrolling.

---

## Technology Stack

StudyMate was intentionally built using a simple technology stack.

| Technology   | Purpose                                |
| ------------ | -------------------------------------- |
| React        | Building the user interface            |
| JavaScript   | Application logic and state management |
| Vite         | Development server and build tool      |
| HTML         | Application structure                  |
| CSS          | Styling and responsive layout          |
| localStorage | Saving tasks and notes in the browser  |

### No Backend Required

This project is a **frontend-only Single Page Application (SPA)**.

It does not use:

* Node.js backend
* Express
* MongoDB
* Mongoose
* Firebase
* Redux
* React Router
* TypeScript
* Complicated authentication systems

The goal was to keep the project simple and easy to understand.

---

## Project Structure

```text
studymate/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Navbar.jsx
│   │   ├── NoteCard.jsx
│   │   ├── NoteForm.jsx
│   │   ├── NotesSection.jsx
│   │   ├── StatsCard.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskFilter.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskSection.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Application Architecture

The main application logic is handled by `App.jsx`.

### App.jsx

`App.jsx` manages the main application state.

It handles:

* Current navigation tab
* Tasks
* Notes
* Adding tasks
* Editing tasks
* Deleting tasks
* Completing tasks
* Adding notes
* Editing notes
* Deleting notes
* Saving data to localStorage
* Loading data from localStorage

The smaller components are responsible for displaying and handling specific parts of the interface.

---

### Navbar.jsx

Provides navigation between:

* Dashboard
* Tasks
* Notes

The project uses simple React state for navigation instead of React Router.

---

### Dashboard.jsx

Displays the student's productivity overview.

It calculates and displays:

* Total tasks
* Completed tasks
* Pending tasks
* High-priority tasks
* Progress percentage
* Today's tasks
* Recent tasks

---

### TaskSection.jsx

Acts as the main container for task management.

It connects:

* Task form
* Task filters
* Task list

---

### TaskForm.jsx

Provides the form used to create and edit tasks.

---

### TaskList.jsx

Displays the available tasks after applying the selected search and filter options.

---

### TaskCard.jsx

Displays an individual task.

It provides actions such as:

* Complete
* Edit
* Delete

The card also displays the task's category, priority, description, and due date.

---

### TaskFilter.jsx

Provides the search box and task filtering controls.

---

### NotesSection.jsx

Manages the Notes area and connects the note form with the note cards.

---

### NoteForm.jsx

Provides the form for creating and editing study notes.

---

### NoteCard.jsx

Displays an individual study note and provides:

* Edit
* Delete

actions.

---

### StatsCard.jsx

Reusable component used by the Dashboard to display individual statistics.

---

## State Management

StudyMate uses React's built-in state management.

The main hooks used are:

```javascript
useState()
```

and

```javascript
useEffect()
```

For example, task data is stored in React state and updated whenever the user performs an action.

This keeps the application simple without requiring a separate state management library.

---

## How localStorage Works

When the application starts, it checks whether saved tasks and notes already exist in the browser.

The stored JSON data is converted back into JavaScript data using:

```javascript
JSON.parse()
```

When tasks or notes change, the updated data is stored using:

```javascript
JSON.stringify()
```

This allows the application to preserve data after refreshing the browser.

### Example concept

```text
User creates task
       ↓
React state updates
       ↓
localStorage is updated
       ↓
User refreshes browser
       ↓
Saved data is loaded again
```

---

## Navigation

StudyMate is a Single Page Application.

Instead of using React Router, navigation is handled using simple React state.

The main navigation states are:

```text
Dashboard
Tasks
Notes
```

This approach was intentionally chosen to keep the project easy to understand and explain.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Akshay137-Ash/studymate.git
```

### 2. Open the project

```bash
cd studymate
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually similar to:

```text
http://localhost:5173
```

The exact port may be different if another application is already using the default port.

---

## Available Commands

### Start development server

```bash
npm run dev
```

### Create production build

```bash
npm run build
```

### Run ESLint

```bash
npm run lint
```

---

## Testing

The application was manually tested for the main required functionality.

### Test Results

| Test                              | Result   |
| --------------------------------- | -------- |
| Dashboard and navigation          | ✅ Passed |
| Add task                          | ✅ Passed |
| Edit task                         | ✅ Passed |
| Complete/pending toggle           | ✅ Passed |
| Delete task                       | ✅ Passed |
| Task search                       | ✅ Passed |
| Task filters                      | ✅ Passed |
| Dashboard statistics and progress | ✅ Passed |
| Add study note                    | ✅ Passed |
| Edit/delete study note            | ✅ Passed |
| localStorage persistence          | ✅ Passed |
| Responsive design                 | ✅ Passed |

**Manual testing result: 12/12 tests passed.**

The project build and ESLint checks were also completed successfully.

---

## Data Persistence

StudyMate does not require a server or database.

All task and note information is stored locally in the user's browser.

Because of this:

* Data remains after refreshing the page.
* Data is specific to the browser/device.
* Clearing browser storage will remove the saved application data.
* The application does not synchronize data between different devices.

---

## Design Goals

The main design goals of StudyMate were:

1. Keep the interface simple.
2. Make important information easy to find.
3. Make task management quick.
4. Provide clear priority indicators.
5. Show study progress visually.
6. Support mobile and desktop screens.
7. Keep the source code understandable for a beginner developer.
8. Avoid unnecessary libraries and complicated architecture.

---

## Future Improvements

Possible future improvements include:

* User authentication
* Cloud data synchronization
* Multiple student profiles
* Calendar integration
* Task reminders
* More advanced analytics
* Dark mode
* Drag-and-drop task organization
* Exporting tasks and notes

These features are not part of the current frontend-only implementation.

---

## Project Purpose

StudyMate was created as a student-focused productivity application and recruitment development project.

The project demonstrates practical knowledge of:

* React components
* JavaScript
* React state
* React hooks
* CRUD operations
* Form handling
* Conditional rendering
* Search and filtering
* localStorage
* Responsive CSS
* Component-based UI development
* Git and GitHub

---

## Author

**Akshay K**

GitHub:
https://github.com/Akshay137-Ash

---

## Repository

**StudyMate — Student Task & Study Planner**

https://github.com/Akshay137-Ash/studymate

---

## Demo

Demo video link will be added here after recording the project walkthrough.

```text
Demo video: [Coming soon](https://1drv.ms/v/c/428de9af63495825/IQA1AMc_cPfDQquFNyU89WtlAWZUaidMJGO_2u1O4rX-vGw?e=7U1WY2)
```

---

## License

This project was created for educational and recruitment purposes.
