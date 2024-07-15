const { get } = require("http");

function newToDoList(title, description, dueDate, priority) {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    return { getTitle, getDescription, getDueDate, getPriority };
}

function newProject(projectTitle) {
    const title = projectTitle;
    const todos = [];

    const getTitle = () => title;
    const addTodo = (todo) => {
        todos.push(todo);
    };

    const getTodos = () => todos.map(todo => ({
        title: todo.getTitle(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate,
        priority: todo.getPriority()
    }));

    return { getTitle, addTodo, getTodos };
}

// Create a new project
const project = newProject('Home Tasks');

// Create new to-do items
const todo1 = newToDoList('Buy groceries', 'Milk, eggs, bread', '2024-07-07', 'high');
const todo2 = newToDoList('Clean house', 'Vacuum, mop, dust', '2024-07-08', 'mediumm');

// Add to-do items to the project
project.addTodo(todo1);
project.addTodo(todo2);

// Access and log the project title
console.log(project.getTitle());

console.log(project.getTodos());