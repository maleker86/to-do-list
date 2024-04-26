import "./style.css";
import { project_arr } from './storage.js';

let main = document.getElementById("main");

project_arr.forEach(project => {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    main.append(div);
    div.setAttribute("class","project_container");
    div.append(h2);

    h2.innerText = project.projectTitle;

    let tasks = project.tasks;

    // for (const [key, value] of Object.entries(tasks)) {
    //     let ul = document.createElement("ul");
    //     div.append(ul);
    //     ul.textContent = (`${key}: ${value}`);
    //   }

    tasks.forEach(task => {
        let ul = document.createElement("ul");
        div.append(ul);

        // ul.innerText = Object.entries(task);

        for (let [key, value] of Object.entries(task)) {
            let li = document.createElement("li");
            ul.append(li);
            li.innerText = `${key}: ${value}`;
        }

        // let keys = Object.keys(task);
        // let values = Object.values(task);

            // for (let i = 0; i < keys.length; i++) {
            //     let p = document.createElement("p");
            //     ul.append(p);
            //     p.innerText = keys[i];
            // }

            // for (let i = 0; i < values.length; i++) {
            //     let p = document.createElement("p");
            //     ul.append(p);
            //     p.innerText = values[i];
            // }

        // ul.innerText = `we have ${keys} and ${values}`;

        // task.forEach(item => {
        //     let p = document.createElement("p");
        //     ul.append(p);
        //     p.innerText = item;
        // })
    })
});