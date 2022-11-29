// // Inheritance 
// class parentClass{
//     constructor(){
//         this.campus="Navgurukul"
//     }
// }
// class childClass extends parentClass{
//     constructor(students){
//         super()
//         this.student=students
//     }
// }
// let python_student=new childClass("swati")
// console.log(python_student)



// Polymorphism
// class parentClass{
//     country(){
//         console.log("my country is india")
//     }
// }
// class childClass1 extends parentClass{
//     country(){
//         console.log("my country is america")
//     }
// }
// class childClass2 extends parentClass{
//     country(){
//         console.log("my country is indonesia")
//     }
// }
// let person1=new childClass1
// person1.country()
// person1=new childClass2
// person1.country()




// Inheritance
// class parentClass{
//     constructor(firstName,lastName){
//         this.firstName=firstName,
//         this.lastName=lastName
//     }
//     display(){
//         console.log(`my name is ${this.firstName} ${this.lastName} I am ${this.age}`)
//     }
// }
// class childClass1 extends parentClass{
//     constructor(firstName,lastName,age,gender){
//         super(firstName,lastName)
//         this.age=age
//         this.gender=gender
//     }
// }
// let person1=new childClass1("Prachi","More","21","female")
// // console.log(person1)
// person1.display()