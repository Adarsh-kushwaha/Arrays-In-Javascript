//Q1)*** tell the output

function a() {
    setTimeout(function b() { console.log("b") }, 5000);
    console.log("a")
}




//Q2)*** Print number after time correspond to its value; 1 in 1sec. 2 in 2sec, 3 in 3sec...

function printNum() {
    for (let i = 1; i <= 10; i++) {
        //new copy of i is created at every iteration because of let
        setTimeout(function b() {
            console.log(i)
        }, i * 1000)
    }

}

//solving using var

function printNum2() {

    for (var i = 1; i <= 5; i++) {
        //new copy of i is created at every iteration by help of closure
        function closure(x) {
            setTimeout(function b() {
                console.log(x);
            }, x * 1000)

        }

        closure(i);
    }

}

//****Q-3) What is closure explain with example

function outer() {

    var a = 8;
    function inner() {
        console.log(a)
    }

    return inner;
}

// outer()();

//***q-4)What is currying in js
//currying in js means just tranforming the function

let addition = function (x, y) {
    console.log(x + y);
}

let addwith2 = addition.bind(this, 2);
// console.log(addwith2)
// addwith2(5)


//method 2 by using closures
let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyby2 = multiply(5);
// multiplyby2(5)

//***Q-5)Can you write code for this function: sum(a)(b)(c)....( n)(). This should return the sum of all the numbers a+b+c+..+n.

let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        } else {
            return a
        }
    }
}

//or

let sum2 = a => b => { return b ? sum(a + b) : a }

// console.log(sum(1)(2)(3)(4)())
