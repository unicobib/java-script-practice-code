
function addToTable(){

    let id = document.querySelector('.id').value;
    let name = document.querySelector('.name').value;
    let address = document.querySelector('.address').value;
    let profession = document.querySelector('.profession').value;

    let row = document.createElement('tr');
    let col1 = document.createElement('td');
    let x1 = row.appendChild(col1);
    x1.innerText = id;
    let col2 = document.createElement('td');
    let x2 = row.appendChild(col2);
    x2.innerText = name;
    let col3 = document.createElement('td');
    let x3 = row.appendChild(col3);
    x3.innerText = address;
    let col4 = document.createElement('td');
    let x4 = row.appendChild(col4);
    x4.innerText = profession;

    let table = document.querySelector('table');
    table.appendChild(row);

    console.log(table);
    
}