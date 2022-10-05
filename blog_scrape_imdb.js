function mainFunction1() 
{
  // *************************************************************************
  // CODE WITH CURT 2/14/2021
  // The code below will eventually not bring back the desired results.
  // Over time Web sites get Updated and Upgraded losing the original HTML and CSS tags that
  // are searched in the RegExp statements.
  // *************************************************************************

  //clearRecords();
 var genre = "thriller";


 var rand = Math.floor(Math.random() * (9000 - 1 + 1)) + 1;
  var url = "https://www.imdb.com/search/title/?title_type=feature&genres=" + genre + "&start=" + rand + "&explore=genres&ref_=adv_nxt";
  var url = "https://www.imdb.com/search/title/?title_type=feature&year=2022&ref_=adv_nxt";

  var str = UrlFetchApp.fetch(url).getContentText();
  var data1 = str.replace(/&quot;/g, '"');
  var data = data1.replace(/[^\x00-\x7F]/g, "");

  

  const mainRegex = /<div class="lister-item mode-advanced"([\s\S]*?)Director/gi;
  var results = data.match(mainRegex);
  //Logger.log(results);

  const mid = /(?<=class=\"ribbonize\" data-tconst=").*?(?=")/gi;
  //const title = /(?<=<img alt=").*?(?=")/gi;
  const image = /(?<=loadlate=").*?(?=")/gi;
  const title = /(?<=<img alt=").*?(?=")/gi;
  const desc = /<p class="text-muted">([\s\S]*?)<\/p>/gi;
  const year = /(?<=class="lister-item-year text-muted unbold">\().*?(?=\)<\/span>)/gi;
//Logger.log(mid);
  //const teamLogoPass = /<img alt="([\s\S]*?)" class="hCL kVc L4E MIw"/gi;

for(var i = 0; i < 50; i++)
  {
    //Logger.log('content: ' + results[i]);
    var id = results[i].match(mid);
    var gambar = results[i].match(image);
    //Logger.log('content: ' + id);
    var judul = results[i].match(title);
    //Logger.log('content: ' + title);
    //var tahun = results[i].match(year);
    var deskripsi = results[i].match(desc);
    Logger.log('scrape: ' + id);

   addRecord(i+1, id, gambar, judul, deskripsi);
  }
}


function clearRecords()
{
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var tableSheet = ss.getSheetByName("table");
  tableSheet.getRange("A1:D20").clear();

  var images = tableSheet.getImages();
  for (var i = 0; i < images.length; i++)
  {
    var img = images[i];
    img.remove();
  }
}


function addRecord(count, id, gambar, judul, deskripsi) {
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var tableSheet = ss.getSheetByName("Sheet1");
  var currentRow = tableSheet.getLastRow();
  var nextRow = currentRow + 1;
  tableSheet.setRowHeight(nextRow, 30);
  tableSheet.getRange(nextRow,1).setValue(count);
  tableSheet.getRange(nextRow,2).setValue(id);
  tableSheet.getRange(nextRow,3).setValue(judul);
  //tableSheet.insertImage(logo, 2, nextRow);
  tableSheet.getRange(nextRow,4).setValue(gambar);
  tableSheet.getRange(nextRow,5).setValue(deskripsi);
 

}
