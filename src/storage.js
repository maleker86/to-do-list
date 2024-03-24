let project_arr = [];
let task_arr = [];

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

  // console.log("the project this will be added to is: ", this.project);
  // console.log("we are adding ", task, "to ", this.project);
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
    (proj_item) => proj_item.projectTitle === projectName
  );
  let task = project.tasks.find(
    (task_item) => task_item.taskTitle === taskName
  );

  // console.log(project,task);

  (function checkCompleted() {
    if (task.completed === true) {
      completed = false;
    } else {
      completed = true;
    }
  })();

  editTask("Project1","Task1","completed",completed);

  // console.log(project,task);

}

createProject("Project1");
createProject("Project2", "these are words");

createTask("Project1", "Task1", "description 1");
createTask("Project1", "Task2", "description 2 that's longer");
createTask("Project2", "Task2", null);

console.log(project_arr);

editTask("Project1", "Task1", "priority", "high");
editTask("Project1", "Task2", "testing", 100);
editTask("Project2", "Task2", "due_date", "12/24/2024");
editTask("Project2", "Task2", "testing", 100);

completeTask("Project1", "Task1");
completeTask("Project1", "Task1");

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
