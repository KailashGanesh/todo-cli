import readline from 'readline-sync';
import chalk from 'chalk';
import { loadTasks, addTask, toggleTask, listTasks } from './taskList';

let taskList = loadTasks();

while (true) {
    console.log(chalk.green('\n1. Add task'));
    console.log(chalk.green('2. Complete task'));
    console.log(chalk.green('3. List tasks'));
    console.log(chalk.green('4. Exit\n'));

    let option = readline.questionInt(chalk.yellow('Choose an option: '));

    switch (option) {
        case 1:
            let title = readline.question(chalk.blue('Enter task title: '));
        taskList = addTask(taskList, title);
        break;
        case 2:
            let index = readline.questionInt(chalk.blue('Enter task number to complete: '));
        taskList = toggleTask(taskList, index);
        break;
        case 3:
            listTasks(taskList);
        break;
        case 4:
            process.exit(0);
        default:
            console.log(chalk.red('Invalid option.'));
    }
}

