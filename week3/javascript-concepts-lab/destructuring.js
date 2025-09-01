const person = { name: 'Alice', info: { age: 30, occupation: 'Engineer' } };

const { name: firstName, info: { age, occupation } } = person;

console.log('Name:', firstName);
console.log('Age:', age);
console.log('Occupation:', occupation);

function greetUser({ name, age }) {
    console.log(`Hello, ${name}! You're ${age} years old.`);
}

greetUser({ name: 'Bob', age: 25 });