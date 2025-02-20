const API_URL = "http://127.0.0.1:8000/api/todos/"; // Ensure the trailing slash


// function getCSRFToken() {
//     let csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]');
//     return csrfToken ? csrfToken.value : null;
// }

// Function to fetch tasks from Django API
function fetchTasks() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const list = document.getElementById("todo-list");
            list.innerHTML = ""; // Clear old data

            data.forEach(task => {
                const li = document.createElement("li");
                li.className = task.isDone ? "completed" : ""; // Apply class if done

                li.innerHTML = `
                    <input type="checkbox" class="taskChecker" ${task.isDone ? 'checked' : ''} 
                    onclick="toggleTask(${task.id}, this)">
                    <span class="task-text">${task.title} - ${task.desc}</span>
                    <button onclick="deleteTask(${task.id})">❌</button>
                `;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching tasks:", error));
}


// Function to toggle task status (mark as done/undone)
// Function to toggle task status (mark as done/undone)
function toggleTask(id, checkbox) {
    const isDone = checkbox.checked;

    // Fetch the current task details before updating
    fetch(`${API_URL}${id}/`)
        .then(response => response.json())
        .then(task => {
            // Send updated task details with isDone field modified
            fetch(`${API_URL}${id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCSRFToken()
                },
                body: JSON.stringify({ 
                    title: task.title, 
                    desc: task.desc, 
                    isDone: isDone 
                }) 
            })
            .then(response => response.json())
            .then(data => {
                console.log("Task updated:", data);
                fetchTasks(); // Refresh task list
            })
            .catch(error => console.error("Error updating task:", error));
        })
        .catch(error => console.error("Error fetching task details:", error));
}


// Function to add a new task
document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCSRFToken()  // Ensure CSRF token is included
        },
        body: JSON.stringify({ title: title, desc: desc, isDone: false })
    })
    .then(response => response.json())
    .then(() => {
        fetchTasks(); // Refresh task list
        document.getElementById("todo-form").reset();
    })
    .catch(error => console.error("Error adding task:", error));
});

// Function to get CSRF token (needed if CSRF is enabled in Django)
function getCSRFToken() {
    return document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken'))
        ?.split('=')[1];
}

// Function to delete a task
function deleteTask(id) {
    console.log(`Deleting task with id: ${id}`);  // Log task ID for debugging
    fetch(`${API_URL}${id}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCSRFToken()  // Ensure CSRF token is included
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to delete task");
        }
        fetchTasks(); // Refresh task list
    })
    .catch(error => console.error("Error deleting task:", error));
}

// Load tasks when page loads
fetchTasks();  
