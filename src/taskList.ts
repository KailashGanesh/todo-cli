import * as fs from 'fs';
import { Task, createTask, toggleDone } from './task';

const FILENAME = "tasks.json";

export function loadTasks(): Task[] {
    try {
        const data = fs.readFileSync(FILENAME, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

export function saveTasks(taskList: Task[]): void {
    const data = JSON.stringify(taskList);
    fs.writeFileSync(FILENAME, data, 'utf8');
}

export function addTask(taskList: Task[], title: string): Task[] {
    const newTask = createTask(title);
    const newTaskList = [...taskList, newTask];
    saveTasks(newTaskList);
    return newTaskList;
}

export function toggleTask(taskList: Task[], index: number): Task[] {
    if (index < 0 || index >= taskList.length) {
        console.log('Invalid task number.');
        return taskList;
    }

    const newTaskList = taskList.map((task, i) => (i === index ? toggleDone(task) : task));
    saveTasks(newTaskList);
    return newTaskList;
}

export function listTasks(taskList: Task[]): void {
    console.log('\nTasks:');
    taskList.forEach((task, index) => {
        console.log(`${index + 1}. ${task.title} ${task.done ? '✅' : '❌'}`);
    });
}
