var playlist = {"Queen": "I Want It All"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist = playlist.artistName = songTitle;
  return playlist;
}
updatePlaylist(playlist, "Phil Ochs", "My Bloody Valentine");