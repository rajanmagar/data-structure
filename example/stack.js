let Stack = function() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of stack
    this.pop = function () {
        if (this.count === 0) {
            return `Nothing in the stack`;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Size of the stack
    this.size = function () {
        return this.count;
    }

    // Return the value at the end of the stack
    this.peek = function () {
        return this.storage[this.count - 1]
    }
}

let stack = new Stack();