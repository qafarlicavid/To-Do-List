// function Add(){
//     var value = document.querySelector('#inp').value;
    
//     var div = document.createElement('div');
//     var h2 = document.createElement('h2');
//     var icon = document.createElement('i');
//     icon.setAttribute('class','fa-solid fa-trash-can')
//     h2.innerHTML = value;

//     div.appendChild(h2)
//     div.appendChild(icon)

//     document.getElementById('first').appendChild(div)
// }


function Add(){
    var value=document.querySelector("#inp").value
    var div=document.createElement("div")
    div.setAttribute("class","mt-4 box bg-light p-1 d-flex justify-content-between align-items-center")
    var h2=document.createElement("h2")
    var icon=document.createElement("i")
    icon.setAttribute("class","remove fa-solid fa-xmark")
    h2.innerHTML=value
    div.appendChild(h2)
    div.appendChild(icon)
    document.querySelector(".first").appendChild(div)
    var remover=document.querySelectorAll(".remove")
    
    for(var i=0;i<=remover.length;i++){
        remover[i].onclick=function(){
           this.parentElement.remove()
        }
    }
}