# Description 
A simplified Jira clone with Angular, Akita and ng-zorro
# Features
### Board List
A page for managed all my boards;

- I can create a new board with a specific name here.
- I can view all created boards.
- I can navigate into board detail page when click on a board.

### User Management
A page for managed all users

- I can create a new users.
- I can view all users that I had created.

### Board Detail
A page for managed all information related to a specific board.

- I can create a task which belong to this board.
- I can view all tasks which belong to this board.
- I can assign a user into a tasks.
- There are 3 status which is TODO, IN_PROGRESS, DONE and I can change task status by drag & drop task into corresponding column.
# WIP
- View task detail and save changes
- Search/filter tasks by condition
- Unit tests
# Folder tree
```
├───controls                            # UI controls template
│   ├───avatar
│   ├───breadcrumbs
│   ├───button
│   ├───svg-definitions
│   └───svg-icon
├───interface                           # Models interface
│   └───ui-model
└───project                             # Main page components
    ├───components
    │   ├───board
    │   │   ├───board-dnd               # Represent a entire board
    │   │   └───board-lane              # Contain all tasks of a specific status
    │   ├───navigation
    │   │   ├───navigation              
    │   │   ├───resizer
    │   │   └───sidebar
    │   ├───task                        
    │   │   └───task-card               # Represent a single task
    │   └───task-assignees-select       # Represent multi assignees select 
    ├───config                          # Config project sidebar URL and icon...
    ├───pages
    │   ├───board
    │   ├───boards
    │   ├───setting
    │   └───users
    └───state
        ├───board                       # Board service and state management
        └───project                     # Project service and state management
```
# How to start
- Clone this repository
- Start the webapp with command
```bash
ng serve --o
```
- Clone the back-end repository here (how to run this repository's provided): https://github.com/quangtnnguyen/board-api
