class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;;
    }

    dumpList() {
        let a_node = this.head;
        while (a_node != null) {
            console.log(`
            node : ${a_node.data}
            ---------------
             prev: ${a_node.prev?.data}
             next: ${a_node.next?.data}
            `);
            a_node = a_node.next;
        }
    }
    // add node to the end of the list
    addLast(payload) {
        const newNode = {
            prev: this.tail,
            next: null,
            data: payload
        };
        if (!this.head) {
            this.head = newNode; 
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    // add node to the start of the list
    addFirst(payload) {
        const newNode = {
            prev: null,
            next: this.head,
            data: payload
        }
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    // remove node from the end of the list
    removeLast() {
        if (this.tail) {
            if (this.tail.prev) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                //if only one node in the list
                this.head = null;
                this.tail = null;
            }
        }
    }

    // remove node from the start of the list
    removeFirst() {
        if (this.head) {
            if (this.head.next) {
                this.head = this.head.next;
                this.head.prev = null;
            } else {
                //if only one node in the list
                this.head = null;
                this.tail = null;
            }
        }
    }

    // remove node from the list
    removeNode(node) {
        if (node === this.head) {
            this.removeFirst();
        }
        else if (node === this.tail) {
            this.removeLast();
        }
        else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

    }
    // insert node before a given node
    insertBeforeNode(existingNode, payload) {
        if (!existingNode) {
            console.log("Node not found");
            return;
        }
        const newNode = {
            prev: null,
            next: null,
            data: payload
        };
        // if existing node is the first node, use addFirst method
        if (this.head === existingNode) {
            this.addFirst(payload);
            return;
        } else {
            newNode.prev = existingNode.prev;
            newNode.next = existingNode;
            existingNode.prev.next = newNode;
            existingNode.prev = newNode;
        }
    }
    // insert node after a given node
    insertAfterNode(existingNode, payload) {
        if (!existingNode) {
            console.log("Node not found");
            return;
        }
        const newNode = {
            prev: null,
            next: null,
            data: payload
        };
        // if existing node is the last node, use addLast method 
        if (this.tail === existingNode) {
            this.addLast(payload);
            return;
        } else { // if existing node is between two nodes 
            newNode.prev = existingNode;
            newNode.next = existingNode.next;
            existingNode.next.prev = newNode;
            existingNode.next = newNode;
        }
    }

    swapNodes(nodeA, nodeB){
        let nodeACheck = false;
        let nodeBCheck = false;
        let currentNode = this.head;
        while(currentNode){
            if(currentNode === nodeA){
                nodeACheck = true;
            }
            if(currentNode === nodeB){
                nodeBCheck = true;
            }
            currentNode = currentNode.next;
        }
        if(nodeACheck && nodeBCheck){
            const dataA = nodeA.data;
            nodeA.data = nodeB.data;
            nodeB.data = dataA;
            return;
        }
        console.log("Couldn't find both nodes.")
    }

    // Find a node at a specific index
    nodeAt(index) {
        if (index < 0) {
            console.log("Invalid index.");
            return null;
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode !== null && currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        if (currentNode === null) {
            console.log("Node not found at index: ", index);
            return null;
        }

        return currentNode;
    }
    get(index){
        if(!this.head){
            return -1;
        }
        let currentNode = this.head;
        let currentIndex = 0;
        while(currentNode && currentIndex < index){
            currentIndex++;
            currentNode = currentNode.next;
        }
        if(currentNode){
            return currentNode;
        } else{
            return "The node does not exist.";
        }
    }
    first() {
        if (!this.head) {
            return console.log("Empty list")
        }
        console.log(this.head);
    }
    last() {
        if (!this.head) {
            return console.log("Empty list")
        }
        console.log(this.tail);
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
      }
}
const ll = new LinkedList();
console.log(11)