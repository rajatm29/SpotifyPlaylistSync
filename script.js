//GET https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks


const app = {};

app.events = function() {
    $('form').on('submit', function(e) {
		e.preventDefault();
		let artists = $('input[type=search]').val();
		artists = artists.split(',');
	});

}

app.searchArtists = (artistName) => $.ajax({
	url: 'https://api.spotify.com/v1/search',
	method: 'GET',
	dataType: 'json',
	data: {
		q: artistName
	}
	
});

app.init = function () {
	app.events();
};

$(app.init)
