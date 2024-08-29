class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
     greet()
    {
         return `hello , my name is  ${this.name} and i am ${this.age}.`;
    }
  
}
class Student extends Person{
    constructor(name,age,grade)
    {
        super(name,age);
        this.grade=grade;
        this.courses=[];
    }
    enroll(newcourse)
    {
       this.courses.push(newcourse);
    }
    listcourses()
    {
        return this.courses.join(',');
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
      super(name, age); 
      this.subject = subject;
    }
  
 
    introduce() {
      return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
    }
  }
  

const person = new Person('lahari', 18);
console.log(person.greet()); 


const student = new Student('xyz', 15, 'A');
student.enroll('Mathematics');
student.enroll('Physics');
console.log(student.greet()); 
console.log(student.listcourses()); 


const teacher = new Teacher('geetha', 30, 'Biology');
console.log(teacher.greet()); 
console.log(teacher.introduce()); 
