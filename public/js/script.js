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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

