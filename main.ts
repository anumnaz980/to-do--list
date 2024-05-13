import inquirer from "inquirer"
let todos:any = [ ]
let condition = true;
while(condition){
   let todoQuestions = await inquirer.prompt(
  [ 
     { 
      name:"firstQuestion",
      type:"input",
      message:"What would you like to add in your todos? "
     },
     { 
        name:"secondQuestion",
        type:"confirm",
        message:"Would you want to add more in your todos?",
        default:"true"
      }
   ]
)
  todos.push(todoQuestions.firstQuestion);
  condition = todoQuestions.secondQuestion
  console.log(todos);
}
let menuChoice = await inquirer.prompt({
   name: 'option',
   type: 'list',
   message: 'Select an option:',
   choices: ['View Todos', 'Mark Task as Completed','Delete Last Todo', 'Exit']
});

switch (menuChoice.option) {
   case 'View Todos':
           viewTodos();
           break;
   case 'Mark Task as Completed':
           markCompleted();
           break;
   case 'Delete Last Todo':
       deleteLastTodo();
       break;
   case 'Exit':
       console.log('Thank You & Goodbye!');
       break;
   default:
       console.log('Invalid choice');
       break;
};

function viewTodos() {
   console.log('Your Todos:');
   todos.forEach((todo:any, index:any) => {
       console.log(`${index + 1}. ${todo}`);
   });
}


async function markCompleted() {
   let answer = await inquirer.prompt({
       name: 'index',
       type: 'number',
       message: 'Enter the index of the task you want to mark as completed:'
   });
   let index = answer.index;
   if (index >= 1 && index <= todos.length) {
       console.log(`Marking "${todos[index - 1]}" as completed.`);
       // You can add your logic here to mark the task as completed
   } else {
       console.log('Invalid index.');
       await markCompleted();
   }
}
function deleteLastTodo() {
if (todos.length === 0) {
   console.log('No todos to delete.');
} else {
   const deletedTodo = todos.pop();
   console.log(`Deleted todo: "${deletedTodo}"`);
   console.log('Remaining todos:', todos);
}
};