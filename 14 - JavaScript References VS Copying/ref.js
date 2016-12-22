// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = 'Wes';
// let name2 = name;
// console.log(name, name2);
// name = 'Wesley'
// console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// const team = players;
// console.log(players, team);

// You might think we can just do something like this:

// team[3] = 'Lux';

//IT WILL ALWAYS GO BACK TO THE REFERENCE

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

// one day

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects

const person = {
    name: 'Bret',
    age: 28
};



// and think we make a copy:

// const captain = person;
// captain.age = 99;

// how do we take a copy instead?

const captain = Object.assign({}, person, { age: 99})

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

// const cap3 = {...person};

const bret = {
    name: 'Bret',
    age: 28,
    social: {
        twitter: 'abc',
        facebook: 'cde'
    }
}

console.log(bret);

const dev = Object.assign({}, bret);

//poor mans deep clone - can be expensive on the browser
const dev2 = JSON.parse(JSON.stringify(bret))


























