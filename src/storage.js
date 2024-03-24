let project_arr = [];
let task_arr = [];

function Project(title) {
  this.projectTitle = title;
  this.tasks = [];
}

function Task(title, description) {
  this.taskTitle = title;
  this.taskDescription = description;
}

function addTaskToProject(task, project) {
  // console.log("old task array: ",task_arr);
  this.task = task_arr.find((item) => item.taskTitle === task);
  this.project = project_arr.find((item) => item.projectTitle === project);

  console.log("the project this will be added to is: ", this.project);
  console.log("we are adding ", this.task, "to ", this.project);
  this.project.tasks.push(this.task);

  // console.log("new old array: ", task_arr);
  // task_arr.pop(this.taskName);
  // console.log("new task array: ", task_arr);
}

function addProjectToList(project) {
  this.project = project;
  project_arr.push(project);
  // console.log("the project array is: ", project_arr);
}

function editTask(projectName, taskName, propertyName, new_data) {
  // console.log("the project array is: ", project_arr);
  this.project = project_arr.find(
    (proj_item) => proj_item.projectTitle === projectName,
  );
  this.task = project.tasks.find(
    (task_item) => task_item.taskTitle === taskName,
  );

  // console.log("the task is ",this.task);

  if (propertyName.includes(" ")) {
    throw "editTask Assign Error: No spaces permitted for object keys.";
  }
  this.task[propertyName] = new_data;
}

function createProject(title) {
  let project = new Project(title);
  addProjectToList(project);
}

function createTask(title, description) {
  const task = new Task(title, description);
  task_arr.push(task);
}

createProject("Project1");
createProject("Project2", "these are words");

createTask("Task1", "description 1");
createTask("Task2", "description 2 that's longer");

addTaskToProject("Task1", "Project1");
addTaskToProject("Task2", "Project2");

console.log(project_arr);

editTask("Project1","Task1", "priority", "high");
editTask("Project1","Task1","testing",100);
editTask("Project2","Task2", "due_date", "12/24/2024");
editTask("Project2","Task2", "testing",100);

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
