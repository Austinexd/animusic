import { useLocation } from "react-router-dom";

function Player() {
  const location = useLocation();
  const propsData = location.state;

  const { album, external_urls, name } = propsData;
  const { images, release_date } = album;
  return (
    <h1>
      <div className="song-results">
        <img src={images[0].url} alt="" />
        <div>{album.name}</div>
        <div>{name}</div>
        <div>{release_date}</div>
        <a href={external_urls.spotify} target="_blank">
          <div className="spotify-link">Play it on spotify</div>
        </a>
      </div>
    </h1>
  );
}

export default Player;
