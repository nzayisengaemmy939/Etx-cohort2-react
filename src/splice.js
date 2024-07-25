function calculateScore(operations) {
    const record = [];

    for (const op of operations) {
        if (!isNaN(op)) {
            // Convert the operation to an integer and add to the record
            record.push(parseInt(op, 10));
        } else if (op === '+') {
            // Sum the last two scores and add to the record
            const lastTwoSum = record[record.length - 1] + record[record.length - 2];
            record.push(lastTwoSum);
        } else if (op === 'D') {
            // Double the last score and add to the record
            const doubleLast = record[record.length - 1] * 2;
            record.push(doubleLast);
        } else if (op === 'C') {
            // Remove the last score from the record
            record.pop();
        }
    }

    // Calculate the total score
    const totalScore = record.reduce((total, score) => total + score, 0);

    return totalScore;
}

// Test cases
const test1 = ["5", "-2", "c","D","+"];
console.log(calculateScore(test1)); // Output: 30

const test2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
console.log(calculateScore(test2)); // Output: 27
