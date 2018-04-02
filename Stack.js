const node = require('./LinkedListNode');

const stack = class {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    push(value) {
        this.size++;
        const newNode = new node(value);
        if (this.head === null){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    pop() {
        this.size--;
        if (this.head === null) {
            return null;
        }
        const nextNode = this.head;
        this.head = nextNode.next;
        return nextNode.value;
    }

    peek(){
        return this.head.value;
    }

    
    printList() {
        if (this.head == null){
            console.log('List is empty');
        }
        let someNode = this.head;
        while (someNode !== null){
            console.log(`${someNode.value}`);
            someNode = someNode.next;
        }
    }
}

module.exports = stack;

