function beforeSomething(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
        console.log("EAT");
        return original.apply(this);
    };
}

function BeforeSomeSomeThing(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
        console.log("SLEEP");
        return original.apply(this);
    };
}

class Dog {
    @beforeSomething
    @BeforeSomeSomeThing
    bark() {
        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);