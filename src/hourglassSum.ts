export function hourglassSum(arr: number[][]): number {
    let x = arr.length
    let y = arr[0].length
    if (x < 3 || y < 3) {
        throw new Error("No hourglass possible")
    }

    let max_sum: number;// tracker to store the current highest value
    for (let i = 0; i < x - 2; i++)
        {
            for (let j = 0; j < y - 2; j++)
            {
                let sum = ( arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) + //Top of hourglass
                    (arr[i + 1][j + 1]) + //middle of hourglass
                  (arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2] // bottom of hourglass
                );
                if (max_sum !== undefined) {
                    max_sum = Math.max(max_sum, sum); //figure out if new number is larger then the last
                } else {
                    max_sum = sum;
                }
            }
        }
    return max_sum!;
} 