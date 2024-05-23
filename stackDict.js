// Implement a stack using a dicitonary/hashmap/object

class StackDict {
    constructor() {
      this.items = {}; // Object to store items
      this.top = 0;    // Counter to keep track of the top of the stack
    }

    get peek() {
        const item = this.items[this.top]
        return item
    }
  
    push(item) {
      this.items[this.top] = item; // Store the item at the current top position
      this.top++;                  // Increment top after pushing
    }
  
    pop() {
      if (this.top === 0) {
        return null; // If stack is empty, return null
      }
  
      this.top--;                      
      const item = this.items[this.top]; 
      delete this.items[this.top];      
      return item;                    
    }
  }
  
  
export default StackDict  