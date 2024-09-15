import React from 'react';

function SpotifyPlayer() {
  return (
    <div className="spotify-player">
      <iframe
        src="https://open.spotify.com/embed/artist/0g3omNBtKFTzI12fdCa13p?utm_source=generator&theme=0" // Replace with a valid playlist or track URL
        width="300"
        height="180"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Player"
      ></iframe>
    </div>
  );
}

export default SpotifyPlayer;
