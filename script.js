const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addButton = document.querySelector("#add-btn");

// Code to add Task
function addTask(){

   if(inputBox.value === ''){
    alert("You must write something..");
   }
   else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span); 
  }
   inputBox.value = "";
   saveData();
}

//Clearing all the tasks
function clearAll(){
  if(listContainer.innerHTML === ""){
    alert("Please add task...");
   }
   else{
    listContainer.innerHTML = "";
    localStorage.removeItem('data'); 
  }
}

//Code to remove and mark as checked the single tasks added
listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
});

//Code to save the data added until removed by the user
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function displayTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
displayTask();