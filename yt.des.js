
function main() {
	var videos = YouTube.Search.list('snippet', {
		type : 'video',
		maxResults : 50,
		forMine : true
	})

  var allVideos = videos.items;
  while(videos.nextPageToken) {
//Logger.log(allVideos.length);

var videos = YouTube.Search.list('snippet', {
			type : 'video',
			maxResults : 50,
			forMine : true,
			pageToken: videos.nextPageToken
			});
			allVideos = allVideos.concat(videos.items);
}

 

for(var i = 0; i < allVideos.length; i++) {
	//Logger.log(allVideos[i]);
  var video = getVideo(allVideos[i].id.videoId);
  
	

//video.snippet.title = judulsheet[i];
 // video.snippet.description = deskripsis[i];
	//video.snippet.tags = tagss[i];

  update(video,[i]);
  //Logger.log(video);
	}
}


function getVideo(id) {
	return YouTube.Videos.list('snippet', {id: id}).items[0];
}

function update(video,i) {
 var ss= SpreadsheetApp.getActiveSpreadsheet();
  var tableSheet1 = ss.getSheetByName("Sheet1");
  var titlesheet = tableSheet1.getRange("A:A").getValues();
    var mid = titlesheet.filter(String);
  //var mid = title.replace(/tt/g, "");
Logger.log(mid[i]);
  var dataMovie = getData(mid[i]);
  var title = dataMovie.title;
   var title = title.replace(/&quot;/g, '');
  var title = title.replace(/[^\x00-\x7F]/g, "");
  var title = title.replace(/,/g, "");
  var title2 = title.replace(/ /g, "");
 // var judul =  title + " Full Movie #movie #film #pelicula #viral #" + title2;
 //var judul =  title + " FULL MOVIE HD | #movie #film #pelicula #viral";
 var judul =  title + " pelicula completa en español | #full #movie #pelicula ";

	var tags = "movie, film, imdb, netflix, pelicula, full movie, viral, film, " + title + " free, " + title + ", Full Movie , " + title + " Película Completa , Psicosis pelicula completa , movie free, movie english, , pelicula completa en espanol, movie clips, trailer, online movie";
  var deskrip = dataMovie.overview + " ▶️ Link https:\/\/on.flixplus21.com\/" + mid[i] + "\/es \n\n#movie #film #pelicula #viral #" + title2;
var deskripsi = judul + "▶️ Link https:\/\/on.flixplus21.com\/" + mid[i] + "\/es \n\n  de for fair use for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended. \n\n watch " + title + " FullM.o.V.i.E-online-free,watch " + title + " online-free,watch " + title + " FullM.o.V.i.E,watch " + title + " online-123movies, " + title + " -FullM.o.V.i.E-online-free, " + title + " -FullM.o.V.i.E-online, " + title + " -FullM.o.V.i.E-download, " + title + " -FullM.o.V.i.E-free-download, " + title + " -FullM.o.V.i.E-123M.o.V.i.e.S, " + title + " -FullM.o.V.i.E-download-in-hindi, " + title + " -FullM.o.V.i.E-watch-online-free, " + title + " -FullM.o.V.i.E " + title + " -FullM.o.V.i.E-leaked, " + title + " -FullM.o.V.i.E, " + title + " -FullM.o.V.i.E-free, " + title + " -FullM.o.V.i.E-youtube \n\n " + title + " Full Eng Dub \n " + title + " Full hd \n " + title + " Full hd quality \n " + title + " Full Eng Subtitle \n " + title + " Full Eng Dubbed \n Related Popular Searches for #" + title + "  \n " + title + " Full Movie free \n " + title + " Full Movie online gorillavid \n film " + title + " Full Movie sub france \n " + title + " Full Movie free download \n " + title + " Full Movie Soundtrack theme song \n " + title + " Full Movie online stream free no sign up \n " + title + " Full Movie hd \n " + title + " Full Movie online free no download \n " + title + " Full Movie mp4 download \n" + title + " Full Movie free download mp4 \n " + title + " Full Movie watch online free \n " + title + " Full Movie download \n " + title + " full movie download online \n " + title + " full movie putlockers \n " + title + " full movies english free \n " + title + " full movies english online \n " + title + " full movies english subtitles \n " + title + " full movie hd 1080p \n " + title + " stream movie google drive \n " + title + " stream movie zulu \n " + title + " full movie \n " + title + " Online \n " + title + " Watch Online \n " + title + " streaming \n " + title + " movie \n " + title + " Youtube \n #movie #film #pelicula #viral #" + title ;     
	//https:\/\/www.youtube.com\/redirect?event=video_description&q=
var komen = judul + "▶️ Link https:\/\/www.youtube.com\/redirect?event=video_description&q=https:\/\/on.flixplus21.com\/" + mid[i] + "\/es \n\n	#movie #film #pelicula #viral #" + title ;   
	video.snippet.title = judul;//deskripsis[i];
    video.snippet.description = deskrip;//deskripsis[i];
	//video.snippet.tags = [tags.split(",")];//deskripsis[i];
	 Logger.log("upload " + i + judul);
	
	YouTube.Videos.update(video,'snippet');
	addRecord(i+1, video.id, mid[i])
	
	}


  function getData(mid) {
   
  var url = 'http://api.themoviedb.org/3/movie/' + mid + '?api_key=8c486b331d0164e5ae261aad23004b4f&language=en';
    var response = UrlFetchApp.fetch(url); // get feed
 var data = JSON.parse(response.getContentText()); //
  //var data = dataAll.value.items;
 
 return data;
//Logger.log(data);

}

 function addRecord(count, link, status) {
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var tableSheet = ss.getSheetByName("Sheet1");
  var currentRow = tableSheet.getLastRow();
  var nextRow = currentRow + 1;
  tableSheet.setRowHeight(nextRow, 100);
  //tableSheet.getRange(nextRow,2).setValue(count);
  tableSheet.getRange(nextRow,2).setValue(link);
	 tableSheet.getRange(nextRow,2).setValue(status);
  //tableSheet.insertImage(logo, 2, nextRow);
  //tableSheet.getRange(nextRow,3).setValue(gambar);
  //tableSheet.getRange(nextRow,4).setValue(deskripsi);

}
