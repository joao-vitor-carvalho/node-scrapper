const express = require('express');
const { Builder, By } = require('selenium-webdriver');
 


//connect to server for scrap
const app = express();
const port = 3000;
app.get('/', async (request, response) => {
 // Scraping Code 
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

//get allVideos to first page 
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

//nao alterar função acima, trazendo vídeos
//getVideos() split videos 

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
          title: title ?? '',
          views: views ?? '',
          publishedDate: date ?? '',
        });
      }
    } catch (error) {
      console.log(error);
    }
    return videoDetails;
   }



   //scrap finalizado e JSON gerado em videoDetails
   //videoDetails returns 
