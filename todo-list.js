const todoList =[{
   name:'cut plants',
   dueDate:'2024-04-03'},{
   name: 'take bath',
   dueDate:'2024-04-03'}] ;

   renderTodoList();

      function renderTodoList(){
      let todoListHTML ='';

      todoList.forEach((todoObject,index) => {
   
            const {name,dueDate} =todoObject;
            const html =`
              <div>${name}</div> 
              <div>${dueDate}</div>
               <button onclick="
               
               " class="js-delete-button js-button" >Delete
               </button>
              `
   
            todoListHTML +=html;
      })

      document.querySelector('.js-message-input')
      .innerHTML = todoListHTML;

      document.querySelectorAll('.js-button')
      .forEach((deleteButton,index) => {
        deleteButton.addEventListener('click',() => {
            todoList.splice(index,1);
               renderTodoList();
         })
      })

      };

   
document.querySelector('.add-button')
.addEventListener('click',() => {
   addTodo();
})
  


   function addTodo(){
      const inputElement=document.querySelector('.js-todo-input')
const name =inputElement.value

const dueDateElement = document.querySelector('.js-due-date-input')
const dueDate = dueDateElement.value;


todoList.push({
//name:name,
//dueDate:dueDate
name,
dueDate
});


console.log(todoList)

inputElement.value ='';
dueDateElement.value='';

renderTodoList();
   };
