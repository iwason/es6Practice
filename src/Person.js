class Person {
    constructor(name){
        this.name = name;
    }
    greet() {
        return name + ' says hello.';
    }
}
console.log(new Person('jerry').greet());
