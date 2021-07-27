var a = document.getElementById('todo');
var input = document.getElementById("input");
var add = document.getElementById("add")
function inp() {

    if(input.value == "" ){
        add.setAttribute("disabled")
    };
    
    var newElement = document.createElement('div');
    newElement.setAttribute("class","item")
    var p = document.createElement("p");
    newElement.appendChild(p);
    var text = input.value;
    var text = document.createTextNode(text);
    p.appendChild(text)
    a.appendChild(newElement)


    var span = document.createElement("span");

    var editbtn = document.createElement("button")
    var btn_text = "Edit";
    btn_text = document.createTextNode(btn_text)
    editbtn.appendChild(btn_text);
    editbtn.setAttribute("onclick","edittodo(this.parentNode)")
    newElement.appendChild(span).appendChild(editbtn)

    var delbtn = document.createElement("button")
    var btn_text1 = "Delete";
    btn_text1 = document.createTextNode(btn_text1)
    delbtn.appendChild(btn_text1);
    delbtn.setAttribute("onclick","deletetodo(this.parentNode)");
    newElement.appendChild(span).appendChild(delbtn)

    input.value = ""

}

function deletetodo(e) {
    e.parentNode.remove();
}

function edittodo(e) {
    var new_text = prompt("Edit", e.parentNode.firstChild.innerText)
    e.parentNode.firstChild.innerText = new_text
    if(new_text == ""){
        deletetodo(e)
    }
}

function deleteall() {
    a.innerHTML = ""
}