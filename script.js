function addnumber(){
var x=document.getElementById("add").value;
var y=document.getElementById("add2").value;
if(x == ""|| y == ""){
    document.getElementById("add3").innerHTML = "please enter numbers"
}
else if(x != "" && y != ""){
document.getElementById("add3").innerHTML = Number(x) + Number(y)
}
}