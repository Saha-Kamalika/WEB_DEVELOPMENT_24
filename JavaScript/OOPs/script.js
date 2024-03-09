// const employee = {
//     calculateTax(){
//         console.log("Tax rate is 10%");
//     },
//     setInfo(empName, salary){
//         this.empName = empName;
//         this.salary = salary;
//     }
// };

//dynamic keys
let idType = "studentId";
const myObj = {
    [idType] : "155",
    firstName: "Kamalika",
    greet : function(){
        console.log(`Say hello to ${myObj.firstName} with ${idType} ${myObj[idType]}`);
    }
};
myObj.greet();
//Pass by reference 
let obj1 = {
    name: "Kamalika",
    roll: 155
}
let obj2 = {
    name: "Srijit",
    roll: 156
}
let isEqual = obj1==obj2 ? true:false;
console.log(isEqual);
let obj3=obj1;
isEqual = obj3==obj1 ? true:false;
console.log(isEqual);

//object methods
let newObj = {
    id: 155,
    name: "Rumi",
    pin: 101,
    isValid: true
};
console.log(Object.keys(newObj));
console.log(Object.values(newObj));
console.log(Object.entries(newObj));
const oldObj = {   //source
    a: 1,
    b: 2
};
const currObj = {   //target
    b: 5,
    c: 19
}
const urObj = Object.assign(currObj, oldObj);
console.log(urObj);
// const programmer = {
//     firstName: "Kamalika",
//     calculateTax(){
//         console.log("Tax rate is 20%");
//     }
// };
// programmer.__proto__ = employee;


// class employee{
//     setInfo(empName, salary){
//         this.empName = empName;
//         this.salary = salary;
//     }
// }
// let employee1 = new employee();
// employee1.setInfo("Kamalika", 20000);
// let employee2 = new employee();
// employee2.setInfo("Srijit", 21000);
// console.log(employee1);

let data = "college information";
class User{
    constructor(name, email){
        this.name= name;
        this.email= email;
    }
    viewData(){
        console.log(data);
    }
}
class Student extends User{
    constructor(name, email, roll){
        super(name, email);
        this.roll = roll;
    }
}
class Teacher extends User{
    constructor(name, email, id){
        super(name, email);
        this.id= id;
    }
    editData(){
        data = "edited info";
    }
}
let student1 = new Student("Kamalika", "kam@gmail.com", 155);
let student2 = new Student("Kam", "ami@gmail.com", 155);

let teacher1 = new Teacher("Rumi", "rum@", 1202);
teacher1.editData();
teacher1.viewData();