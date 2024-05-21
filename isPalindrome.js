const isPalindrome = word => {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}

export default isPalindrome