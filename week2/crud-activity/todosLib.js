let todosList = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
    // Check if any parameter is empty or undefined
    if (!task || !completed || !dueDate) {
        return false;
    }

    const newTodo = {
        id: nextId++, // Assigns a unique id and increments it
        task,
        completed,
        dueDate
    };

    todosList.push(newTodo); // Adds the new todo to the array
    return newTodo; // Returns the added todo object
}

function getAll() {
    return todosList;
}

function findById(id) {
    const numericId = Number(id); // Converts the ID to a number
    const todo = todosList.find(item => item.id === numericId); // Finds the todo with the matching ID
    return todo || false; // Returns the todo or false if not found
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (todo) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.completed) todo.completed = updatedData.completed;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        return todo; // Returns the updated todo object
    }
    return false; // Returns false if the todo with the provided ID is not found
}

function deleteOneById(id) {
    const todo = findById(id);
    if (todo) {
        const initialLength = todosList.length;
        todosList = todosList.filter(todo => todo.id !== Number(id)); // Filters out the todo with the matching ID
        return todosList.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the todo with the provided ID is not found
}

if (require.main === module) {
    // Add todos
    let result = addOne("Buy groceries", true, "2025-08-28");
    console.log(result);
    result = addOne("Buy clothes", true, "2025-08-28");
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { task: "Buy clothes", completed: true, dueDate: "2025-08-29" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}