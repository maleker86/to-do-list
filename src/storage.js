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

  function addTask(task,project) {
    this.task = task;
    this.project = project;
    console.log("we want to add: ",task);
    console.log("maybe the task array is: ",project.tasks);
    project.tasks.push(task);
  }

  let project1 = new Project("First project");
  let task1 = new Task("Task1","more words");
  let task2 = new Task("Task2","lets get some words");

  console.log("before: ", project1);
  console.log("to add: ", task1);

  addTask(task1,project1);
  addTask(task2,project1);

  console.log("results in: ",project1);
