// Implement a stack using a dicitonary/hashmap/object

class StackDict {
    constructor() {
      this.items = {}; // Object to store items
      this.top = 0;    // Counter to keep track of the top of the stack
    }

    get peek() {
      return this.top > 0 ? this.items[this.top] : null; // Return top item or null if stack is empty
    }
  
    push(item) {
      this.top += 1
      this.items[this.top] = item; // Store the item at the current top position
    }
  
    pop() {
      if (this.top === 0) {
        return null; // If stack is empty, return null
      }
  
      this.top -= 1;                      
      const item = this.items[this.top]; 
      delete this.items[this.top];      
      return item;                    
    }
  }
  
  
export default StackDict  