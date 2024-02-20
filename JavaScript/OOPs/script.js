// const employee = {
//     calculateTax(){
//         console.log("Tax rate is 10%");
//     },
//     setInfo(empName, salary){
//         this.empName = empName;
//         this.salary = salary;
//     }
// };
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