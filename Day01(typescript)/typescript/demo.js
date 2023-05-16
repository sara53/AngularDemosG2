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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var person = {
    id: 12,
    fname: "ali",
    lname: "alaa"
};
var Person = /** @class */ (function () {
    function Person(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.display = function () { };
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, fname, lname, pass) {
        var _this = _super.call(this, id, fname, lname) || this;
        _this.pass = pass;
        return _this;
    }
    return Student;
}(Person));
var myStudent = new Student(1, "mona", "ali", "123");
console.log(myStudent.fname);
var myPerson = new Person(1, "mona", "ali");
console.log(myPerson);
console.log(myPerson);
// let products: Iproduct[] = [
//   { id: 1, productName: "add", quantity: 10 },
//   { id: 1, productName: "add", quantity: 10 },
//   { id: 1, productName: "add", quantity: 10 },
//   { id: 1, productName: "add", quantity: 10 },
// ];
