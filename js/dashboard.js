var tasklist;
var submittask;
var checkbox;
let taskCount = 0;

let details = document.getElementById('taskinput');
const submit = document.getElementById('tasksubmit');


submit.addEventListener('click', () => {

    if (details.value === "") {
        alert("Enter Task details");
    }
    else{
        taskCount++;
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = `checkBox_${taskCount}`;
        container1.appendChild(checkbox)
        document.body.appendChild(container1);
        checkbox.style = "margin-left:10px"
    
        tasklist = document.createElement('input');
        tasklist.type = "text";
        let number = "number";
        tasklist.value = document.getElementById("taskinput").value
        tasklist.id = `${tasklist}_${taskCount}`;
        container1.appendChild(tasklist)
        document.body.appendChild(container1);
        tasklist.style = "border: 1px solid blue; width: 300px; margin:10px; color:black;"
    
    
        let eButton = "sButton";
        taskEdit = document.createElement('button');
        taskEdit.type = "button";
        taskEdit.innerHTML = "Edit";
        taskEdit.id = `${taskEdit}_${taskCount}`;
        container1.appendChild(taskEdit);
        document.body.appendChild(container1);
        taskEdit.style = "margin-right:15px;  background:#9b59b6; color:white; border:none"

        let dButton = "sButton";
        taskDelete = document.createElement('button');
        taskDelete.type = "button";
        taskDelete.innerHTML = "Delete";
        taskDelete.id =`${taskDelete}_${taskCount}`;
        container1.appendChild(taskDelete);
        document.body.appendChild(container1);
        taskDelete.style = "margin-right:15px;  background:#9b59b6; color:white;  border:none"
    
        var br = document.createElement("br");
        container1.appendChild(br);
    }

   

})


