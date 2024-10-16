let myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);

console.log(myMap.get('name')); // Output: John
console.log(myMap.size); // Output: 2

let myarray = [];

myarray.push(1);
myarray.push(3);
myarray.push(2);
myarray.push(5);
myarray.push(4);

console.log(myarray);

for (let i = 0; i < myarray.length + 1; i++) {
    if (myarray[i] > myarray[i + 1]) {
        tmp = myarray[i + 1];
        myarray[i + 1] = myarray[i];
        myarray[i] = tmp;
    }
}
console.log(myarray);