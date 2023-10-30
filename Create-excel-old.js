xlsx = require('node-xlsx').default; 


//inserir infos de JSON gerado em index.js 
//parse a JSON file to create xlsx file 
const data = [
  [1, 2, 3],
  [true, false, null, 'sheetjs'],
  ['foo', 'bar', new Date('2023-10-30T09:30Z'), '0.3'],
  ['baz', null, 'qux'],
];



const sheetOptions = {'!cols': [{wch: 6}, {wch: 7}, {wch: 10}, {wch: 20}]};



var buffer = xlsx.build([{name: 'mySheetName', data: data}], {sheetOptions}); // Returns a buffer



var teste = buffer.type();



console.log(teste);  



//estudar impressão de arquivo 
//não consigo acessar os atributos do buffer 
//reler doc node xlsx 
//var test = buffer.getAttribute("id"); 



//arquivo aparentemente criado, mas não impresso 
//objeto indefinido, buscar como salvar em arquivo 

//criar arquivo buffer 