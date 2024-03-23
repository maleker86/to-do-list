function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  function Project(title) {
        this.projectTitle = title;
        this.tasks = [];
  };

  function Task(title,description) {
        this.taskTitle = title;
        this.taskDescription = description;
  }

  function addTaskToProject(task,project) {
    this.task = task;
    this.project = project;
    console.log("this time we want to add: ",task);
    console.log("maybe the task array is: ",project.tasks);
    project.tasks.push(task);
  }

//   thank you sentry https://sentry.io/answers/how-can-i-add-a-key-value-pair-to-a-javascript-object/
// https://sentry.io/answers/string-contains-substring-javascript/
//   const obj = { name: "Ben" };
//   const prop1 = "prop name";
//   obj[prop1] = "value 1";
//   console.log(obj);
//   // {"name": "Ben", "prop name": "value 1", [...]}
// also. git checkout . is when you want to not commit ANY of the changes & it trashes them.

  function editTask(taskName,property,new_data) {
    // this.taskName = taskName;
    const property_name = property;
    if (property_name.includes(" ")) {
        throw "editTask Assign Error: No spaces permitted for object keys.";
    };
    // this.new_data = new_data;

    taskName[property_name] = new_data;
  }

  let project1 = new Project("First project");
  let task1 = new Task("Task1","description 1");
  let task2 = new Task("Task2","description 2 that's longer");

  console.log("I am trying to edit:",task1);
  editTask(task1,"priority","high");
  console.log("please update: ",task1);

  console.log("I am trying to edit:",task2);
  editTask(task2,"due_date","12/24/2024");
  console.log("please update: ",task2);

  console.log("before: ", project1);
  console.log("overall to add: ", task1, task2);

  addTaskToProject(task1,project1);
  addTaskToProject(task2,project1);


  console.log("results in: ",project1);
