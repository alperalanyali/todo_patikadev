let todos = [
 
];
if(localStorage.getItem("todos") !== null){
    todos =  JSON.parse(localStorage.getItem("todos"));
}
let listDOM = document.querySelector('#list');
function getTodos(){
    listDOM.innerHTML = '';
    todos.forEach(item =>{        
        let liElement = `
                <div class="row"  id = ${item.id}>
                    <div class="col-9">
                            ${item.taskName}
                    </div>
                    <div class="col-3 float-right">
                    <button onclick="completeTodo('${item.id}')" class="btn btn-outline-primary btn-sm"><i class="fa fa-check"></i></button>
                        <button onclick="removeElement('${item.id}')" class="btn btn-outline-danger btn-sm"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
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
    }else {
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