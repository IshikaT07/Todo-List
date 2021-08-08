var addButton = document.getElementById("addButton");
var toDoList = document.getElementById("toDoList");
var todoInput = document.getElementById("todoInput");
var dueDate = document.getElementById("newDueDate");
var dueTime = document.getElementById("newDueTime");
var completedTodo = document.getElementById("completed");
var clear = document.getElementById("deleteAll");
var clear1 = document.getElementById("deleteComp");

function clearAll(){
    toDoList.innerHTML ="";
}

function clearAll1(){
    completedTodo.innerHTML ="";
}

function deleteEvent(event){
    event.target.parentNode.remove();
}

function markAsDone(event){
    var x = event.target.parentElement.firstChild;
    var y = x.nextElementSibling;
    var z = y.nextElementSibling;

    var compMain = document.createElement('div')
    compMain.id = String(Math.random());
    compMain.style = "background-color: green";

    var comp = document.createElement('div');
    comp.appendChild(document.createTextNode(x.innerHTML));
    comp.classList.add("style1");
    compMain.appendChild(comp);

    var compDate = document.createElement('div');
    compDate.appendChild(document.createTextNode(y.innerHTML));
    compDate.classList.add("style1");
    compMain.appendChild(compDate);

    var compTime = document.createElement('div');
    compTime.appendChild(document.createTextNode(z.innerHTML));
    compTime.classList.add("style1");
    compMain.appendChild(compTime);

    var compX = document.createElement('div');
    compX.appendChild(document.createTextNode('X'));
    compMain.appendChild(compX);
    compX.classList.add("mystyle");
    compX.addEventListener("click", deleteEvent );

    completedTodo.appendChild(compMain);
    event.target.parentNode.remove();
}

function markAsProgress(event){
    event.target.parentElement.classList.add("markAsProgress")
}

function editTodo(event){
    var x1 = prompt("Update ToDo Name");
    event.target.parentElement.firstChild.innerHTML = x1;
}


function addToDoList(){
    var toDoMain = document.createElement('div')
    toDoMain.id = String(Math.random());

    var todo = document.createElement('div');
    todo.appendChild(document.createTextNode(todoInput.value));
    todo.classList.add("style1");
    toDoMain.appendChild(todo);

    var todoDate = document.createElement('div');
    todoDate.appendChild(document.createTextNode(dueDate.value));
    todoDate.classList.add("style1");
    toDoMain.appendChild(todoDate);

    var todoTime = document.createElement('div');
    todoTime.appendChild(document.createTextNode(dueTime.value));
    todoTime.classList.add("style1");
    toDoMain.appendChild(todoTime);

    var todoX = document.createElement('div');
    todoX.appendChild(document.createTextNode('X'));
    todoX.classList.add("mystyle");
    toDoMain.appendChild(todoX);
    todoX.addEventListener("click", deleteEvent );

    var todoEdit = document.createElement('div');
    todoEdit.appendChild(document.createTextNode('Edit'));
    todoEdit.classList.add("mystyle");
    toDoMain.appendChild(todoEdit);
    todoEdit.addEventListener("click", editTodo );

    var todoProgress = document.createElement('div');
    todoProgress.appendChild(document.createTextNode('Progress'));
    todoProgress.classList.add("mystyle");
    toDoMain.appendChild(todoProgress);
    todoProgress.addEventListener("click", markAsProgress );

    var todoDone = document.createElement('div');
    todoDone.appendChild(document.createTextNode('Done'));
    todoDone.classList.add("mystyle");
    toDoMain.appendChild(todoDone);
    todoDone.addEventListener("click", markAsDone );


    toDoList.appendChild(toDoMain);
}

addButton.addEventListener("click", addToDoList );
clear.addEventListener("click", clearAll );
clear1.addEventListener("click", clearAll1 );