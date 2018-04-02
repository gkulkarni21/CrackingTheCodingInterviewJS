const DLLNode = class {
    constructor(value){
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}

module.exports = DLLNode;