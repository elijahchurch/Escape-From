
export const rollD20 = () : number => {
    const roll = Math.floor(Math.random() * 20) + 1;
    return roll;
};



export const rollForTwoNumbers = () : number[] | void => {
    const firstRoll = rollD20();
    const secondRoll = rollD20();
    if(firstRoll !== secondRoll) {
        return [firstRoll, secondRoll];
    } else {
        return rollForTwoNumbers();
    }
};


