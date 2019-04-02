function addItem(){
    // var item = document.querySelectorAll('ul li');
    // console.log(item)
    // var items = document.querySelector('ul');
    // console.log(item.length);
    // var lastelement = item[item.length-1].textContent;
    // console.log(lastelement)
    // var count = parseInt(lastelement[lastelement.length-1])+1;
    // console.log(lastelement[lastelement[lastelement.length-1]])
    // var newEle = document.createElement("li");
    // newEle.setAttribute("class","list-group-item");
    // //console.log(newEle);
    // newEle.innerText=`Item${count}`

    // items.appendChild(newEle)
    // console.log(newEle)
    const newHeading = document.createElement('h2');

    newHeading.id = 'Task-title';

    newHeading.appendChild(document.createTextNode('Task List'))

    const oldHeading = document.querySelector('.task-title')

    const cardAction = document.querySelector('.card-action')

    cardAction.replaceChild(newHeading,oldHeading)


    console.log(newHeading)
}