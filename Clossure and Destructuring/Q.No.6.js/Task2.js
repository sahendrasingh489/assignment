// Task 1: Create the createPlaylist function
function createPlaylist(playlistName) {
    // Private array to store songs
    let songs = [];

    // Function to add a song to the playlist
    function addSong(songName, artist) {
        songs.push({ songName, artist });
    }

    // Function to list all songs in the playlist
    function listSongs() {
        return songs;
    }

    // Return an object with methods to add songs and list songs
    return {
        addSong,
        listSongs
    };
}

// Example usage

// Create a playlist
const myPlaylist = createPlaylist('My Favorite Songs');

// Use the addSong function to add songs to the playlist
myPlaylist.addSong('Song 1', 'Artist 1');
myPlaylist.addSong('Song 2', 'Artist 2');

// List all songs in the playlist
console.log(myPlaylist.listSongs());
