// Create another playlist
const chillPlaylist = createPlaylist('Chill Vibes');
chillPlaylist.addSong('Relaxing Song', 'Chill Artist');
chillPlaylist.addSong('Calm Tune', 'Peaceful Artist');

// List songs in both playlists
console.log(myPlaylist.listSongs());
// Outputs: [
//   { songName: 'Song 1', artist: 'Artist 1' },
//   { songName: 'Song 2', artist: 'Artist 2' }
// ]

console.log(chillPlaylist.listSongs());

