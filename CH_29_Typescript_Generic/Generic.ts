function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello Generics"));
console.log(identity<number>(42));
console.log(identity<boolean>(true));
