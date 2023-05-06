export function reverseArraySimple(arr: any[]): any[] {
    return arr.reverse(); // reverse is actually O(n)
}

export function reverseArrayManual(arr: any[]): any[] {
    const newArr: any[] = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[j] = arr[i];
        j++;
    }
    return newArr;
}