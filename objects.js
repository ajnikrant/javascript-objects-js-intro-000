var playlist = {
  beatles: "Here comes the sun"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "songTitle";

  return playlist;
}

<<<<<<< HEAD
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
=======
function removeFromPlaylist(playlist, beatles, "Here comes the sun"){
  delete playlist.beatles;

  return playlist;
>>>>>>> 733f9769949196a531c4d0e416e9e48c628083cd
}
