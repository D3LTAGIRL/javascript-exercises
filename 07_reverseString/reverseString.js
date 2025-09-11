const reverseString = function(string) {
    let returnString = ''
    for (let i = 0; i < string.length; i++) {
        returnString += string[string.length-i-1]
    }
    return returnString
};

// Do not edit below this line
module.exports = reverseString;
