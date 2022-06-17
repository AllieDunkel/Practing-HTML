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
    let favFood = prompt('What is you favorite food');

    if (favFood !== 'pizza' && favFood !== 'burgers' &&  favFood !== 'salads') {
        alert ('try again');
        favFood = prompt('What is you favorite food');
     } else if(favFood === 'pizza' || favFood === 'burgers' ||  favFood === 'salads') {
        alert ('we got those!');
 }

    console.log('favFood', favFood);
    return document.write('Your favorite food is ' + favFood + '!');

  }
  favFood();

//while loops require a starting value, in this case we have 0 to start

let stop = 'Yes'; //SENTINAL
while(true){
  let input = prompt('I am over 21. Type Yes');
  if(input === stop) {
    break;
  }
}

function displayRating(){
    //code block to do.
    let output = '';
    let rating = prompt('How many beers can you drink?');
    
    for(let i = 0;  i < rating; i++){
      output += '<img style="width:25px"; "height:25px" class="beer" src="https://media.istockphoto.com/vectors/hand-drawn-glass-of-beer-vector-id1038586226?k=20&m=1038586226&s=612x612&w=0&h=1GrTdY-samaQRovrcbwuFPJQUwsjI7UyWWSXpZL9bFA=" />'
 }
     return document.write(output);
    }
    displayRating();
    
    


function getUserName(){
    //proof of life
    console.log('in the user name function') 
    let userNameInput
}

do {
    userNameInput = prompt ('What is your Name?');
    if (userNameInput != '') {
        alert ('try again');
    } else {
    alert('Welcome ' + userNameInput);
}
} while(userNameInput != '')

getUserName();


