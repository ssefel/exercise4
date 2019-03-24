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
			imageString += '<a href="' + picsum[x].post_url + '">' + "<img src='https://picsum.photos/500/500?image=" +  picsum[x].id + "'>" + '</a>' 
			 + '<h1>' + '<a>' + '<a href="' + picsum[x].author_url + '">' + picsum[x].author + '</a>' + '</h1>'
			
		}

		document.getElementById("gallery").innerHTML = imageString;
		




		}
	}


}