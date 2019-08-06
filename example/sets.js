// ***** Sets ***** //
// sets is like array except there is no duplicate items. Use case is to check the presence of item. Es6 has built in set object.

function mySet() {
    // collection will hold the set
    var collection = [];

    // this method will check the for the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1)
    }

    // this method will return all the values in the set
    this.values = function() {
        return collection;
    }

    // this method will add an element to the set
    this.add = function(element) {
        if (!(this.has(element))) {
            collection.push(element);
            return true;
        }
        return false;
    }

    // this method will remove an element from a set
    this.remove = function(element) {
        if (this.has(element)) {
            var index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
    }

    // this method will return the size of the collection
    this.size = function () {
        return collection.length;
    }

    /* Everything so far is in es6 sets now will go through the methods which is not in the es6 sets */

    // this method will return the union of two sets
    this.union = function (otherSet) {
        var unoionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(element => {
            unoionSet.add(element);
        });
        secondSet.forEach(element => {
            unoionSet.add(element);
        })
        return unoionSet;
    }

    // this method will return the intersection of two sets as new set
    this.intersection = function (otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    // this method will return the difference of two sets as a new set
    this.difference = function (otherSet) {
        var differentSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                differentSet.add(e)
            }
        });
        return differentSet;
    }

    // this method will test if the set is a subset of a different set
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value)
        });
    };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA, setB, 'subset- ', setA.subset(setB), 'union- ', setA.union(setB).values(), setA.values(), setB.values())