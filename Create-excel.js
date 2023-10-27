xlsx = require('node-xlsx').default; 


//inserir infos de JSON gerado em index.js 
const data = [
  [1, 2, 3],
  [true, false, null, 'sheetjs'],
  ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
  ['baz', null, 'qux'],
];
const sheetOptions = {'!cols': [{wch: 6}, {wch: 7}, {wch: 10}, {wch: 20}]};

var buffer = xlsx.build([{name: 'mySheetName', data: data}], {sheetOptions}); // Returns a buffer



//arquivo aparentemente criado, mas não impresso 


//criar arquivo buffer 