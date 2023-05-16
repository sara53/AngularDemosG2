/**
 * string
 * number
 * boolean
 * undefined
 * null
 * any
 */
// let fname: string = 10;
// fname = "ali";
// fname = 10;
// console.log(fname);

// let fname: any = true;
// fname = "mona";

// console.log(fname);

// type x = string | number;
// let fname: x = "mona";

// fname = 10;

// fname = false;

/**================= */

// let fname: string;
// fname = "alaa";
// console.log(fname);
// let products = [];

// let products: any[] = [];

// products.push("ali");
// products.push("Ahmed");
// products.push(10);
// console.log(products);
// console.log("=========");
let person: { id: number; fname: string; lname: string } = {
  id: 12,
  fname: "ali",
  lname: "alaa",
};

// let products: { id: number; productName: string; price: number }[] = [
//   { id: 1, productName: "sumsung", price: 200 },
//   { id: 1, productName: "sumsung", price: 200 },
//   { id: 1, productName: "sumsung", price: 200 },
// ];

// console.log(person);

// function greet(x: string, y: number, ...rest: string[]) {
//   console.log(rest);
//   console.log("Hello");
// }

// greet("mona", 10, "Ali", "122");

// function add(x?: number=0, y: number) {}

// add();
// function sayHello() {
//   console.log("fff");
//   return 123;
// }

interface Iperson {
  id: number;
  fname: string;
  lname: string;
  display: () => void;
}

class Person implements Iperson {
  constructor(public id: number, public fname: string, public lname: string) {}
  display = () => {};
}

class Student extends Person {
  constructor(id: number, fname: string, lname: string, public pass: string) {
    super(id, fname, lname);
  }
  display: () => {
    //// new code
  };
}

let myStudent = new Student(1, "mona", "ali", "123");
console.log(myStudent.fname);
let myPerson = new Person(1, "mona", "ali");

console.log(myPerson);
console.log(myPerson);

interface Iproduct {
  id: number;
  productName: string;
}

// let products: Iproduct[] = [
//   { id: 1, productName: "add", quantity: 10 },
//   { id: 1, productName: "add", quantity: 10 },
//   { id: 1, productName: "add", quantity: 10 },
//   { id: 1, productName: "add", quantity: 10 },
// ];
