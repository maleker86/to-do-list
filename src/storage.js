let project_arr = [];

function Project(title) {
  this.projectTitle = title;
  this.tasks = [];
}

function Task(title, description) {
  this.taskTitle = title;
  this.taskDescription = description;
  this.completed = false;
}

function addTaskToProject(task, project) {
  this.project = project_arr.find((item) => item.projectTitle === project);

  this.project.tasks.push(task);
}

function addProjectToList(project) {
  this.project = project;
  project_arr.push(project);
}

function editTask(projectName, taskName, propertyName, new_data) {
  let project = project_arr.find(
    (proj_item) => proj_item.projectTitle === projectName,
  );
  let task = project.tasks.find(
    (task_item) => task_item.taskTitle === taskName,
  );

  task.propertyName;

  if (propertyName.includes(" ")) {
    throw "editTask Assign Error: No spaces permitted for object keys.";
  }
  task[propertyName] = new_data;
}

function createProject(title) {
  let project = new Project(title);
  addProjectToList(project);
}

function createTask(project, title, description) {
  const task = new Task(title, description);

  addTaskToProject(task, project);
}

function completeTask(projectName,taskName) {
  let project = project_arr.find(
    (proj_item) => proj_item.projectTitle === projectName);
  let task = project.tasks.find(
    (task_item) => task_item.taskTitle === taskName);

  (function checkCompleted() {
    if (task.completed === true) {
      completed = false;
    } else {
      completed = true;
    }
  })();

  editTask(projectName,taskName,"completed",completed);

  console.log("The task",task.taskTitle, "in",project.projectTitle, "is",task.completed);

}

function deleteTask(projectName,taskName) {
  let project = project_arr.find(
    (proj_item) => proj_item.projectTitle === projectName);
  let task = project.tasks.find(
    (task_item) => task_item.taskTitle === taskName);

    console.log(project);
    console.log(task);

    if (confirm("Do you want to delete entire selected project?") == true) {
      delete project_arr[project_arr.indexOf(project)];
      console.log("we removed",project,"from",project_arr);
      console.log(project_arr);
    } else {
      console.log("we cancelled the project deletion");
      console.log(project_arr);
    }

    if (confirm("Do you want to delete entire selected task?") == true) {
      delete project.tasks[project.tasks.indexOf(task)];
      console.log("we removed",task,"from",project);
      console.log(project);
    } else {
      console.log("we cancelled the task deletion");
      console.log(project);
    }
    
}

createProject("Project1");
createProject("Project2", "these are words");

createTask("Project1", "Task1", "description 1");
createTask("Project1", "Task2", "description 2 that's longer");
createTask("Project2", "Task1", null);
createTask("Project2", "Task2","necessary?");

editTask("Project1", "Task1", "priority", "high");
editTask("Project1", "Task2", "testing", 100);
editTask("Project2", "Task1", "due_date", "12/24/2024");
editTask("Project2", "Task1", "testing", 100);

completeTask("Project1", "Task1");
completeTask("Project2", "Task1");
completeTask("Project2", "Task2");
completeTask("Project2", "Task2");

deleteTask("Project2","Task1")

//----- notes --------------------------
//   thank you sentry https://sentry.io/answers/how-can-i-add-a-key-value-pair-to-a-javascript-object/
// https://sentry.io/answers/string-contains-substring-javascript/
// and https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
//   const obj = { name: "Ben" };
//   const prop1 = "prop name";
//   obj[prop1] = "value 1";
//   console.log(obj);
//   // {"name": "Ben", "prop name": "value 1", [...]}
// also. git checkout . is when you want to not commit ANY of the changes & it trashes them.
