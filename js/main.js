let todos = [
 
];
if(localStorage.getItem("todos") !== null){
    todos =  JSON.parse(localStorage.getItem("todos"));
    getTodos();
}

function getTodos(){
    let listDOM = document.querySelector('#list');
    listDOM.innerHTML = '';
    todos.forEach(item =>{        
        let liElement = `
            <li  id="${item.id}">${item.taskName}
            <button class="btn btn-outline-primary" onclick="completeTodo(${item.id})"><i class="fa fa-check"></i></button>
            <button class="btn btn-outline-danger" onclick="removeElement(${item.id})"><i class="fa-solid fa-xmark"></i></button>
            </li>
        `;
        listDOM.insertAdjacentHTML("beforeend", liElement);
    });
}

function newElement(){
    let task = document.querySelector('#task');
    if(task.value){
        todo = {
            id: todos.length,
            taskName: task.value
        }
        todos.push(todo);
        getTodos();
        task.value = '';
        localStorage.setItem('todos', JSON.stringify(todos));
        var toastDomSuccess = document.querySelector("#liveToast2");
        var toast = new bootstrap.Toast(toastDomSuccess);
        toast.show();
    }else {

        var toastError = document.querySelector("#liveToast");
        var toast = new bootstrap.Toast(toastError);
        toast.show();
        console.log("Error");
    }
}

function removeElement(id){    
    let deletedID;
    for (let index in todos) {
        if(todos[index].id == id) {
            deletedID = index;
        }
    }
    todos.splice(deletedID, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    getTodos();
}


function completeTodo(id) {
    let checkedID;
    for(let item in todos){
        if(todos[item].id == id){
            checkedID = item;
        }
    }    
    let classList = document.getElementById(`${checkedID}`).classList;    
    if (classList.contains("checked")){
        classList.remove("checked")
    }else{
        classList.add("checked");
        
    }
}