class Node {
    constructor(value, pos) {
        this.pos = pos;
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {

    constructor(value) {
        this.head = {
            pos: 0,
            value: value,
            next: null,
            previous: null
        };
        this.length = 1;
        this.tail = this.head;
    }


    // clone(ant) {
    //     let new = new DoublyLinkedList(0)
    //     return 0;
    // }

    changeHead(value) {
        this.head.value = value;
    }

    printList() {
        let array = [];
        let currentList = this.head;
        while (currentList !== null) {
            array.push((currentList.value, currentList.pos));
            currentList = currentList.next;
        }

        console.log(array.join(' <--> '));
        return this;
    }

    append(value) {
        let pos = this.tail.pos;
        let newNode = new Node(value, pos + 1);

        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;

        this.length++;
    }

    prepend(value) {
        let pos = this.head.pos;
        let newNode = new Node(value, pos - 1);

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;

        this.length++;
    }
}