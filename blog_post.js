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
  var tableSheet1 = ss.getSheetByName("TABLE");
  var judulsheet = tableSheet1.getRange("C:C").getValues();
  var dessheet = tableSheet1.getRange("D:D").getValues();
  var imagesheet = tableSheet1.getRange("B:B").getValues();
  //var values1 = tableSheet1.getRange(1,1,tableSheet1.getLastRow(), 4); 
    //var datajudul1 = judulsheet.replace(/[^\x00-\x7F]/g, "");

  var datajudul = judulsheet.filter(String);
  var datades = dessheet.filter(String);
  var dataimage = imagesheet.filter(String);
  
  var emailSheet1 = ss.getSheetByName("EMAIL");
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
    var konten2 = ["<h2>" + datajudul[j] + "</h2> <img alt='" + datajudul[j] + "' src='" + dataimage[j] + "' width='75%'/><p>" + datades[j] + "</p><!--more-->"] ;
    var konten3 = ["<h2>" + datajudul[j+1] + "</h2> <img alt='" + datajudul[j+1] + "' src='" + dataimage[j+1] + "' width='75%'/><p>" + datades[j+1] + "</p>"] ;
   var konten4 = ["<h2>" + datajudul[j+2] + "</h2> <img alt='" + datajudul[j+2] + "' src='" + dataimage[j+2] + "' width='75%'/><p>" + datades[j+2] + "</p>"] ;
   var konten5 = ["<h2>" + datajudul[j+3] + "</h2> <img alt='" + datajudul[j+3] + "' src='" + dataimage[j+3] + "' width='75%'/><p>" + datades[j+3] + "</p>"] ;
   var konten6 = ["<h2>" + datajudul[j+4] + "</h2> <img alt='" + datajudul[j+4] + "' src='" + dataimage[j+4] + "' width='75%'/><p>" + datades[j+4] + "</p>"] ;
   var konten7 = ["<h2>" + datajudul[j+5] + "</h2> <img alt='" + datajudul[j+5] + "' src='" + dataimage[j+5] + "' width='75%'/><p>" + datades[j+5] + "</p>"] ;
   var konten8 = ["<h2>" + datajudul[j+6] + "</h2> <img alt='" + datajudul[j+6] + "' src='" + dataimage[j+6] + "' width='75%'/><p>" + datades[j+6] + "</p>"] ;
   var konten9 = ["<h2>" + datajudul[j+7] + "</h2> <img alt='" + datajudul[j+7] + "' src='" + dataimage[j+7] + "' width='75%'/><p>" + datades[j+7] + "</p>"] ;
   var konten10 = ["<h2>" + datajudul[j+8] + "</h2> <img alt='" + datajudul[j+8] + "' src='" + dataimage[j+8] + "' width='75%'/><p>" + datades[j+8] + "</p>"] ;
    }

    var konten1 = deskripsiblog5 + " <b>" +judulblog + "</b> " + deskripsiblog1 + " " + deskripsiblog3 + " " + deskripsiblog4 + ".";
    var konten11 = "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>  		<script type='text/javascript' src='https://cdnx.de2wa.com/asset/grup1.js.php'/></script>";
    var konten = konten1 + konten2 + konten3 + konten6 + konten7 + konten8 + konten9 + konten10 + konten11;
//try {
 // SpreadsheetApp.doThing()
    Logger.log('judul: ' + judulblog[0]);
//Logger.log('des: ' + deskripsiblog1);
//Logger.log('konten: ' + konten);
//Logger.log('image: ' + imageblog);


    //var mail = dataemail[k];
    Logger.log(dataEmail[k]); 

    MailApp.sendEmail({
      to: "" + dataEmail[k] + ""
      , subject: judulblog[0]
      , htmlBody: konten
    });
//} catch (e) {
  // ignore
//}
  }
}
