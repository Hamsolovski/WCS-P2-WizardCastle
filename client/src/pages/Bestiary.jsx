import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import SectionHeader from "../components/SectionHeader/SectionHeader";
import ListItemRound from "../components/ListItemRound/ListItemRound";
import ListItemDetails from "../components/ListItemDetails/ListItemDetails";
import FilterButton from "../components/FilterButton/FilterButton";
import FilterList from "../components/FilterList/FilterList";

import "./Bestiary.css";

function Bestiary() {
  // states
  const { results } = useLoaderData();
  const monsterTypes = [
    "aberration",
    "beast",
    "celestial",
    "construct",
    "dragon",
    "elemental",
    "fey",
    "fiend",
    "giant",
    "humanoid",
    "monstrosity",
    "ooze",
    "plant",
    "undead",
  ];

  const [challengeRating, setChallengeRating] = useState("all");
  const [monsterInfo, setMonsterInfo] = useState([]);
  const [monsterIndex, setMonsterIndex] = useState(null);
  const [monsterList, setMonsterList] = useState(results);
  const [searchInput, setSearchInput] = useState("");

  const filterMonsterName = monsterList.filter((item) =>
    item.name.toLowerCase().startsWith(searchInput)
  );

  const filterMonsterByCR = filterMonsterName.filter((item) =>
  challengeRating === item.challenge_rating
  )

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`)
      .then((res) => res.json())
      .then((data) => setMonsterInfo(data))
      .catch((err) => console.error(err));
  }, [monsterIndex]);

  return (
    <>
      <SectionHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <main className="main-bestiary">
        <h2>Monsters in D&D</h2>
        <p className="intro-text">
          In the vast realm of Dungeons & Dragons, where heroes rise and fall in
          epic quests, there exists a myriad of creatures both wondrous and
          terrifying. These beings, known collectively as monsters, inhabit the
          deepest dungeons, the darkest forests, and the highest peaks. Some are
          born of ancient magic, while others are the twisted creations of dark
          sorcery.
        </p>
        <button
          type="button"
          onClick={() => {
            setMonsterList(results);
            setChallengeRating("all");
            setMonsterIndex(null);
          }}
        >
          See all monsters
        </button>
        <section className="filter-options">
          <section className="list-results">
            <h2>Choose a challenge rating </h2>
            <FilterList
              setChallengeRating={setChallengeRating}
              challengeRating={challengeRating}
            />
          </section>
          <section className="main-classes">
            <h2>Filter by monster type</h2>
            {/* J'appelle ma liste de types */}
            <section className="filter-list">
              {monsterTypes.map((type) => (
                <FilterButton
                  key={type.index}
                  filterType={type}
                  list={results}
                  handleList={setMonsterList}
                  handleDetails={setMonsterIndex}
                />
              ))}
            </section>
          </section>
          {/* Je trie mes monstres en fonction de leur type */}
          <section className="list-results">
            {monsterIndex ? <ListItemDetails item={monsterInfo} /> : null}
          </section>
        </section>

        <section className="filter-results">
          {/* J'appelle la liste de mes résultats */}

          {monsterList === results ? (
            <h2 id="search-result">All Monsters </h2>
          ) : null}
          {monsterList !== results && monsterList[0].type !== "Monstrosity" ? (
            <h2 id="search-result">All {monsterList[0].type}s </h2>
          ) : null}
          {monsterList !== results && monsterList[0].type === "Monstrosity" ? (
            <h2 id="search-result">All Monstrosities</h2>
          ) : null}
          {monsterList ? (
            <section className="list-results">
              {challengeRating !== "all" ? 
                filterMonsterByCR.map((item) => (
                    <ListItemRound
                      key={item.slug}
                      itemName={item.name}
                      setState={setMonsterIndex}
                      itemInfo={item.slug}
                    />
                )) :
                filterMonsterName.map((item) => (
                  <ListItemRound
                    key={item.slug}
                    itemName={item.name}
                    setState={setMonsterIndex}
                    itemInfo={item.slug}
                  />
              ))
                }
            </section>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default Bestiary;
