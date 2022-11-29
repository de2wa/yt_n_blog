function mainFunction1() 
{
  // *************************************************************************
  // CODE WITH CURT 2/14/2021
  // The code below will eventually not bring back the desired results.
  // Over time Web sites get Updated and Upgraded losing the original HTML and CSS tags that
  // are searched in the RegExp statements.
  // *************************************************************************

  //clearRecords();
 var ss= SpreadsheetApp.getActiveSpreadsheet();
  var tableSheet1 = ss.getSheetByName("Sheet2");
  var judulsheet = tableSheet1.getRange("B:B").getValues();
   var datajudul = judulsheet.filter(String);
 var num = tableSheet1.getRange("C1").getValues();
 var num1 = num.filter(String)[0];

 var max = tableSheet1.getRange("D1").getValues();
  var max1 = max.filter(String)[0];
 var max2 = +max1;
 if(num1 <= max2){
   var number = +num1 + 1;

 }else {
   var number = 0; 
 }

 
 tableSheet1.getRange(1,3).setValue(number);
 Logger.log(datajudul[number]);
 var query = datajudul[number];//"hat+knit";


 var rand = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  var url = "https://www.bing.com/images/search?q=" + query + "&form=HDRSC2&first=" + rand + "&tsc=ImageHoverTitle";

  var str = UrlFetchApp.fetch(url).getContentText();
  var data1 = str.replace(/&quot;/g, '"');
  var data = data1.replace(/[^\x00-\x7F]/g, "");

  

  const mainRegex = /<div class=\"iuscp isv\"([\s\S]*?)}" onclick="/gi;
  var results = data.match(mainRegex);

  const image = /(?<="murl":").*?(?=")/gi;
  const title = /(?<="t":").*?(?=")/gi;
  const desc = /(?<="desc":").*?(?=")/gi;

  //const teamLogoPass = /<img alt="([\s\S]*?)" class="hCL kVc L4E MIw"/gi;

for(var i = 0; i < 35; i++)
  {
    //Logger.log('content: ' + results[i]);
    var gambar = results[i].match(image);
    //Logger.log('content: ' + gambar);
    var judul = results[i].match(title);
    //Logger.log('content: ' + title);

    var deskripsi = results[i].match(desc);
    Logger.log('scrape: ' + judul);

    addRecord(i+1, gambar, judul, deskripsi);
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


function addRecord(count, judul, gambar, deskripsi) {
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var tableSheet = ss.getSheetByName("Sheet1");
  var currentRow = tableSheet.getLastRow();
  var nextRow = currentRow + 1;
  tableSheet.setRowHeight(nextRow, 30);
  tableSheet.getRange(nextRow,1).setValue(count);
  tableSheet.getRange(nextRow,2).setValue(judul);
  //tableSheet.insertImage(logo, 2, nextRow);
  tableSheet.getRange(nextRow,3).setValue(gambar);
  tableSheet.getRange(nextRow,4).setValue(deskripsi);

}
