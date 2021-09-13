function fruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    applePieces = fruitPieces(apples);
    orangePieces = fruitPieces(oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} of oranges.`;
}
console.log(fruitProcessor(2, 3));