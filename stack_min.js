const Stack = require('./Stack');

const stackMin  = class extends Stack {
    constructor(){
        let S2= new Stack();
    }

    push(value){
        if (value < this.min()){
            S2.push(value);
        }
        super.push(value);
    }

    min(){
        if (this.size == 0){
            return Number.MAX_SAFE_INTEGER;
        }
        else {
            return S2.peek();
        }
    }
}