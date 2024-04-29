import { Link } from "react-router-dom";

import "./home.css";

function Home() {
  return (
    <>
      <header className="HeaderHome">
        <div>
          <img
            className="imageCenter"
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg"
            alt=""
          />
        </div>
      </header>
      <main className="mainHome">
        <section className="home-section">
        <div id="container1">
          <img src="" alt="" />
          <h1>Welcome to Wizard’s Castle, dear adventurer</h1>
          <p className="intro-text">
            We provide all kind of resources to help you play Dungeons & Dragons
            !
          </p>
          <div className="button">
            <Link to="/rules">
              <h1 className="h1Button">rules</h1>
            </Link>
          </div>
        </div>
        </section>
        
        <header className="MeadleHome">
          <div className="imageCenter">
            <h1> </h1>
          </div>
        </header>
        <section className="home-section">
        <div id="container2">
          <h1>Have a peek at our precious resources</h1>
          <p className="intro-text">
            Browse our magic library by themes and topics
          </p>
          <ul className="listOption">
            <li>
              <Link to="/rules">
                <div className="navItemRules">
                  <h1>Rules</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/classes">
                <div className="navItemClass">
                  <h1>Class</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/bestiary">
                <div className="navItemBestiary">
                  <h1>Bestiary</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/spells">
                <div className="navItemSpells">
                  <h1>Spells</h1>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        </section>
      </main>
    </>
  );
}

export default Home;
