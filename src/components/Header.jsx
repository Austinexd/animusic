import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef, useState } from "react";
import useComponentVisible from "../hooks/useComponentVisible";
import axios from "axios";

function Header({ musicRef }) {
  const searchRef = useRef();
  const [suggestions, setSuggestions] = useState([]);
  const [token, setToken] = useState("");
  const [bgPlay, setBgPlay] = useState(true);
  const handleFetchMusic = async (e) => {
    e.preventDefault();
    let accessToken = token;
    if (!accessToken) {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const body = {
        grant_type: "client_credentials",
        client_id: "1c375e477e26493c850faaf92f2a3e87",
        client_secret: "0efd749c41a8437fa9ac3e11c3d473da",
      };

      const token = await axios.post(
        "https://accounts.spotify.com/api/token",
        body,
        config
      );

      setToken(token.data.access_token);
      accessToken = token.data.access_token;
    }

    const searchMusicConfig = {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };

    const params = new URLSearchParams({
      q: searchRef.current.value,
      type: "artist,track,album",
    });

    const results = await axios.get(
      `https://api.spotify.com/v1/search?${params.toString()}`,
      searchMusicConfig
    );

    const completeSuggests = [...results.data.tracks.items];
    setSuggestions(completeSuggests);
    setIsComponentVisible(true);
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleToggleBg = () => {
    if (bgPlay) {
      musicRef.current.pause();
      setBgPlay(false);
    } else {
      musicRef.current.play();
      setBgPlay(true);
    }
  };

  const handleLinkClick = () => {
    setIsComponentVisible(false);
  };

  return (
    <header>
      <div className="logo">
        ANI
        <br />
        MUSIC
        <br />
      </div>

      <ul className="menu">
        <li className="searchBar">
          <form id="form">
            <input
              type="text"
              id="search"
              placeholder="Enter anime song name..."
              ref={searchRef}
            />
            <button className="search-btn" onClick={handleFetchMusic}>
              <AiOutlineSearch />
            </button>
          </form>
          {isComponentVisible && suggestions.length > 0 && (
            <ul ref={ref} className="music-suggestions">
              {suggestions.map((suggestion) => (
                <li key={suggestion.name} onClick={handleLinkClick}>
                  <Link
                    state={suggestion}
                    className="suggestion-link"
                    to="/animusic/player"
                  >
                    {suggestion.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <label className="switch">
        <input
          onChange={handleToggleBg}
          type="checkbox"
          defaultChecked={true}
        />
        <span className="slider round"></span>
      </label>
    </header>
  );
}

export default Header;
