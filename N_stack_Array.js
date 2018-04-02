const n_stack_array = class {
    constructor(size, num_of_stacks){
        this.size = size;
        let holding_array = Array(size * num_of_stacks).fill(0);
        let pointer_array = Array(size).fill(0);
    }

    push(stack_number, value){
        const index = this.size * stack_number + this.pointer_array[stack_number] + 1;
        this.holding_array[index] = value;
        this.pointer_array[stack_number] += 1;
    }

    pop (stack_number){
        if (pointer_array[stack_number] == 0){
            return false;
        }
        const index = this.size * stack_number + pointer_array[stack_number];
        pointer_array[stack_number] -= 1;
        const value = holding_array[index];
        holding_array[index] = 0;
        return value;
    }

    peek (stack_number) {
        if (pointer_array[stack_number] == 0){
            return false;
        }
        const index = this.size * stack_number + pointer_array[stack_number];
        return holding_array[index];
    }
}