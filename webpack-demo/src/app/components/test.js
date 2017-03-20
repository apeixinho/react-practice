import $ from 'jquery';

const test = 1;
const arr = [1, 2, 3];

if(1)
    console.log('IF statement');
else
    console.log('ELSE statement');

const func = (a, b) => {
    console.log('Inside FUNC');
};

const obj = {
    a: 1,
    b: 2
};

const arr1 = [],
    obj1 = {};

arr1['a'] = 'abc';

if(0) {
    // do something
}

const self = this;

function Person(name) {
    this.name = name;
    this.getName = function() {
        console.log(this.name);
    };
}

const me = new Person('Monjit');

const str = 'a string containing "single" quotes';

function xyz() {
    return (/foo/).test('bar');
}

export const monjit = $('<div class="label label-warning">').text('Hello form another module.');