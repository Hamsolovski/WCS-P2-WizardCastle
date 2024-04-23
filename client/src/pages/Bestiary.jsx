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
  const { results } = useLoaderData()
  const monsterTypes = ["aberration", "beast","celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant", "humanoid", "monstrosity", "ooze", "plant", "undead" ];
  
  const [challengeRating, setChallengeRating] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"])
  const [monsterInfo, setMonsterInfo] = useState([])
  const [monsterIndex, setMonsterIndex] = useState(null)
  const [monsterList, setMonsterList] = useState(results)

  // fonctions

    useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`)
    .then((res) => res.json())
    .then((data) => setMonsterInfo(data))
    .catch((err) => console.error(err))
  }, [monsterIndex])

  // appel du composant

  // tests

  return (
    <>
      <SectionHeader />
      <main>
        <h2>Monsters in D&D</h2>
        <p className="intro-text">In the vast realm of Dungeons & Dragons, where heroes rise and fall in epic quests, there exists a myriad of creatures both wondrous and  terrifying. These beings, known collectively as monsters, inhabit the deepest dungeons, the darkest forests, and the highest peaks. Some are  born of ancient magic, while others are the twisted creations of dark sorcery.</p>
        
        <h2>Choose a challenge rating</h2>
        <FilterList setChallengeRating={setChallengeRating}/>
      

        <h2>Filter by monster type</h2>
        {/* J'appelle ma liste de types */}
        <section className="filter-list">
          {monsterTypes.map((type) => (<FilterButton key={type.index} filterType={type} list={results} handleList={setMonsterList} handleDetails={setMonsterIndex}/>))}
        </section>
        
        {/* Je trie mes monstres en fonction de leur type */}
        {monsterIndex ? <ListItemDetails item={monsterInfo}/>: null}
        
        {/* J'appelle la liste de mes résultats */}
        <section>
          {(monsterList !== null && monsterList[0].type !== "Monstrosity" )? <h2 id="search-result">All {monsterList[0].type}s </h2> : null}
          {(monsterList !== null && monsterList[0].type === "Monstrosity" )? <h2 id="search-result">All Monstrosities</h2> : null}
          {monsterList ?
            <section className="list-results">
              {monsterList
                .filter((monster) => challengeRating.includes(monster.challenge_rating))
                .map((monster) => (<ListItemRound key={monster.slug} itemName={monster.name} setState={setMonsterIndex} itemInfo={monster.slug}/>))}
            </section>
          : null}
        </section>
      </main>
    </>
  );
}

export default Bestiary;
