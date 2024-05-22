import shallowObClone from "./shallowObjClone";

test('Create a clone of the object parameter', () => {
    const myObj = { name: 'blah', age: '12' }
    expect(shallowObClone(myObj)).toStrictEqual(myObj)
})