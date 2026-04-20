// alert('Enter you name');
// alert('Enter you name');
// alert('name');
// alert(999);


// let a = 100;
// let b = 20;

// console.log(a +b);

// document.write(a + b);



// javascript functions

function fristName(){
    console.log('Hello would');
}

fristName();


function isSubscribe() {
    document.write('Subscribed');
}

document.getElementById('btn').addEventListener('click', isSubscribe);


// javascript Object

const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};

const obj2 = {
    x: 1,
    y: 2,
    z: 3,
};

const obj3 = {
    p: 1,
    q: 2,
    r: 3,
};


// const objFinal = Object.assign(target, source);
const objFinal = Object.assign({}, obj1, obj2, obj3);
// const objFinal = { ...obj1, ...obj2, ...obj3 };
console.log(objFinal);


function Person(first, last) {
    this.fristName = first,
    this.lastName = last;
}

const person1 = new Person('Sagor', 'Howlader');
person1.age = 25;
const person2 = new Person('front-end', 'developer');
// person2.year = 1;

console.log(person1);
console.log(person2);


// javascript Arrays

// const language = ['HTML', 'CSS', 'JavaScript', 'C++', 'PHP', 
// 'Python', 'Java', 'C#', true, 50];
const language = new Array('HTML', 'CSS', 'JavaScript', 'C++', 'PHP', 
'Python', 'Java', 'C#', true, 50);

//  console.log(language);
 console.log(language);