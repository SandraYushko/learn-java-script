function isPalindrome(x) {
    let palindrome=x.split("").reverse().join("")
    return x.toLowerCase()===palindrome.toLowerCase()
}



