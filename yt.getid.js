
function main() {
	var videos = YouTube.Search.list('snippet', {
		type : 'video',
		maxResults : 50,
		forMine : true
	})
  var allVideos = videos.items;
  while(videos.nextPageToken) {
Logger.log(allVideos.length);

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
	var videourl = 'https://www.youtube.com/watch?v=' + video.id;
  addRecord(i+1, videourl);
	//YouTube.Videos.update(video,'status');
  Logger.log(videourl);
  
	}
}



function getVideo(id) {
	return YouTube.Videos.list('snippet', {id: id}).items[0];
}

function update(video) {
	video.snippet.description = 'tes description2';
	
	YouTube.Videos.update(video,'snippet');
	}

  function addRecord(count, link) {
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var tableSheet = ss.getSheetByName("Sheet1");
  var currentRow = tableSheet.getLastRow();
  var nextRow = currentRow + 1;
  tableSheet.setRowHeight(nextRow, 10);
  //tableSheet.getRange(nextRow,2).setValue(count);
  tableSheet.getRange(nextRow,2).setValue(link);
  //tableSheet.insertImage(logo, 2, nextRow);
  //tableSheet.getRange(nextRow,3).setValue(gambar);
  //tableSheet.getRange(nextRow,4).setValue(deskripsi);

}
