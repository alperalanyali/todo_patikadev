let todos = [
 
];

let listDOM = document.querySelector('#list');
function getTodos(){
    todos.forEach(item =>{
        let liElement = document.createElement('li');
        liElement.innerHTML = `
                <div class="row" >
                    <div class="col-9">
                            ${item.title}
                    </div>
                    <div class="col-3 float-right">
                        <button onclick="removeElement(${item.id})" class="btn btn-outline-danger btn-sm"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
        `;
        listDOM.appendChild(liElement) ;
    });
}

function newElement(){
    let task = document.querySelector('#task');
    if(task.value){
        let todo = {id:todos.length+1,title:task.value}
       todos.push(todo);
       localStorage.setItem('todos',JSON.stringify(todos));
       let liElement = document.createElement('li');
       liElement.innerHTML = `
               <div class="row" >
                   <div class="col-9">
                           ${todo.title}
                   </div>
                   <div class="col-3 float-right">
                       <button onclick="removeElement(${todo.id})" class="btn btn-outline-danger btn-sm"><i class="fa fa-trash"></i></button>
                   </div>
               </div>
       `;
       listDOM.appendChild(liElement) ;
       
    }else {
        console.log("Error");
    }
}

function removeElement(id){
    
    getTodos(); 
}