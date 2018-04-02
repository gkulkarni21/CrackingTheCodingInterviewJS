const LinkedListNode = require('./LinkedListNode');
const DLinkedListNode = require('./DoublyLinkedListNode');

const LinkedList = class {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value){
        const newNode = new LinkedListNode(value);
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    addDoubly(value){
        const newNode = new DLinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    search(value) {
        let someNode = this.head;
        while (someNode !== null && someNode.value !== value){
            someNode = someNode.next;
        }
        if(someNode !== null) {
            return someNode;
        } else {
            return 'Node not found';
        }
    }

    delete(value){
        //no exists, head node, only node, middle node, tail node
        let deleteNode = this.head;
        let prevNode = this.head;
        if (deleteNode.value === value){ //head node
            this.head = this.head.next;
            return 'head Node removed';
            this.size--;
        } else if (deleteNode === this.tail) { //only node
            this.head = null;
            this.tail = null;
            return 'head and tail node removed';
            this.size--;
        } 
        while (deleteNode !== null && deleteNode.value !== value && deleteNode.next !== null){
            prevNode = deleteNode;
            deleteNode = deleteNode.next;
        }
        if(deleteNode.next === null){
            this.tail = prevNode;
            this.tail = null;
            return 'tail node removed'
            this.size--;
        } else {
            prevNode.next = deleteNode.next;
            return `node with ${value} removed`;
            this.size--;
        }
        return 'node not found';
    
    }
    
    traverseReverse (){
        if (this.tail == null){
            return 'some error';
        }
        else {
            let curr = this.tail;
            if (curr == this.head){
                console.log(`Only node in list is ${curr}`);
                return;
            }
            while (curr !==  this.head){
                let prev = this.head;
                while (prev.next !== curr){
                    prev = prev.next;
                }
                console.log(curr.value);
                curr = prev;
            }
            console.log(curr.value);   
        }
    }

    printList() {
        if (this.head == null){
            console.log('List is empty');
        }
        console.log(`size: ${this.size}`);
        let someNode = this.head;
        while (someNode !== null){
            console.log(`${someNode.value}`);
            someNode = someNode.next;    
        }
    }

}

module.exports = LinkedList;