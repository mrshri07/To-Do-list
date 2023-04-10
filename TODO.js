let taskFormEl=document.querySelector('#task-form');
let taskInputEl=document.querySelector('#input-el');



taskFormEl.addEventListener('submit',function(event)
{
	event.preventDefault();
	let task=taskInputEl.value.trim(); //trim is a method to remove the spaces in the string

	let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];  //teranry operator

	taskList.unshift(task);

	localStorage.setItem('tasks',JSON.stringify(taskList));
	displayTask();
});


//Display Tasks

function displayTask()
{
	let taskListEl=document.querySelector('#task-list');
	let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
	let size=taskList.length;

	if(size!==0)
	{
		let eachTask=``;

		for(let task of taskList)
		{
			eachTask=eachTask+ `<li class="list-group-item list-group-item-warning mb-2">
										<span>${task}</span> 
							       <button class="close">
										<i class="fa fa-times-circle"></i>
									</button>
								</li>`;
								//task is a varible having the input by us in string type

		}
		//console.log(eachTask);
		taskListEl.innerHTML=eachTask;
	}
}
displayTask();



//Delete Functionality
let taskListEl=document.querySelector('#task-list');
taskListEl.addEventListener('click',function(event)
{
	let targetElement=event.target;

	if(targetElement.classList.contains('fa-times-circle'))
	{
		let actualElement=targetElement.parentElement.parentElement;

		let selectedTask=actualElement.innerText;

		//console.log(selectedTask);
		let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

		taskList=taskList.filter((task)=>
		{
			return task.trim()!==selectedTask;
		});

		localStorage.setItem('tasks',JSON.stringify(taskList));
		displayTask();
	}
	else
	{
		console.log("No");
	}
})

