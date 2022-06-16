'use strict';
console.log('app is connected.');

// prompt is assinged to the userName//   

// let favFood = prompt('What is your favorite food?');
// console.log('is this pizza', favFood);
// let message; 


// alert('You entered ' + favFood + '!');

// if(favFood == 'pizza') {
//     message = 'We got that!';
// } else if( favfood == 'burgers') {
//     message = 'Come on over!!';
// } else if (favfood == 'nachos') {
//     message = 'We got those!';
// } else if (favfood == 'sandwiches') {
//     message = 'We got those!';
// } else if (favfood == 'salad') {
//         message = 'We got those!';
// } else {
//     message = 'We are sorry, but we have acholol!';
// }

// console.log('our return message', message);
// console.log('our return message', favFood);

// document.write('your favorite food is ' + favFood);


function favFood(){
    let userfavFood = prompt('what is your favorite food?');
    let message;
  
    if(favFood === 'pizza' || favFood === 'burgers' ||  favFood ==='salads' || favFood === 'nachos'){
      let userfavFood = prompt('What is your favorite food?');
    } else {
      message = 'we got those' ;
    }
   return message;
  
  }
  
  favFood();
  