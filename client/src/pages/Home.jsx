import { Link } from "react-router-dom";
import wizardLogo from '../assets/Wizard Castle.svg'
import "./home.css";

function Home() {
  return (
    <>
      <header className="HeaderHome">
        <div>
          <img
            className="imageCenter"
            src={wizardLogo}
            alt=""
          />
        </div>
      </header>
      <main className="mainHome">
        <section className="home-section">
        <div id="container1">
          <img src="" alt="" />
          <h2>Welcome to Wizard’s Castle, dear adventurer</h2>
          <p className="intro-text">
          Welcome to the Wizard's Castle, the definitive repository of knowledge for all aspiring adventurers in the realms of Dungeons & Dragons. Within these hallowed halls, you will find a wealth of arcane wisdom and mystical lore, carefully curated to guide you on your journey through the D&D universe.
          </p>
          <div className="button">
            <Link to="/rules">
              <h3 className="h1Button">Check the rules</h3>
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
          <h2>Have a peek at our precious resources</h2>
          <p className="intro-text">
          Explore our vast collection of tomes and scrolls, each containing insights into the intricacies of character creation, spellcasting, combat tactics, and more. Delve into the depths of our archives to uncover hidden gems and forgotten secrets, or consult our compendium of rules to clarify any questions that may arise during your adventures.
          </p>
          <ul className="listOption">
            <li>
              <Link to="/rules">
                <div className="navItemRules">
                  <h3>Rules</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/classes">
                <div className="navItemClass">
                  <h3>Classes</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/bestiary">
                <div className="navItemBestiary">
                  <h3>Bestiary</h3>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/spells">
                <div className="navItemSpells">
                  <h3>Spells</h3>
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
