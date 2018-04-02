const LL = require('./LinkedLIst');
const LLnode = require('./LinkedListNode');

const removeDups = (list) => {
    const valueObj = {};
    if (list.head === null){
        return false;
    }
    let curr = list.head;
    while (curr !== null) {
        if (!valueObj[curr.value]){
            valueObj[curr.value] = 1;
        }
        else {
            list.delete(curr.value)
        }
        curr = curr.next;
    }
    return list;
}

const kthtoLast = (list, k) =>
{
    if (list.head === null){
        return null;
    }
    else {
        let start = list.head;
        let end = list.head;

        for (let i=0; i < k; i++){
            if (end !== null){
                end = end.next;
            }
        }

        while (end !== null){
            start = start.next;
            end = end.next;
        }
        return start;
    }
}

const partiotionBasedOnValue = (list, value) =>
{   
    let smallerList = new LL();
    let biggerList = new LL();

    let current = list.head;
    if (current === null){
        return list;
    }
    while (current !== null){
        if (current.value < value){
            smallerList.add(current.value);
        }
        else {
            biggerList.add(current.value);
        }
        current = current.next;
    }
    if (biggerList.head !== null){
        smallerList.tail.next = biggerList.head;
    }
    return smallerList;
}

addToNumbers = (list1Head, list2Head, carry) => {
    if (list1Head == null && list2Head == null & carry <= 0){
        return;
    }
    const result = list1Head.value + list2Head.value + carry;
    const reminder = result % 10;
    const newCarry = result/10;
    const resultNode = new LLnode(reminder);
    const newNode = addToNumbers(list1Head.next, list2Head.next, newCarry > 0? newCarry: 0 )
    resultNode.next = newNode;
    return resultNode;
}

ifPalindrome = (list1) => {
    const list2 = getReversedList(list1);
    console.log('list2');
    list2.printList();
    const compare = ifEqual(list1.head, list2.head);
    return compare;
}

getReversedList = (list1) => {
    if (list1.head === null){
        return false;
    }
    let reverseList = new LL();
    let curr = list1.tail;
    while (curr !== list1.head){
        let prev = list1.head;
        while (prev.next !== curr){
            prev = prev.next;
        }
        reverseList.add(curr.value);
        curr = prev;
    }
    reverseList.add(curr.value)
    return reverseList;
}

ifEqual = (list1Head, list2Head) => {
    while (list1Head !== null && list2Head !== null) {
        if (list1Head.value != list2Head.value){
            return false;
        }
        list1Head = list1Head.next;
        list2Head = list2Head.next;
    }
    return list1Head == null && list2Head == null
}

ifIntersect = (list1, list2) => {
    if (list1.head == null || list2.head == null){
        return false;
    }
    let shorter = list1.size < list2.size? list1.head : list2.head;
    let longer = list1.size < list2.size? list2.head : list1.head;

    longer = getKthNode(list2.head, Math.abs(list1.size - list2.size));

    while (shorter != longer) {
        shorter = shorter.next;
        longer = longer.next;
    }
    return shorter;
}

ifCircular = (list) => {
    let slow = list.head;
    let fast = list.head;

    while(slow.next !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast){
            return true;
        }
    }
    return false;
}

findMeetingPoint = (list) => {
    let slower = list.head;
    let faster = list.head;

    while(slow.next !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast){
           break;
        }
    }
    
    slow = list.head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;

}

getKthNode = (head, K) => {
    let curr = head;
    while (curr != null && K != 0){
        curr = curr.next;
        K--;
    }
    return curr;
}

let newLL = new LL();
newLL.add(1);
newLL.add(2);
newLL.add(4);
newLL.add(3);
newLL.add(1);

newLL.printList();
const ifTrue = ifPalindrome(newLL);
console.log(`Palindrom: `, ifTrue);


