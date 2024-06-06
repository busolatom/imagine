document.getElementById('btn').onclick = function() {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let fullName = 'Busola Tom';
let age = 21;
let present = true;
console.log(fullName);

// Objects
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bentely',
    color: 'pink',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Busola Tee',
        driver: {
            name: 'Kofi Kojo',
            license: 'yes',
        }
    }
}

console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

car.owner.driver.name = 'Kathryn Kofi';
console.log(car.owner.driver.name);
console.log(car);


// Arrays
const tweet1= {
    text: 'I am learning Javascript today.',
    likes: 5,
    shares: 2,
    retweets: 1
  }
  
  const tweet2= {
    text: 'I am learning Arrays today.',
    likes: 8,
    shares: 15,
    retweets: 3
  }
  
  const tweet3= {
    text: 'I learnt objects yesterday.',
    Likes: 4,
    shares: 2,
    retweets: 1
  }
  
  const tweet4= {
    text: 'Backend dev is definitely for me.',
    Likes: 19,
    shares: 5,
    retweets: 10
  }
  
  const tweets= [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.push(tweet3);
  tweets.push(tweet4);
  tweets.length;
  tweets;
  
  // Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours()
  
  // If Else
  if (today.getHours() >= 16) {
    console.log('Class ended for the day');
  } else {
    console.log('Class ongoing');
  }
  
  // For Loop
  for (let n = 0; n <= 9; n++) {
    console.log('Notify folks!', n);
  }
  
  // Functions
// Defining functions
function login(usrname,pswd) {
  if (usrname == 'busolatom' && pswd === '1234') {
    return 'User is logged in';
  } else {
    return "Invalid username or password";
  }
} 
// Invoking functions
login('busolatom','1234');


// function loginn(usrname,pswd) {
//   if (usrname == 'btom' && pswd == '123') {
//     return 'User is logged in';
//   } else if (usrname != 'btom') {
//     return 'Incorrect username';
//   } else if (pswd != '123') {
//     return 'Incorrect password';
//   } else if {
//     return 'Invalid username or password';
//   }
// } 

// loginn('btom','123');

// Basic Arithmetic Operators
12+34;
45-10;
45%2;
3*9;
45/2;

// Comparison Operators
20 === "20";
20 !== "20";
20 === 20;
20 !== 20;
5 < 10;
5 > 10;
5 <= 10;
5 >= 10;
  
//Built-in Maths Functions
Math.round(42/12);
Math.floor(42/12);
Math.trunc(42/12);
Math.ceil(42/12);
Math.random();
Math.max(78,50,129,54,43);

Math.ceil(Math.random() * 1000000);

// Order of operations
2 * 3 + 4 - 5 / 2 + 2 ** 2;

// Handling user input
1200 + Number('250');


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

