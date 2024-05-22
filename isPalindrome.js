import reverseString from "./reverseString"

const isPalindrome = word => {
    return word.toLowerCase() === reverseString(word).toLowerCase()
}

export default isPalindrome