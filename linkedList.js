// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

class Node {
    constructor (value, next = null){
    this.value = value;
    this.next = next;
    }
}

class linkedList { 
    constructor(){
        this.head = null;
        this.count = 0;
    }

append(value)
{
    const newNode = new Node(value);


    if(!this.head){
        this.head = newNode;  //if linked list is empty, create new node as the head of the list
    }
    else{
        let current = this.head; //start from the head of the linked list


        //traverse the list until the last node
        while(current.next){
            current = current.next;
        }
        //set the new pointer of the last node to this node
        current.next = newNode;
    }
    this.count++; //increment the count of nodes in the linked list 
}

prepend(value)
{
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    
    this.count++;
}


//size returns the total number of nodes in the list


size()
{

    return this.count;

}


//head returns the first node in the list


head(){
    return this.head; 
}


tail(){
    if(!this.head)
    {
        return null;
    }
    
    let current = this.head;

    //traverse the list until the last node

    while(current.next){
        current = current.next;
    }
    return current;
}


at(index){
    if(index < 0 || index >= this.count || !this.head)
    {
        return null;
    }
    let current = this.head;
    let currentIndex = 0;

    while(currentIndex<index)
    {
        current = current.next;
        currentIndex++;
    }
    return current; //returnez valoarea care se afla la indexul dat de mn prin at(index)
}


//pop removes the last element from the list


pop(){

    if(!this.head)
    {
        return null;
    }

    if(!this.head.next){
        const popNode = this.head;
        this.head = null;
        this.count--;
        return popNode;
    }
    let current = this.head;
    let previous = null;


    //traverse the list until we reach the last node 

    while(current.next){
        previous = current;
        current = current.next;
    }

    //remove the last node by updating the next pointer

    previous.next = null;
    this.count--;

    return current;

}

    }



const list = new linkedList();



list.append(1);
list.append(2);
list.append(3);
list.prepend(8);
list.prepend(7);

console.log(list);
console.log(list.pop());



