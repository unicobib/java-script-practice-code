//console.log(document.getElementById("task-title"));

// const doc = document.getElementById('task-title');



// doc.style.background = 'red';
// doc.style.padding='10px';

// doc.innerHTML = 'My task List';

// (function f1(){
//     let a = ['Bibek','DeyDey','BibekBishnupurDeyDey','DeyDeySen','Raj','RajBibek'];

//     //let b = new Array(a.length);

//     // for(i in a){
//     //     b[i] = a[i].length;
//     // }

//     //console.log(b.includes(5));
//     //b.includes(5);
//     let index = [];
//     let name = [];
//     let j = 0;
//     let l=0;
//     let nameLength = 0;
//     for(let i=0; i<a.length;i++){
//         let temp = a[i];
//         for(let k=i+1; k<a.length; k++){
//             if(a[k].includes(temp)&& a[k].length>temp.length){
//                  index[j++] = k;
//                  name[l++] = temp;
//             }     
//         }
//     }

//     for(let i=0; i<index.length;i++){
//         let len = index[0].length;
        
//     }

//     //if()
//     let count =0;
//     console.log(index.filter(i=>count++));
//     console.log(name);


// })();

let A = [
    {eId:101, name:'Bibek', sal:7000},
    {eId:104, name:'Raj', sal:9000},
    {eId:103, name:'Shyam', sal:2000},
    {eId:102, name:'Mohan', sal:8000}
];

//Ascending order
(function ascending(A){
    A.sort((a,b)=>a.sal-b.sal);

    console.log(A);
})(A);

//Descending order
(function descending(A){
    A.sort((a,b)=>b.sal-a.sal);

    console.log(A);
})(A);

//Find objects whose salary >=7000
(function findObjects(A){
    res = A.filter((element)=>element.sal>=7000);
    console.log(res);
})(A);

//Add company:'IBM' in every objects
(function addNewKey(A){
    res = A.map((element)=>element.company='IBM' );
    console.log(A);
})(A);

// another way to add company

(function addNewKey(A){
    A.map((ele)=>ele['city']='Bangalore');
    console.log(A);
})(A);

//increment every salary of every person by 500
(function incrementEveryPersonSalary(A){
    A.map((element)=>element['sal']=element.sal+500);
    console.log(A);
})(A);