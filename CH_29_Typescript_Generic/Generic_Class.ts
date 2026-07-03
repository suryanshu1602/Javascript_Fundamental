class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    showAll(): void {
        console.log(this.items);
    }
}

const numStack = new Stack<number>();
numStack.push(10);
numStack.push(20);
numStack.push(30);
console.log("Popped:", numStack.pop());
numStack.showAll();

const strStack = new Stack<string>();
strStack.push("a");
strStack.push("b");
strStack.showAll();
