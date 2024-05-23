import StackDict from "./stackDict";

describe('My Hashmap based Stack', () => {
    let stack

    beforeEach( () =>{
        stack = new StackDict()
    })

    it('is created empty', () => {
        expect(stack.top).toBe(0)
        expect(stack.items).toEqual({})
    })

    it('can push to the top of the stack', () => {
        stack.push('Rob');
        expect(stack.top).toBe(1)
        expect(stack.peek).toBe('Rob')

        stack.push('Watson');
        expect(stack.top).toBe(2)
        expect(stack.peek).toBe('Rob')
    })

    it.todo('can pop off the top of the stack')

})
