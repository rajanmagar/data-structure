function Queue() {
    var collection = [];
    this.print = function() {
        return collection;
    }
    this.enqueue = function (element) {
        collection.push(element)
    }
    this.dequeue = function () {
        return collection.shift()
    }
    this.front = function() {
        return collection[0]
    }
    this.size = function() {
        return collection.length;
    }
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue()


function priorityQueue() {
    var collection = [];
    this.printCollection = function() {
        return collection;
    }
    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element)
        } else {
            var added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element)
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element)
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0]
    }
    this.front = function() {
        return collection[0]
    }
}

var pq = new priorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulksa', 1])
pq.printCollection();
pq.dequeue();
pq.enqueue(['Brain Lara', 2])