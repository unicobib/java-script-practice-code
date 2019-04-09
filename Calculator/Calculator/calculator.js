function action(val){
    let x = [document.getElementById("result").value];
    let y = x[0];
    console.log(JSON.stringify(val))
console.log("+".test('/^[+-*/]/'))
    if(val.match('/+-*//') && !y[y.length-1].match('/+-*//'))
        document.getElementById("result").value += val;
}
function calculate(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    console.log(y)
    document.getElementById("result").value = y;
}
