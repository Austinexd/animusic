function Footer() {
  return (
    <>
      <section className="subscribe">
        <div className="subscription">
          <p className="letter">Subscribe to our newsletter:</p>
          <input
            className="white"
            type="text"
            placeholder="Please write your email address"
          />
          <div>
            <button className="subs_btn">Subscribe</button>
          </div>
        </div>
      </section>

      <section className="Connect">
        <div className="Connection">
          <div className="contactContent">
            <p>Copyright (c) 2023 Animusic</p>
          </div>
          <div className="contactUs">
            <li className="Us">Contact Us</li>
            <li>123-456-7890</li>
            <li>https://austinexd.github.io/animusic/</li>
          </div>
          <div className="social">
            <p className="Us">Social Media</p>
            <div className="social-icons">
              <i
                className="fa-brands fa-facebook-f"
                style={{ color: "#1788cf" }}
              ></i>
              <i
                className="fa-brands fa-discord"
                style={{ color: "#e3e7ed" }}
              ></i>
              <i
                className="fa-brands fa-instagram"
                style={{ color: "#a320ac" }}
              ></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
