
function addNumbers(input) {
    let finalSum;

    if (input.length > 0) {
        let numArr  = [];
        let negativeNumbers = [];

        let checkPositiveOrNegative = input.match(/-?\d+/g);

        negativeCount = 0;

        for (let each of checkPositiveOrNegative){
            if (Number(each) > 0) {
                let num = Number(each) >= 1000 ? 0 : Number(each)
                numArr.push(num);
            } else {
                negativeNumbers.push(Number(each))
                negativeCount++;
            }
        }

    if (negativeCount > 0) {
        finalSum  = `Cant add these negative numbers ${negativeNumbers}`;
    } else {
       finalSum =  numArr.reduce((acc,num) => acc+num, 0)
    }
    } else {
         finalSum = 0
    }
    
    return finalSum
}

const result = addNumbers("//;\n1;-2-3-4");
console.log(result)
