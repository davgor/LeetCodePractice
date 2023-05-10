export function bigIntAttempt(num1: string, num2: string): string {
    let result: string = '';
    let decimalNumber: string = '';
    let carry = 0;
    let num1Decimal = '0';
    let num2Decimal = '0';
    //Split out the decimals
    if (num1.includes('.')) {
        let split = num1.indexOf('.');
        num1Decimal = num1.slice(split + 1, num1.length).toString();
        num1 = num1.slice(0, split);
    }
    if (num2.includes('.')) {
        let split = num2.indexOf('.');
        num2Decimal = num2.slice(split + 1, num2.length).toString();
        num2 = num2.slice(0, split);
    }
    //Sort the numbers where the longest is the first number
    if (num1Decimal.length < num2Decimal.length) {
        const temp = num1Decimal;
        num1Decimal = num2Decimal;
        num2Decimal = temp;
    }
    if (num1.length < num2.length) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    //Add them together starting with the decimals
    for (let x = num1Decimal.length - 1; x >= 0; x--) {
        if (num2Decimal.length - 1 >= x) {
            const value = parseInt(num1Decimal[x]) + parseInt(num2Decimal[x]) + carry;
            if (value.toString().length > 1) {
                carry = parseInt(value.toString()[0]);
                decimalNumber = value.toString()[1] + decimalNumber;
            } else {
                carry = 0;
                decimalNumber = value.toString()[0] + decimalNumber;
            }
        } else {
            decimalNumber = num1Decimal[x] + decimalNumber;
        }
    }
    //Add together the whole numbers
    let y = num2.length - 1;
    for (let x = num1.length - 1; x >= 0; x--, y--) {
        const value = (y >= 0 ) ? parseInt(num1[x]) + parseInt(num2[y]) + carry : parseInt(num1[x]) + carry;
        if (value.toString().length > 1) {
            carry = parseInt(value.toString()[0]);
            result = value.toString()[1] + result;
        } else {
            carry = 0;
            result = value.toString()[0] + result;
        }
    }
    if (carry !== 0) {
        result = `${carry}${result}`
    }
    if (decimalNumber === '0') {
        return result;
    } else {
        return `${result}.${decimalNumber}`;
    }
}