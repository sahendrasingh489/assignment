
function createPlaylist(playlistName) {
    // Private songs array for the playlist
    let songs = [];

    // Function to add a song to the playlist
    function addSong(songName, artist) {
        songs.push({ songName, artist });
    }

    // Function to list all songs in the playlist
    function listSongs() {
        return songs;
    }

    // Return an object with access to addSong and listSongs functions
    return {
        addSong,
        listSongs
    };
}

// Example usage
const myPlaylist = createPlaylist('My Favorite Songs');
myPlaylist.addSong('Song 1', 'Artist 1');
myPlaylist.addSong('Song 2', 'Artist 2');
console.log(myPlaylist.listSongs());
