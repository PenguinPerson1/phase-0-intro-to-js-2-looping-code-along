// Code your solutions in this file
function writeCards(names,gift){
    let greetings=[];
    for (let i = 0; i < names.length; i++) {
        greetings.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`)
    };
    return greetings;
}
function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}