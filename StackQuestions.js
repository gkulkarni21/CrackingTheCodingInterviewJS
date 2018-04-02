const Stack = require('./Stack');

const reverse_string = (str) => {
    const strArray = [...str];
    const stack1 = new Stack();
    for (const elem of strArray){
        stack1.push(elem);
    }
    let newStr = '';
    const size = stack1.size;
    for (let i=0; i < size; i++){
        const elem = stack1.pop();
        newStr += elem;
    }
    return newStr;                                
}

const balanced_para = (expression) => {
    const opening  = '({[';
    const closing = ')}]';

    let stackTrack = new Stack();
    const expArray = [...expression];
     for (const ch of expArray){
        if (opening.includes(ch)){
            console.log('here');
            stackTrack.push(ch);
        }
        else if (closing.includes(ch)){
            if (stackTrack.size == 0){
                console.log('in here');
                return false;
            }
            else {
                console.log('else part');
                stackTrack.pop();
            }
        }
    }
    if (stackTrack.size == 0){
        return true;
    }
    else return false;
}


console.log(reverse_string("Gaurav"));
console.log(balanced_para('(()}'));