const stack = require('./stack');

const stack_of_stacks = class {
    constructor(capacity){
        this.stackList = Array();
        this.stackList.push(new stack());
        this.stackListSize = 1;
        this.capacity = capacity || 10;
    }

    get_last_stack(){
        if (this.stackListSize !== 0){
            return this.stackList[this.stackListSize-1]
        }
        return null;
    }

    push(value){
        const lastStack = this.get_last_stack();

        if (lastStack.size == this.capacity){
            let newStack = new stack();
            newStack.push(value);
            this.stackList.push(newStack);
            this.stackListSize += 1; 
        }
        else {
            lastStack.push(value);
        }
    }

    pop(){
        const lastStack = this.get_last_stack();
        const value = lastStack.pop();
        this.stackListSize -= 1;
    }
}

const s1 = new stack_of_stacks(10);
for (let i = 0; i < 14; i++){
    s1.push(i);
}
console.log(s1.stackListSize);
s1.pop();
console.log(s1.stackListSize);
s1.pop();
console.log(s1.stackListSize);
