window.onload = init;

function init() {

	var xhr = new XMLHttpRequest();

	//can use either '' or "" as long as it's the same throughout !
	xhr.open('GET', 'https://picsum.photos/list', true);

	xhr.send(null);

	xhr.onload = function() {

		if (xhr.status == 200) {

			var picsum = JSON.parse(xhr.responseText)
			console.log(picsum);

		var imageString = "";	
		for(var x = 200; x < 210; x++) {	
			imageString += "<img src='https://picsum.photos/500/500?image=" + picsum[x].id + "'>"
			 + '<p>' + '</a>' + '<a href="' + picsum[x].author_url + '">' + picsum[x].author + '</a>' + '</p>'
			 + '<p>' + '</a>' + '<a href="' + picsum[x].post_url + '">' + 'Link to post' + '</a>' + '</p>'
		}
		document.getElementById("gallery").innerHTML = imageString;
		




		}
	}


}