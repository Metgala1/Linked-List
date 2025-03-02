
function Node(value = null, nextNode = null) {
    return {
      value,
      nextNode,
    };
  }
  
 
  function LinkedList() {
    let headNode = null;
    let listSize = 0;
  
    const append = (value) => {
      const newNode = Node(value);
      if (!headNode) {
        headNode = newNode;
      } else {
        let current = headNode;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = newNode;
      }
      listSize++;
    };
  
    const prepend = (value) => {
      const newNode = Node(value, headNode);
      headNode = newNode;
      listSize++;
    };
  
    const size = () => {
      return listSize;
    };
  
    const head = () => {
      return headNode;
    };
  
    const tail = () => {
      if (!headNode) return null;
      let current = headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    };
  
    const at = (index) => {
      if (index < 0 || index >= listSize) return null;
      let current = headNode;
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }
      return current;
    };
  
    const pop = () => {
        if (!headNode) return;
        if (!headNode.nextNode) {
            headNode = null;
            listSize = 0;
            return;
        }
        let current = headNode;
        let previous = null;
        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
        listSize--;
    };
  
    const contains = (value) => {
      let current = headNode;
      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    };
  
    const find = (value) => {
      let current = headNode;
      let index = 0;
      while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return null;
    };
  
    const toString = () => {
      let current = headNode;
      let result = "";
      while (current) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      result += "null";
      return result;
    };

  
    return {
      append,
      prepend,
      size,
      head,
      tail,
      at,
      pop,
      contains,
      find,
      toString,
    };
  }
  

  const myList = LinkedList();
  myList.append("dog");
  myList.append("cat");
  myList.append("parrot");
  myList.append("hamster");
  myList.append("snake");
  myList.append("turtle");
  
  console.log(myList.toString()); 
  console.log("Size:", myList.size());
  console.log("Head:", myList.head()); 
  console.log("Tail:", myList.tail()); 
  console.log("At index 2:", myList.at(1)); 
  console.log("Contains 2:", myList.contains(2)); 
  console.log("Find 2:", myList.find(2)); 
  myList.pop();
  console.log(myList.toString());
  console.log("Size after pop:", myList.size());
  console.log("Contains 3 after pop:", myList.contains(3));
  console.log("Find 3 after pop:", myList.find(3)); 