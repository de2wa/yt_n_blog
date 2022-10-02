function mainFunction() 
{
  // *************************************************************************
  // CODE WITH CURT 2/14/2021
  // The code below will eventually not bring back the desired results.
  // Over time Web sites get Updated and Upgraded losing the original HTML and CSS tags that
  // are searched in the RegExp statements.
  // *************************************************************************

  //clearRecords()

  
  //var values = SpreadsheetApp.getSheetByName("TABLE").getRange("A:C").getValues();

  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var tableSheet1 = ss.getSheetByName("Sheet1");
  var idsheet = tableSheet1.getRange("B:B").getValues();
  var judulsheet = tableSheet1.getRange("C:C").getValues();
  var imagesheet = tableSheet1.getRange("D:D").getValues();
  var dessheet = tableSheet1.getRange("E:E").getValues();
  //var values1 = tableSheet1.getRange(1,1,tableSheet1.getLastRow(), 4); 
    //var datajudul1 = judulsheet.replace(/[^\x00-\x7F]/g, "");

  var datajudul = judulsheet.filter(String);
  var datades = dessheet.filter(String);
  var dataid = idsheet.filter(String);
  var dataimage = imagesheet.filter(String);

  var emailSheet1 = ss.getSheetByName("Sheet2");
  var emails = emailSheet1.getRange("A:A").getValues();
  var dataEmail = emails.filter(String);
  //Logger.log(dataemail[0]);
for(var k = 0; k < dataEmail.length; k++)
  {
  var data = datajudul.length;
  var max = data - 20;
  var num = Math.floor(Math.random() * (max - 1 + 1)) + 1;

  for(var j = num; j < num + 10; j++)
    {
    //Logger.log('content: ' + results[i]);
    var judulblog = datajudul[j];
    var deskripsiblog1 = datades[j+1];
    var deskripsiblog2 = datades[j+2];
    var deskripsiblog3 = datades[j+3];
    var deskripsiblog4 = datades[j+4];
    var deskripsiblog5 = datades[j+5];
    var imageblog = dataimage[j];

    var konten2 = ["<h3>" + datajudul[j] + " Full Movie</h3> <img alt='" + datajudul[j] + "' src='" + dataimage[j] + "' width='75%'/><p><i>" + datajudul[j] + "</i>  Movies, tell story about " + datades[j] + "</p><p>Watch <strong>" + datajudul[j] + "</strong> Full Movie For Free, Please Click button bellow!</p><p id='playnow'> </p><!--more-->"] ;
    var konten3 = ["<h4>" + datajudul[j+1] + "</h4> <img alt='" + datajudul[j+1] + "' src='" + dataimage[j+1] + "' width='75%'/><p>" + datades[j+1] + "</p>"] ;
   var konten4 = ["<h4>" + datajudul[j+2] + "</h4> <img alt='" + datajudul[j+2] + "' src='" + dataimage[j+2] + "' width='75%'/><p>" + datades[j+2] + "</p>"] ;
   var konten5 = ["<h4>" + datajudul[j+3] + "</h4> <img alt='" + datajudul[j+3] + "' src='" + dataimage[j+3] + "' width='75%'/><p>" + datades[j+3] + "</p>"] ;
   var konten6 = ["<h4>" + datajudul[j+4] + "</h4> <img alt='" + datajudul[j+4] + "' src='" + dataimage[j+4] + "' width='75%'/><p>" + datades[j+4] + "</p>"] ;
   var konten7 = ["<h4>" + datajudul[j+5] + "</h4> <img alt='" + datajudul[j+5] + "' src='" + dataimage[j+5] + "' width='75%'/><p>" + datades[j+5] + "</p>"] ;
   var konten8 = ["<h4>" + datajudul[j+6] + "</h4> <img alt='" + datajudul[j+6] + "' src='" + dataimage[j+6] + "' width='75%'/><p>" + datades[j+6] + "</p>"] ;
   var konten9 = ["<h4>" + datajudul[j+7] + "</h4> <img alt='" + datajudul[j+7] + "' src='" + dataimage[j+7] + "' width='75%'/><p>" + datades[j+7] + "</p>"] ;
   var konten10 = ["<h4>" + datajudul[j+8] + "</h4> <img alt='" + datajudul[j+8] + "' src='" + dataimage[j+8] + "' width='75%'/><p>" + datades[j+8] + "</p>"] ;
    }

    var konten1 = "<h3>Similar with " + judulblog[0] + " Movies</h3>";
    var konten11 = "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>  		<script type='text/javascript' src='https://cdnx.de2wa.com/asset/movie.js.php'/></script>";
    var konten = konten2 + konten1 + konten3 + konten6 + konten7 + konten8 + konten9 + konten10 + konten11;
//try {
 // SpreadsheetApp.doThing()
    Logger.log('judul: ' + judulblog[0]);
//Logger.log('des: ' + deskripsiblog1);
//Logger.log('konten: ' + konten);
//Logger.log('image: ' + imageblog);
var title_blog = "Watch " + judulblog[0] + " Full Movie Online Streaming ";

    //var mail = dataemail[k];
    Logger.log(dataEmail[k]); 

    MailApp.sendEmail({
      to: "" + dataEmail[k] + ""
      , subject: title_blog
      , htmlBody: konten
    });
//} catch (e) {
  // ignore
//}
  }
}
