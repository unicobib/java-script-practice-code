function action(val){
    document.getElementById("result").value += val;
}
function calculate(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    console.log(y)
    document.getElementById("result").value = y;
}
