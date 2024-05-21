import isPalindrome from "./isPalindrome"

test('Tacocat returns true', () =>{
    expect(isPalindrome("TacocaT")).toBe(true)
})

test('Robwatson returns false', () =>{
    expect(isPalindrome("robwatson")).toBe(false)
})