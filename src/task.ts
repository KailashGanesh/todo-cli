export interface Task {
    title: string;
    done: boolean;
}

export function createTask(title: string): Task {
    return {
        title: title,
        done: false
    };
}

export function toggleDone(task: Task): Task {
    return { ...task, done: !task.done };
}
