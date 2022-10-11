
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
  var mid = title.replace(/tt/g, "");

  var dataMovie = getData(mid[i]);
  var title = dataMovie.title;
   var title = title.replace(/&quot;/g, '');
  var title = title.replace(/[^\x00-\x7F]/g, "");
  var title = title.replace(/,/g, "");
  var title2 = title.replace(/ /g, "");
  var judul =  title + " Full Movie #movie #film #pelicula #viral #" + title2;
  var deskrip = "WATCH NOW " + title + " FREE ▶️  https:\/\/top-movie23.blogspot.com\/" + mid[i] + "\n " + title + "Full Movie #movie #film #pelicula #viral #" + title;
    video.snippet.title = judul;//deskripsis[i];
    video.snippet.description = deskrip;//deskripsis[i];
	 Logger.log(judul);
	YouTube.Videos.update(video,'snippet');
	}


  function getData(mid) {
   
  var url = 'http://api.themoviedb.org/3/movie/' + mid + '?api_key=8c486b331d0164e5ae261aad23004b4f&language=en';
    var response = UrlFetchApp.fetch(url); // get feed
 var data = JSON.parse(response.getContentText()); //
  //var data = dataAll.value.items;
 
 return data;
//Logger.log(data);

}
