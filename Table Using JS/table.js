function createTable(){
    let arr = [
        {'id':1, 'first name':'Bibek', 'Last Name':'Dey', 'City':'Bangalore'},
        {'id':2, 'first name':'Maheshwar', 'Last Name':'Garai', 'City':'Bangalore'},
        {'id':3, 'first name':'Riju', 'Last Name':'Kundu', 'City':'Bishnupur'},
        {'id':4, 'first name':'Pritam', 'Last Name':'Nandi', 'City':'Channai'}

    ]

    let x = document.querySelector("#table");

    let newTable = document.createElement("table");

    let column = Object.keys(arr[0]);

    let valueRow = [];

    arr.forEach((ele)=>valueRow.push(Object.values(ele)));

    
    // let newTr = document.createElement("tr");
    // console.log(x.appendChild(newTr));
    // console.log(document)
    // let t = document.createElement("td");

    // y = newTr.appendChild(t);

   // console.log(y);

    let newTr1 = document.createElement("tr");
    //newTr1.appendChild();
    
     column.forEach((ele)=>{
        newTh = document.createElement("th");
        newTh.setAttribute('id',ele);
        newTh.setAttribute('style','border:1px solid black');
        newTh.innerHTML=ele;
        newTr1.appendChild(newTh);
       
    });
    
    x.appendChild(newTr1);

    valueRow.forEach((ele)=>{
        newTr2 = document.createElement("tr");
        ele.forEach((val)=>{
             
            newTd = document.createElement("td");
            newTd.setAttribute('style','border:1px solid black');
            newTd.innerHTML = val;
            newTr2.appendChild(newTd);
        });
        x.appendChild(newTr2);
    });

    //console.log(newTd);

    console.log(x);

    //let newTr = document.createElement("tr"); 


    //console.log(newEle);

    //-console.log(keyArr);
}