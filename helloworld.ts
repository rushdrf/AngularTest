import TestClass from "/Repos/AngularTest/main";



//#region object sample
var people = {
  Name: "Rusydi",
  Age: 25,
  Race: "Malay",
  Intro: () => { return "Hello, my name is " +  people.Name }
}

interface Iperson  {
  Name:string,
  Age:number,
  Race:string,
  Intro: () => string
}

var person:Iperson = {
  Name: "Afiq",
  Age: 30,
  Race: "Malay",
  Intro: () => { return "Hello, my name is " + person.Name }
}

var worker:Iperson = {
  Name: "Lee",
  Age: 31,
  Race: "Chinese",
  Intro: () => { return "Hello, my name is " + worker.Name }
}
//#endregion

//#region function
function RestParam(...nums:number[]) {
  let i:number;
  let ttl:number = 0;

  for (i = 0; i < nums.length; i++) {
    ttl+=nums[i];
  }

  console.log("The total sum of numbers are " + ttl.toString());
}

function DefaultParam(input1:string, input2:string = "Rusydi") {
  console.log(input1 + " " + input2);
}

let anonfunc = function() {
  console.log("Hello world");
}

let anonfunc2 = function(val:string) {
  console.log("Hello " + val);
}

let anonfunc3 = function(val:number, val2:number) {
  return val + val2;
}

let funcConstructor = new Function("val1", "val2", "return val1 * val2");

function recursionFunc(input:number) {
  if (input < 10) {
    return recursionFunc(input + (10 - input))
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

let lambdaFunc = (val:number) => val * 2

let lamdaStatementFunc = (val1:number, val2:number) => {
  console.log(`The multiplication of ${val1} and ${val2} are: ${val1 * val2}`);
}

let syntacticExample = (x:any) => {
  if (typeof(x) === "string") {
    console.log(`This is a string: ${x}`);
  }
  else if (typeof(x) === "number") {
    console.log(`This is a number: ${x}`);
  }
  else {
    console.log(`Invalid data`);
  }
}

function disp(s1:string):void;
function disp(n1:number,s1:string):void;

function disp(x:any,y?:any):void {
   console.log(x);
   console.log(y);
}

let NumberProperties = () => {
  console.log("This is max number:" + Number.MAX_VALUE);
  console.log("This is min number:" + Number.MIN_VALUE);
  console.log("This is positive infinity: " + Number.POSITIVE_INFINITY);
  console.log("This is negative infinity: " + Number.NEGATIVE_INFINITY);
}

let ExampleNan = (month:number) => {
  if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("Month is " + month);
  }
  else {
    console.log("Value Accepted..");
  }
}

//#endregion

//#region prototype
function student(this: any, id:number, name:string) {
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
let obj = {
  Name: "Rusydi",
  Age: 23,
  Introduction: (x:string) => {return `Hello, my name is ${obj.Name}. I am ${obj.Age}. Quotes: ${x}`}
}
//#region 

console.log("*********************** WELCOME TO TYPESCRIPT TEST *************************")
console.log("");

console.log(obj.Introduction("It is good to see you guys"))

console.log("");
console.log("****************************************************************************")


/*
To run it
tsc helloworld.ts
node helloworld.js

If does not work
1. install node
2. run "npm install -g typescript
*/
