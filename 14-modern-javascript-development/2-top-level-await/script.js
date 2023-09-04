// Top level await only works in modules
const res = await fetch('https://jsonplaceholder.typicode.com/posts');

const data = await res.json();

console.log(data); // Array(100)
