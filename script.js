//GET https://api.spotify.com/v1/users/{user_id}/playlists/{playlist_id}/tracks


const app = {};

app.events = function() {
    $('form').on('submit', function (e) {
        e.preventDefault();
        let artists = $('input[type=search]').val();

        console.log(artists)
    })
}
app.init = function () {

};

$(app.init)
