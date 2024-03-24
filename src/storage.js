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
  this.task = task_arr.find(item => item.taskTitle === task);
  this.project = project_arr.find(item => item.projectTitle === project);
  console.log("the project found is: ", this.project);
  // console.log("we are adding ", task, "to ", project);
  this.project.tasks.push(this.task);
}

function addProjectToList(project) {
  this.project = project;
  project_arr.push(project);
  console.log("the project array is: ", project_arr);
}

function editTask(taskName, property, new_data) {
  // this.taskName = taskName;
  const property_name = property;
  if (property_name.includes(" ")) {
    throw "editTask Assign Error: No spaces permitted for object keys.";
  }
  // this.new_data = new_data;

  taskName[property_name] = new_data;
}

function createProject(title) {
  let project = new Project(title);
  addProjectToList(project);

}

function createTask(title,description) {
  let task = new Task(title,description);
  task_arr.push(task);
}

createProject("Project1");
createProject("Project2","these are words");

createTask("Task1", "description 1");
createTask("Task2","description 2 that's longer",)


// editTask(task1, "priority", "high");
// editTask(task2, "due_date", "12/24/2024");

addTaskToProject("Task1", "Project1");
addTaskToProject("Task2", "Project2");

// addProjectToList(project1);
// console.log(project_arr);

//notes: 
//   thank you sentry https://sentry.io/answers/how-can-i-add-a-key-value-pair-to-a-javascript-object/
// https://sentry.io/answers/string-contains-substring-javascript/
// and https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
//   const obj = { name: "Ben" };
//   const prop1 = "prop name";
//   obj[prop1] = "value 1";
//   console.log(obj);
//   // {"name": "Ben", "prop name": "value 1", [...]}
// also. git checkout . is when you want to not commit ANY of the changes & it trashes them.