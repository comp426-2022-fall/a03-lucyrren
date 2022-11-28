export function roll(numberOfSides, numberOfDice, numberOfRolls){
    let result = [];
    let diceSum = 0;
    //iterate through the amount of times we are rollings
    for(let i = 0; i < numberOfRolls; i++){
        diceSum = 0;
        //iterate through the number of dice we are rolling
        for(let j = 0; j < numberOfDice; j++){
            diceSum += Math.floor((Math.random() * numberOfSides) + 1);
        }
        result.push(diceSum);
    }
    return {
        sides: numberOfSides, 
        dice: numberOfDice, 
        rolls: numberOfRolls, 
        results: result
    };
}