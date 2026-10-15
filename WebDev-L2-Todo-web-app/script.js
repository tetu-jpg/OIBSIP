const inputBox=document.getElementById("input");
const listContainer= document.getElementById("list-container");
const clrButton = document.getElementById("clear-button");

const remainn=document.getElementById("remain");
const completee=document.getElementById("complete");

let todolist = [];

function status(){
   
    let rCount = 0;
    let cCount = 0;
    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].done === true) {
            cCount++;
        } else {
            rCount++;
        }
    }
    remainn.textContent = rCount;
    completee.textContent = cCount;
}
function luuDa() {
    listContainer.innerHTML = "";
    for (let i = 0; i < todolist.length; i++) {
        let taskk =todolist[i];
        let li = document.createElement("li");
        li.innerHTML = taskk.text;
        if (taskk.done) {
            li.classList.add("checked");
        }
        let span = document.createElement("span");
        span.className = "it-1";
        span.innerHTML = "&#10004";
        li.appendChild(span);

        let span2 = document.createElement("span");
        span2.className = "it-2";
        span2.innerHTML = "&#128465"
        li.appendChild(span2);

        listContainer.appendChild(li);
    }
    status();
}

function addtask(){
    let taskvalue=inputBox.value.trim()

    if (taskvalue === ""){
        alert("Please type on task first!");
        return;
    }
    

    let isdup=false;
    for ( let i=0; i < todolist.length; i++){
        if(todolist[i].text === taskvalue){
            isdup = true;
            break;
        }

    }
    if (isdup){
        alert("This task already exists!")
    }
    else{
        let task = {
        text: taskvalue,
        done: false
    };
    todolist.push(task);

    luuDa();
    saveData();

    }
    
    
    inputBox.value = "";
    
    
}
listContainer.addEventListener("click", function(e){

    let element = e.target.parentElement;

    let aelement = Array.from(listContainer.children);

    let licke=aelement.indexOf(element);

    if (licke === -1){
        return;}
        
    if(e.target.classList.contains("it-1")){
        
        todolist[licke].done = !todolist[licke].done;

        luuDa();
        saveData();

    }
    else if(e.target.classList.contains("it-2")){
        todolist.splice(licke,1);
        luuDa();
        saveData();
    }
},false);

function saveData(){
    let store="";

    for (let i = 0; i < todolist.length; i++) {
        store = todolist[i].text + "," + todolist[i].done;
        if (i < todolist.length - 1) {  
            store += ";";
        }
    }
    localStorage.setItem("data", store);
}
function shoWTask(){
    let saved = localStorage.getItem("data");
    todolist = [];
    if (saved && saved.trim() !== "") {
        let tasks = saved.split(";");
        for (let i = 0; i < tasks.length; i++) {
            let parts = tasks[i].split(","); 
            let taskoch=parts[0];
            let doch=(parts[1] === "true");
            

            todolist.push({ text: taskoch, done: doch });}
            
        
    }
    luuDa();
}

shoWTask();




clrButton.addEventListener("click",function(e){
    todolist = [];
    luuDa();
    saveData();
    localStorage.clear();
});
function changeColor(){
    document.body.style.background = "linear-gradient(135deg, #3a6186, #89253e)";
    
}
function changeColoor(){
    document.body.style.background = "linear-gradient(135deg, #ffd89b, #19547b)";
    
      }
