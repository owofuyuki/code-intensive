class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  sayHello() {
    super.sayHello();
    console.log("I am grade " + this.grade);
  }
}

// Con trỏ "super" được sử dụng để truy cập vào các giá trị được kế thừa từ class cha

const ClassIntroduction = () => {
  const personA = new Person("Alice");
  personA.sayHello(); // Hello, my name is Alice
  const personB = new Person("Bob");
  personB.sayHello(); // Hello, my name is Bob

  const studentA = new Student("Chloe", 10);
  studentA.sayHello();

  return <div></div>;
};

export default ClassIntroduction;
