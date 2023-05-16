import axios from "axios";

function Home() {
  return (
    <>
      <div id="result" className="container">
        <p>Results will be displayed here</p>
      </div>
      <div id="more" className="container centered"></div>
      <section className="banner" id="banner">
        <div className="row">
          <div className="col">
            <div className="content">
              <h2>ANI MUSIC TO YOUR EARS</h2>
              <p>
                Offers a range of features that enhance your listening
                experience and bring you closer to the Anime music you love.
              </p>
              <img
                className="btn app cursor-hover-item"
                src="images/App Store@2x.png"
                data-cursor-text="DOWNLOAD NOW!"
                data-cursor-text-repeat="4"
              />
              <img className="btn Play" src="images/Play Store@2x.png" />
            </div>
          </div>
          <div className="col">
            <div className="images">
              <img src="images/frontpic.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="head">
            <h2>About Us</h2>
            <div className="info">
              <p className="sec_head">
                ANI MUSIC is new and <br />
                it's at your service
                <br />
              </p>
              <p>
                Ani Music is your ultimate destination for discovering and
                enjoying the best music from your favorite anime series. Whether
                you're a die-hard anime fan or simply love great music, our
                website offers an extensive collection of anime songs,
                soundtracks, and covers from popular series such as Naruto,
                Attack on Titan, One Piece, and many more. From upbeat J-pop and
                rock tracks to emotional ballads and OSTs, our curated selection
                of anime music will take you on a journey through the
                unforgettable worlds of your favorite shows. Come and explore
                the vast and diverse world of anime music with Ani Music!
              </p>
            </div>
          </div>

          <div className="imagebox">
            <img src="images/frontpic 2.png" />
          </div>
        </div>
      </section>

      <section className="Trending" id="trend">
        <h2>Trendings</h2>
        <div className="box">
          <div className="img_slider">
            <img src="images/gundam.jpg" />
            <img src="images/CHA-LA_HEAD_CHA-LA_2005.png" />
            <img src="images/fly me to the moon.jpg" />
            <img src="images/slamdunk.jpg" />
            <img src="images/flameofrecca2.jpg" />
            <img src="images/paradisekiss.jpg" />
            <img src="images/bleach-asterisk.jpg" />
            <img src="images/sakura.webp" />
            <img src="images/tellmewhy.jpeg" />
            <img src="images/parasite.jpg" />
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Features</h2>
        <div className="FeaturePart">
          <div className="mood_features">
            <div className="feature_info">
              <p className="sec_head">
                Ani Music goes beyond
                <br />
                providing an extensive collection of anime music
                <br />
              </p>
              <p>
                Ani Music, we are committed to providing the best possible
                experience for anime music lovers. Our innovative features and
                user-friendly design make it easy for you to discover, enjoy,
                and connect with the music that moves you.
              </p>
              <button>All Features</button>
            </div>

            <div className="Onecard">
              <div className="card">
                <div className="container">
                  <div className="image_band">
                    <img src="images/JMLAB-Logo.webp" />
                  </div>
                  <div className="heading_card">
                    <p>Collaborated Playlists</p>
                  </div>
                  <div className="card_info">
                    <p>
                      Create and collaborate on playlists with your friends and
                      fellow anime fans. With our collaborated playlist feature,
                      you can add your favorite anime songs to a shared playlist
                      and invite others to contribute as well. This feature
                      allows you to discover new music and share your love of
                      anime with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="twocards">
            <div className="first card">
              <div className="container">
                <div className="image_band">
                  <img src="images/suggested.png" />
                </div>
                <div className="heading_card">
                  <p>Suggested Playlists</p>
                </div>
                <div className="card_info">
                  <p>
                    Another feature that sets Ani Music apart is our suggested
                    playlist feature. Our algorithm analyzes your listening
                    history and suggests playlists that match your taste in
                    music. This feature helps you discover new anime music and
                    artists that you might have missed otherwise.
                  </p>
                </div>
              </div>
            </div>
            <div className="second card">
              <div className="container">
                <div className="image_band">
                  <img src="images/lyrics.png" />
                </div>
                <div className="heading_card">
                  <p>Lyrics on the go</p>
                </div>
                <div className="card_info">
                  <p>
                    In addition to these features, we also provide lyrics for
                    many of the songs on our website. This allows you to sing
                    along and fully immerse yourself in the world of anime
                    music. With our comprehensive and accurate lyrics, you can
                    easily follow along with your favorite songs and deepen your
                    appreciation for the music.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Contact" id="contact">
        <h2>DEVELOPERS</h2>
        <div className="reviewCard">
          <div className="artistCard">
            <div className="reviewContent">
              <img className="imgBox" src="images/austin.png" />
              <p className="artist">AUSTIN</p>
              <p>
                Hello, This is our first React Website with an API function.
                this is just a sample website only to test our knowledege using
                API search engine.
              </p>
            </div>
          </div>

          <div className="artistCard">
            <div className="reviewContent">
              <img className="imgBox" src="images/felix.png" />
              <p className="artist">FELIX</p>
              <p>
                "The Wonderful Wonderful cat you'll laugh so much your side will
                ache, your heart will go pitter pat watching felix. THE
                WONDERFUL CAT!" HAHAHAHAHAH!!!!!
              </p>
            </div>
          </div>

          <div className="artistCard">
            <div className="reviewContent">
              <img className="imgBox" src="images/ludwig.png" />
              <p className="artist">LUDWIG HENDRIX</p>
              <p>
                “ You are too concerned with what was and what will be. There's
                a saying: Yesterday is history, tomorrow is a mystery, but today
                is a gift. That is why it is called the present.
              </p>
            </div>
          </div>

          <div className="artistCard">
            <div className="reviewContent">
              <img className="imgBox" src="images/melody.jpg" />
              <p className="artist">MELODY</p>
              <p>“ That was pretty hardcore.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
