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

// String concatenation
const firstName = "Busola ";
const lastName = " Tom";
firstName.trim() + " " + lastName.trim();

// Template literal
`${firstName.trim()} ${lastName.trim()}`;

// String methods
firstName.length;
lastName.length;
`${firstName.trim()} ${lastName.trim()}`.length;
(firstName.trim() + " " + lastName.trim()).length;
firstName.trim().toUpperCase();
lastName.trim().toUpperCase();
firstName.trim().toLowerCase();
lastName.trim().toLowerCase();
firstName.trim().charAt(1);
lastName.trim().charCodeAt(2);
`${firstName.trim().charAt()}.${lastName.trim().charAt()}.`;
(firstName.trim().charAt() + "." + lastName.trim().charAt() + ".");

// String conversion
String(2024);

// Write a function that will add a participant to our Google classroom
function addParticipantToClass(classId, participantEmail) {
  // Simulates adding a participant to a class
  // classId: The ID of the class.
  // participantEmail: The email address of the participant.
  console.log(`Participant ${participantEmail} added to class ${classId}`);
  // sending mail notification
  console.log(`Sending notification to ${participantEmail} about joining class ${classId}`);
}
// Example usage
const classId = "AlphaCohort2";
const participantEmail = "busola@email.com";
addParticipantToClass(classId, participantEmail);


const participants = [];
function addParticipant(email) {
  // Check if email was provided
  if (!email) {
    return "Email not provided!";
  }
  // Check if email is valid
  if (!email.includes('@')) {
    return "Invalid email";
  }
  // add email to the participants
  participants.push(email);
  // notify them via email
  // return response
  return "Participant added";
}
addParticipant();


function addClassParticipant(Id, Email) {
  // Simulates adding a participant to a class
  const message = `Participant ${Email} added to class ${Id}. Sending notification to ${Email} about joining class ${Id}.`;
  return message; // This line returns the success message
}

// Example usage
const Id = "AlphaCohort2";
const Email = "busola@email.com";
addClassParticipant(Id, Email);

// Javascript Array Methods
const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join(' ');
alphabets.join(' ').split(' ');

  
// Write a function that will take first name, last name and return full name with variable and concatenation
function fullname(firstn, lastn) {
  const fullname = firstn + ' ' + lastn;
  return fullname;
}
const firstn = 'Busola';
const lastn = 'Tom';
fullname(firstn, lastn);

// Write a function that will take first name, last name and return full name with template literals
function fullnme(firstnm, lastnm) {
 return `${firstnm} ${lastnm}`;
}
fullnme('Busola', 'Tom');

// Write a function that will take a user with first name, last name and return full name
const user = {
firste: 'Busola',
laste: 'Tom'
}
function full(user) {
  return `${user.firste} ${user.laste}`;
}
full(user);

// Array map
const users = [
  {firste: 'Linda', laste: 'Parker'},
  {firste: 'Joel', laste: 'Duke'},
  {firste: 'Esther', laste: 'Kwashie'},
  {firste: 'Michael', laste: 'Hammond'},
  {firste: 'Theresa', laste: 'Swaris'},
  {firste: 'Elon', laste: 'Musk'},
]
users.map(full);

// Write a function that will take a user with first name, last name and return full name also spread first name and last name
const user = {
  firste: 'Busola',
  laste: 'Tom',
}
function full(user) {
    return {
      // ... means spread user 
      ...user, 
      full: `${user.firste} ${user.laste}`
    }
}
full(user);

// Array map
const users = [
  {firste: 'Linda', laste: 'Parker'},
  {firste: 'Joel', laste: 'Duke'},
  {firste: 'Esther', laste: 'Kwashie'},
  {firste: 'Michael', laste: 'Hammond'},
  {firste: 'Theresa', laste: 'Swaris'},
  {firste: 'Elon', laste: 'Musk'},
]
users.map(full);
  
  // Array map- return square of numbers
function square(number) {
  return number ** 2;
}
const numbers = [0,1,2,3,4,5]
numbers.map(square);
  
  // Filter and return even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even);

// Filter and return odd numbers
function odd(number) {
  return number % 2 === 1;
}
numbers.filter(odd);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

