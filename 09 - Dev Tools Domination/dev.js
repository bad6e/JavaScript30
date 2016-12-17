const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
const cool = 'cool'
console.log("Hello I am a %s string!", 'cool');
console.log(`Hello I am a ${cool} string...`);

// Styled

console.log('%c I am some great text', 'font-size:20px');

// warning!

console.warn("Oh no!");

// Error :|

console.error("Shit!");

// Info

console.info("Crocs eat 3-4 people a year!");

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');
// console.assert(1 === 1, "That is true");

// clearing

// console.clear();
// Viewing DOM Elements

console.dir(p);



// Grouping together

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name} `);;
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old!`);
    console.groupEnd(`${dog.name}`);
})

// counting

console.count('Bret')
console.count('Bret')
console.count('Andrew')
console.count('Andrew')
console.count('Andrew')
console.count('Bret')
console.count('Bret')


// timing


console.time('fetching data');
fetch('https://api.github.com/users/bad6e')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);