const readFile = require('../utils/readFiles.js');

function prepareData(data) {
  return data.split('\n').slice(0, -1);
}


function findTrees(xSlope, ySlope) {
    const data = readFile(__dirname);
    const inputData = prepareData(data);

    const height = inputData.length;
    const width = inputData[0].length;

    let resultOfHintTress = 0;
    let x = 0 , y = 0 ;

    while( y < height - 1 ) {
        y += ySlope;
        x += xSlope;

        if ( x >= width) {
            x -= width;
        }
        if( inputData[y][x] === '#' ){
            resultOfHintTress += 1;
        }
    }
    return resultOfHintTress;
}

console.log("Solution part one: " + findTrees(3,1))
console.log( "Solution part two: " + 
    (
        findTrees(1,1) * findTrees(3,1) * findTrees(5,1) * findTrees(7,1) * findTrees(1,2)
    )
)