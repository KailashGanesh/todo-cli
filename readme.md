
# Todo cli tool

A simple todo cli application with typescript

## Code Structure

The project consists of three main files:

- `main.ts`: This is the entry point of the application. It contains the main loop, which asks the user to choose an option and then performs the selected operation. It uses the `readline-sync` library for synchronous command line input, and the `chalk` library to color the output.

- `task.ts`: This file contains the `Task` interface, which represents a task with a `title` (string) and `done` (boolean) properties, and two functions - `createTask()` and `toggleDone()`.

- `taskList.ts`: This file handles the logic for managing a list of tasks, including loading the tasks from a file, saving the tasks back to the file, adding a new task to the list, and toggling the completion status of a task.

## How to Run

To run the application, use the following command:

```bash
npm start
```
