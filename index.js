const express = require('express');
const { Builder, By } = require('selenium-webdriver');
 


// todos os requisitos para a aplicação rodam neste mesmo script 


//connect to server for scrap
const app = express();
const port = 3000;
app.get('/', async (request, response) => {
 try {
   const data = await WebScrapingLocalTest();
   response.status(200).json(data);
 } catch (error) {
   response.status(500).json({
     message: 'Server error occurred',
   });
 }
});
app.listen(port, () => {
 console.log(`Server connected at http://localhost:${port}`);
});

//get allVideos(function for general infos) to first page 
async function WebScrapingLocalTest() {
 try {
   driver = await new Builder().forBrowser('chrome').build();
   await driver.get('http://webapplayers.com/inspinia_admin-v2.9.4/table_data_tables.html');
   const allVideos = await driver.findElements(
     By.xpath('//*[@id="DataTables_Table_0"]/tbody/tr[1]')
   );
   return await getVideos(allVideos);
 } catch (error) {
   throw new Error(error);
 } finally {
   await driver.quit();
 }
}

//getVideos() split infos 

async function getVideos(videos) {
    let videoDetails = [];
    try {
      for (const video of videos) {
        const title = await video.findElement(By.xpath('//*[@id="DataTables_Table_0"]/tbody/tr[1]')).getText();
        const views = await video
          .findElement(By.xpath('//*[@id="DataTables_Table_0"]/tbody/tr[1]/td[1]'))
          .getText();
        const date = await video
          .findElement(By.xpath('//*[@id="DataTables_Table_0"]/tbody/tr[1]/td[2]'))
          .getText();
        videoDetails.push({
          Rendering_engine: title ?? '',
          Platforms: views ?? '',
          Browser: date ?? '',
        });
      }
    } catch (error) {
      console.log(error);
    }
    return videoDetails;
    
    //scrap finalizado e JSON gerado em videoDetails
   }
   
//console.log(videoDetails);



var fs = require('fs');
var writeStream = fs.createWriteStream("infos.xls");

var header="Rendering_engine"+"\t"+" Platforms"+"\t"+"Browser"+"\n";
var row1 = "Gecko"+"\t"+"Firefox 1.0"+"\t"+"Win 98+ / OSX.2+"+"\n";
var row2 = "Gecko"+"\t"+"Firefox 1.5"+"\t"+"Win 98+ / OSX.2+"+"\n";

writeStream.write(header);
writeStream.write(row1);
writeStream.write(row2);

writeStream.close();

//excel create with json informations

console.log("---------- --------- scrap execeuted in http://webapplayers.com/inspinia_admin-v2.9.4/table_data_tables.html -------- ---------- ");
console.log("---------- ------------- excel file has created -------- -------------------- ");

//inserir script insert-form.js a abaixo


//algoritmo de execucao 


//ler arquivo excel - ok 
//guardar infos em variáveis - ok 
//acessar form - ok 
//inserir em inserts valores de variáveis - 
//concluir programa - hoje 


xlsx = require('node-xlsx').default; 


const workSheetsFromFile = xlsx.parse('./infos.xls');


//variável com infos do xlsx 
var newInfos = workSheetsFromFile[0];




console.log("--------------------------  excel file has read --------------------------------- "); 

console.log(newInfos); 




//mostrar na tela as infos inseridas no form 


WebScrapingLocalTestII(); 

//function acess form and insert infos  
 function WebScrapingLocalTestII() {

    driver =  new Builder().forBrowser('chrome').build();
    driver.get('http://webapplayers.com/inspinia_admin-v2.9.4/form_editors.html');
    const inserts =  driver.findElements(
    By.xpath('//*[@id="page-wrapper"]/div[3]/div[1]/div/div/div[2]/div[2]/div[3]/div[2]')
      );




      inserts.innerHTML = "";


      if (inserts != "") {
        console.log("------------------------ form has captured -------------------------- "); 
        //changeInfos();  
      } else {
        WebScrapingLocalTestII(); 
      }


      //change infos

      
    
      //bug
      driver.quit(5); 

      
   }
  //  function changeInfos(){
  //   var last = document.getElementsByClassName("note-editable card-block"); 
  //   var blank = ""; 
  //   last.innerHTML = blank; 
  
  // }


//não ta setando o atributo de valor 
//finalizar hoje 




//console.log("finish"); 


console.log("----------------------------- app has finished ---------------------------- ");

// fim do programa 





