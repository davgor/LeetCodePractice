export function findCelebrityLeastEfficent(matrix: Number[][]): Number {
    let celebrity = -1;
    const eliminatedIndividuals: Number[] = [];
    matrix.forEach(function(individual, individualIndex) {
        if (!eliminatedIndividuals.includes(individualIndex)) {
            individual.forEach(function (knows, knowsIndex) {
                if (individualIndex !== knowsIndex) { // don't count themselves
                    if (knows === 0) { // If they don't know someone eliminate that someone
                        eliminatedIndividuals.push(knowsIndex)
                    }
                    if (knows === 1) {
                        eliminatedIndividuals.push(individualIndex) // if the individual knows anyone outside of themselves, exclude
                    }
                }
            });
        }
    });
    matrix.forEach(function(individual, index){
        if (!eliminatedIndividuals.includes(index)) {
            celebrity = index;
        }
    })
    return celebrity;
}

export function findCelebrityOofN(matrix: number[][]): Number {
    let celebrity = -1;
    let indexList: number[] = [];
    for (let i = 0; i <= matrix.length - 1; i++) {
        indexList.push(i);
    }
    for (let i = 0; i <= matrix.length - 1; i++) { //if we found a celebrity then bail
        if (indexList.includes(i)) { // only run on items remaining
            matrix[i].forEach(function (knows, index) {
                if (i !== index) {
                    if (knows === 0) {
                        indexList = indexList.filter(person => person != index);
                    } else {
                        indexList = indexList.filter(person => person != i);
                    }
                }
            });
        }
    }
    if (indexList.length === 1) {
        celebrity = indexList[0];
    }
    return celebrity;
}
