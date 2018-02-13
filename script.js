//GET https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks


const app = {};

app.events = function() {
    $('form').on('submit', function(e) {
		e.preventDefault();
		let artists = $('input[type=search]').val();
		$('.loader').addClass('show');
		artists = artists
			.split(',')
			.map(app.getArists);
		
		$.when(...artists)
			.then((...artists) => {
				artists = artists.map(a => a[0].artists.items[0]);
				console.log(artists);
				app.getAlbums(artists);
			});
	});

}


app.init = function () {

};

$(app.init)
