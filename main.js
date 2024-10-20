const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function AddTask() {
  if (inputBox.value === ""){
    alert("You need to add task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    li.addEventListener("click",function(){
      li.classList.toggle("checked");
    })
    span.addEventListener("click",function(){
      li.remove();
    })
  }
  inputBox.value ="";
  saveData();
}

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
};

function getData(){
  listContainer.innerHTML = localStorage.getItem("data") || "";
  
  let listItems = listContainer.getElementsByTagName("li");
  if (listItems.length === 0){
    return;
  }
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click",function(){
      listItems[i].classList.toggle("checked");
    })
    let span = listItems[i].getElementsByTagName("span")[0];
    if (span){
    span.addEventListener("click",function(event){
      event.stopPropagation();
      listItems[i].remove()
      saveData()
    })
      
    }
  }
  
}

getData()