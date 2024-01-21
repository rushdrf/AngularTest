"use strict";
var TestClass = /** @class */ (function () {
    function TestClass() {
        this.num1 = 1;
        this.num2 = 100;
    }
    TestClass.prototype.testMethod = function () {
        console.log("testMethod output");
    };
    TestClass.prototype.testMethod2 = function () {
        return 99;
    };
    TestClass.staticMethod = function () {
        console.log("Hello StaticMethod");
    };
    TestClass.prototype.WhileMethod = function () {
        var n = this.num1;
        while (n <= this.num2) {
            if (n > 50)
                break;
            console.log(n % 2 === 0 ? n + " is an even number." : n + " is an odd number.");
            n++;
        }
    };
    TestClass.prototype.DoMethod = function () {
        var n = this.num1;
        do {
            console.log(n % 2 === 0 ? n + " is an even number." : n + " is an odd number.");
            n++;
        } while (n <= this.num2);
    };
    TestClass.prototype.MethodWithParameter = function (num1, num2) {
        var n;
        n = num1 + num2;
        return n;
    };
    TestClass.num2 = 13;
    return TestClass;
}());
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.Call = function () {
        console.log(this.id);
        console.log(this.name);
    };
    return Employee;
}());
var Singleton = /** @class */ (function () {
    function Singleton() {
    } //For single purpose make it private so that it will not be instantiate multiple times.
    Singleton.GetSingletonInstnce = function () {
        return this.singleton;
    };
    Singleton.prototype.setName = function (inputName) {
        this.Name = inputName;
    };
    Singleton.prototype.getName = function () {
        return this.Name;
    };
    Singleton.singleton = new Singleton();
    return Singleton;
}());
var StaticClass = /** @class */ (function () {
    function StaticClass() {
    }
    StaticClass.GetString = function () {
        return "This is static class";
    };
    StaticClass.GetNumber = function () {
        return 23;
    };
    return StaticClass;
}());
//#region object sample
var people = {
    Name: "Rusydi",
    Age: 25,
    Race: "Malay",
    Intro: function () { return "Hello, my name is " + people.Name; }
};
var person = {
    Name: "Afiq",
    Age: 30,
    Race: "Malay",
    Intro: function () { return "Hello, my name is " + person.Name; }
};
var worker = {
    Name: "Lee",
    Age: 31,
    Race: "Chinese",
    Intro: function () { return "Hello, my name is " + worker.Name; }
};
//#endregion
//#region function
function RestParam() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var ttl = 0;
    for (i = 0; i < nums.length; i++) {
        ttl += nums[i];
    }
    console.log("The total sum of numbers are " + ttl.toString());
}
function DefaultParam(input1, input2) {
    if (input2 === void 0) { input2 = "Rusydi"; }
    console.log(input1 + " " + input2);
}
var anonfunc = function () {
    console.log("Hello world");
};
var anonfunc2 = function (val) {
    console.log("Hello " + val);
};
var anonfunc3 = function (val, val2) {
    return val + val2;
};
var funcConstructor = new Function("val1", "val2", "return val1 * val2");
function recursionFunc(input) {
    if (input < 10) {
        return recursionFunc(input + (10 - input));
    }
    else {
        return input;
    }
}
// Anon Recursive function
/* (function () {
  let x = "Hello!!";
  console.log(x)
})() */
var lambdaFunc = function (val) { return val * 2; };
var lamdaStatementFunc = function (val1, val2) {
    console.log("The multiplication of ".concat(val1, " and ").concat(val2, " are: ").concat(val1 * val2));
};
var syntacticExample = function (x) {
    if (typeof (x) === "string") {
        console.log("This is a string: ".concat(x));
    }
    else if (typeof (x) === "number") {
        console.log("This is a number: ".concat(x));
    }
    else {
        console.log("Invalid data");
    }
};
function disp(x, y) {
    console.log(x);
    console.log(y);
}
var NumberProperties = function () {
    console.log("This is max number:" + Number.MAX_VALUE);
    console.log("This is min number:" + Number.MIN_VALUE);
    console.log("This is positive infinity: " + Number.POSITIVE_INFINITY);
    console.log("This is negative infinity: " + Number.NEGATIVE_INFINITY);
};
var ExampleNan = function (month) {
    if (month <= 0 || month > 12) {
        month = Number.NaN;
        console.log("Month is " + month);
    }
    else {
        console.log("Value Accepted..");
    }
};
//#endregion
//#region prototype
function student(id, name) {
    this.id = id;
    this.name = name;
}
/* let stu = new (student as any)(123, "Rusydi");
student.prototype.email = "rushdrf@gmail.com";

console.log("Employee 's Id: "+stu.id)
console.log("Employee's name: "+stu.name)
console.log("Employee's Email ID: "+stu.email) */
//#endregion
//#region object test
var obj = {
    Name: "Rusydi",
    Age: 23,
    Introduction: function (x) { return "Hello, my name is ".concat(obj.Name, ". I am ").concat(obj.Age, ". Quotes: ").concat(x); }
};
//#region 
console.log("*********************** WELCOME TO TYPESCRIPT TEST *************************");
console.log("");
console.log(obj.Introduction("It is good to see you guys"));
console.log("");
console.log("****************************************************************************");
/*
To run it
tsc helloworld.ts
node helloworld.js

If does not work
1. install node
2. run "npm install -g typescript
*/
//# sourceMappingURL=helloworld.js.map