
const readFile = require('../utils/readFiles.js');

function prepareData(data) {
  return data.split('\n')
    .map((n) => Number(n))
    .filter(n => n)  // avoids zero values
    .sort((a, b) => a > b ? -1 : 1);
}
function getResultOfExpenseReport() {
    const data = readFile(__dirname);
    const expenseReport = prepareData(data);
        
        for (let i = 0; i < expenseReport.length; i ++) {
            for (let j = 0; j < expenseReport.length; j ++) {
                // avoid comparing an element with itself
                if (i != j && (expenseReport[i] + expenseReport[j]) == 2020) {
                    return (expenseReport[i]*expenseReport[j]);
                }
            }
        }
        
}

function getResultOfExpenseReport2() {
    const data = readFile(__dirname);
    const expenseReport = prepareData(data);

        for (let i = 0; i < expenseReport.length; i ++) {
            for (let j = 0; j < expenseReport.length; j ++) {
                for (let h = 0; h < expenseReport.length; h ++)
                // avoid comparing an element with itself
                if (i != j != h && (expenseReport[i] + expenseReport[j] +expenseReport[h]) == 2020) {
                    return (expenseReport[i]*expenseReport[j]*expenseReport[h]);
                }
            }
        }
        
}
console.log(getResultOfExpenseReport());
console.log(getResultOfExpenseReport2());
