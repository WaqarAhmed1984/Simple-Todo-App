//get html ul in to list
var list = document.getElementById("list")

function addTodo(){
    var todoItem = document.getElementById("todo-items")
    
    //create li and add in to ul
    var li = document.createElement("li");
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)
    li.setAttribute("class","forAlign")
    if(todoItem.value !== ""){
        list.appendChild(li)
    }
 
    
    //create delete btn and add function by set attribute and add to li
    var delBtn = document.createElement("button")
    var delBtnText = document.createTextNode("Delete")
    delBtn.appendChild(delBtnText)
    li.appendChild(delBtn)
    delBtn.setAttribute("onclick","delItem(this)")
    delBtn.setAttribute("class","alignBtn")

    //create eidt btn and add function by set attribute and add to li
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick","editItem(this)")
    

    // list.appendChild(li)
    todoItem.value = ""
}

function delItem(e){
    e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter New Value",val)
    e.parentNode.firstChild.nodeValue = editValue
    
}
function deleteAll(){
    list.innerHTML = ""
}