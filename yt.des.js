
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
	 var release = dataMovie.release_date;
  var years = release.split("-");
  var tahun = years[0];
	
  var judul2 =  title + " (" + tahun + ") film complet en francais #movie #film #pelicula  #" + title2;
 var judul =  title + " film complet en francais";
 //var judul =  title + " pelicula completa en español | #full #movie #pelicula ";

	var tags = "movie, film, imdb, netflix, pelicula, full movie, viral, film, " + title + " free, " + title + ", Full Movie , " + title + " Película Completa , Psicosis pelicula completa , movie free, movie english, , pelicula completa en espanol, movie clips, trailer, online movie";
  var deskrip =  judul2 + " \n How to Watch " + title + " Full Movie? \n ▶️ Visit this link on.flixplus21.com/fr on your browser \n or \n ▶️ Click Here https:\/\/www.youtube.com\/redirect?event=video_description&q=https:\/\/on.flixplus21.com\/fr \n ▶️ and Click Go To Site \n Support Language : EN | ES | FR | AR | DE | NL | IT \n\n" + dataMovie.overview + "\n \n  tags: " + tags;
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
