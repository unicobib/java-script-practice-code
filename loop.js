
// // for(let i=0; i<10; i++){

// //     if(i === 2){
// //         console.log(`${i} is my favourite number`);
// //         break;
// //     }
// //     console.log(i);
// // }

// //while loop

// let i=0;

// while(i<10){
//     console.log(i);
//     i++;
// }

// let i=0;

// do{
//     console.log(`number ${i}`);
//     i++;
// }while(i<10)

const cars = ['ford', 'Baleno','Marcedez','Audi'];

// for(let i=0; i<car.length; i++){
//     console.log(`${car[i]}`);
// }

// cars.forEach(function(car,index){
//     console.log(`${index} : ${car}`);
// });

// const users = [
//     {id:1,name:'Bibek'},
//     {id:2,name:'sara'},
//     {id:3,name:'Mahesh'}
// ];

// const id = users.map(function(users){
//     return users.id;
// });

// console.log(id);

const user = {
    firstName: 'Bibek',
    lastName:'Dey',
    age:26

};

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}
