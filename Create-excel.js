//excel create with json informations

var fs = require('fs');
var writeStream = fs.createWriteStream("infos.xls");

var header="Rendering_engine"+"\t"+" Platforms"+"\t"+"Browser"+"\n";
var row1 = "Gecko"+"\t"+"Firefox 1.0"+"\t"+"Win 98+ / OSX.2+"+"\n";
var row2 = "Gecko"+"\t"+"Firefox 1.5"+"\t"+"Win 98+ / OSX.2+"+"\n";

writeStream.write(header);
writeStream.write(row1);
writeStream.write(row2);

writeStream.close();


