export function palindromeBrute(text: any): Boolean {
    text = text.toString();
    let reverseText = '';
    Object.keys(text).reverse().forEach(function(index) {
        reverseText += text[index];
    });
    return (text === reverseText);
}

export function palindromeOofN(text: any): Boolean {
    text = text.toString();
    let j = text.length - 1;
    for (let i = 0; i < j; i++, j--) {
        while (i < j && !isAlphaNumeric(text[i])) {
            i++;
        }
        while (i < j && !isAlphaNumeric(text[j])) {
            j--;
        }
        if (i < j && text[i].toLowerCase() !== text[j].toLowerCase()) {
            return false;
        }
    }
    return true;
}
function isAlphaNumeric(value: string) {
    return value.match(/^[A-Za-z0-9]+$/);
}