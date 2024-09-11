const todoList = ["kms", "eat", "sleep", "work"];

renderTodoList();

function addTodo(){
    // const inputElement = document.querySelector(".js-name-input");

    // const name = inputElement.value;
    // todoList.push(name);

    // console.log(todoList);

    // inputElement.value = "";

    // let i = 1;

    // while(i < 5){
    //     console.log(i);
    //     i++;
    // }

    // for( let i = 1; i < 5; i++){
    //     console.log(i);
    // }

    // let randomNumber = 0;

    // while(randomNumber < 0.5){
    //     randomNumber = Math.random();
    // }

    // console.log(randomNumber);

    // const todoList = ["Aza", "Velasquez"];
    // for(let i= 0; i < todoList.length; i++){
    //     console.log(todoList[i]);
    // }

}

function renderTodoList(){

    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const html = `<p> ${todoList[i]}</p>`;
        todoListHTML += html;
    }

    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
