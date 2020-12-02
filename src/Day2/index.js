const readFile = require('../utils/readFiles.js');

function prepareData(data) {
  return data.split('\n').slice(0, -1);
}

function passwordPolicityOne() {
  const data = readFile(__dirname);
  const passwordsPolicityData = prepareData(data);
  let result = 0;

  for (let i = 0; i < passwordsPolicityData.length; i++) {
    const data = passwordsPolicityData[i].split(' ');
    const [min, max] = data[0].split('-');
    const letter = data[1][0];
    const pattern = data[2];
    let count = 0;

    if (!pattern.includes(letter)) {
      continue;
    }

    for (let j = 0; j < pattern.length; j++) {
      if (letter === pattern[j]) {
        count += 1;
      }
    }

    if (count >= Number(min) && count <= Number(max)) {
      result += 1;
    }
  }

  return result;
}

function passwordPolicityTwo() {
  const data = readFile(__dirname);
  const passwordsPolicityData = prepareData(data);
  let result = 0;

  for (let i = 0; i < passwordsPolicityData.length; i++) {
    const data = passwordsPolicityData[i].split(' ');
    const [first, second] = data[0].split('-');
    const letter = data[1][0];
    const pattern = data[2];

    if (
      (letter === pattern[first - 1] && letter !== pattern[second - 1]) ||
      (letter !== pattern[first - 1] && letter === pattern[second - 1])
    ) {
      result += 1;
    }
  }

  return result;
}

console.log(passwordPolicityOne())

console.log(passwordPolicityTwo())


