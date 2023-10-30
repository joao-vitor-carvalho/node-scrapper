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
 console.log(`Example app listening at http://localhost:${port}`);
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
    console.log(videoDetails);
    //scrap finalizado e JSON gerado em videoDetails
   }
    

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


//inserir script insert-form.js a abaixo
