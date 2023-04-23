function mainFunction1() 
{
  // *************************************************************************
  // CODE WITH CURT 2/14/2021
  // The code below will eventually not bring back the desired results.
  // Over time Web sites get Updated and Upgraded losing the original HTML and CSS tags that
  // are searched in the RegExp statements.
  // *************************************************************************

  //clearRecords();

 var cat = ["islamic+wallpaper+desktop", "islamic+wallpaper+hd", "Allah+wallpaper+top", "islamic+wallpaper"];
var kw  = cat[Math.floor(Math.random() * cat.length)];

var email = ["prenticeprescott.blog5@blogger.com","prenticeprescott.blog4@blogger.com","prenticeprescott.blog3@blogger.com","prenticeprescott.blog2@blogger.com","prenticeprescott.blog1@blogger.com"];
var dataEmail  = email[Math.floor(Math.random() * email.length)];

//Logger.log(kw);
 var rand = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  var url = "https://www.bing.com/images/search?q=" + kw + "&form=HDRSC2&first=" + rand + "&tsc=ImageHoverTitle";
  var str = UrlFetchApp.fetch(url).getContentText();
  var data1 = str.replace(/&quot;/g, '"');
  var data = data1.replace(/[^\x00-\x7F]/g, "");

  

  const mainRegex = /<div class="iuscp([\s\S]*?)}" onclick="/gm
  var results = data.match(mainRegex);
//Logger.log(results);
  const image = /(?<="murl":").*?(?=")/gi;
  const title = /(?<="t":").*?(?=")/gi;
  const desc = /(?<="desc":").*?(?=")/gi;

  //const teamLogoPass = /<img alt="([\s\S]*?)" class="hCL kVc L4E MIw"/gi;
//var results = results1.slice(20,40);
for(var i = 0; i < 19; i++)
  {
    //Logger.log('content: ' + results[i]);
   var gambar1 = '<h3>'+results[0].match(title)+'</h3><img src="'+results[0].match(image)+'" alt="'+results[0].match(title)+'"> <p>'+results[0].match(title)+' '+results[0].match(desc)+'</p>';
  var gambar2 = '<h3>'+results[1].match(title)+'</h3><img src="'+results[1].match(image)+'" alt="'+results[1].match(title)+'"> <p>'+results[1].match(title)+' '+results[1].match(desc)+'</p>';
  var gambar3 = '<h3>'+results[2].match(title)+'</h3><img src="'+results[2].match(image)+'" alt="'+results[2].match(title)+'"> <p>'+results[2].match(title)+' '+results[2].match(desc)+'</p>';
  var gambar4 = '<h3>'+results[3].match(title)+'</h3><img src="'+results[3].match(image)+'" alt="'+results[3].match(title)+'"> <p>'+results[3].match(title)+' '+results[3].match(desc)+'</p>';
  var gambar5 = '<h3>'+results[4].match(title)+'</h3><img src="'+results[4].match(image)+'" alt="'+results[4].match(title)+'"> <p>'+results[4].match(title)+' '+results[4].match(desc)+'</p>';
  var gambar6 = '<h3>'+results[5].match(title)+'</h3><img src="'+results[5].match(image)+'" alt="'+results[5].match(title)+'"> <p>'+results[5].match(title)+' '+results[5].match(desc)+'</p>';
  var gambar7 = '<h3>'+results[6].match(title)+'</h3><img src="'+results[6].match(image)+'" alt="'+results[6].match(title)+'"> <p>'+results[6].match(title)+' '+results[6].match(desc)+'</p>';
  var gambar8 = '<h3>'+results[7].match(title)+'</h3><img src="'+results[7].match(image)+'" alt="'+results[7].match(title)+'"> <p>'+results[7].match(title)+' '+results[7].match(desc)+'</p>';
  var gambar9 = '<h3>'+results[8].match(title)+'</h3><img src="'+results[8].match(image)+'" alt="'+results[8].match(title)+'"> <p>'+results[8].match(title)+' '+results[8].match(desc)+'</p>';
  var gambar10 = '<h3>'+results[9].match(title)+'</h3><img src="'+results[9].match(image)+'" alt="'+results[9].match(title)+'"> <p>'+results[9].match(title)+' '+results[9].match(desc)+'</p>';
  var gambar11 = '<h3>'+results[10].match(title)+'</h3><img src="'+results[10].match(image)+'" alt="'+results[10].match(title)+'"> <p>'+results[10].match(title)+' '+results[10].match(desc)+'</p>';
  var gambar12 = '<h3>'+results[11].match(title)+'</h3><img src="'+results[11].match(image)+'" alt="'+results[11].match(title)+'"> <p>'+results[11].match(title)+' '+results[11].match(desc)+'</p>';
var gambar13 = '<h3>'+results[12].match(title)+'</h3><img src="'+results[12].match(image)+'" alt="'+results[12].match(title)+'"> <p>'+results[12].match(title)+' '+results[12].match(desc)+'</p>';

var gambar14 = '<h3>'+results[13].match(title)+'</h3><img src="'+results[13].match(image)+'" alt="'+results[13].match(title)+'"> <p>'+results[13].match(title)+' '+results[13].match(desc)+'</p>';

var gambar15 = '<h3>'+results[14].match(title)+'</h3><img src="'+results[14].match(image)+'" alt="'+results[14].match(title)+'"> <p>'+results[14].match(title)+' '+results[14].match(desc)+'</p>';




    //Logger.log('content: ' + gambar);
    var judul = results[i].match(title);
    //Logger.log('content: ' + title);

    var deskripsi = results[i].match(desc);
    //Logger.log('scrape: ' + judul);

  }

       var random = Math.floor(Math.random() * (50)) + 19;
 
var titlepost = random+'+ '+ judul[0];
var deskripsi = gambar15 + gambar2 + gambar3 +gambar4 +gambar5 +gambar6 +gambar7 +gambar8 + gambar9 + gambar10 +gambar11+gambar12 +gambar13 +gambar14 + gambar1;



Logger.log(dataEmail + titlepost);
MailApp.sendEmail({
      to: "" + dataEmail + ""
      , subject: titlepost
      , htmlBody: deskripsi
    });

}
