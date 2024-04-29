import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ClassesBox from "../components/ClassesBox";
import "./Classes.css";
import ListItemDetails from "../components/ListItemDetails/ListItemDetails";
import SectionHeaderClasses from "../components/SectionHeader/SectionHeaderClasses";

function Classes() {
  const result = useLoaderData();

  const [currentClass, setCurrentClass] = useState(null);
  const [classesInfo, setClassesInfo] = useState([]);
  const [classList, setClassList] = useState([]);
  const [currentRace, setCurrentRace] = useState(null);
  const [racesInfo, setRacesInfo] = useState([]);

  useEffect(() => {
    if (currentClass) {
      fetch(`https://www.dnd5eapi.co${currentClass.url}`)
        .then((res) => res.json())
        .then((data) => setClassesInfo(data))
        .catch((err) => console.error(err));
    }
  }, [currentClass]);

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/races`)
      .then((res) => res.json())
      .then((data) => setClassList(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (currentRace) {
      fetch(`https://www.dnd5eapi.co${currentRace.url}`)
        .then((res) => res.json())
        .then((data) => setRacesInfo(data))
        .catch((err) => console.error(err));
    }
  }, [currentRace]);

  return (
    <>
      <SectionHeaderClasses />
      <main className="main-bestiary">
        <h2>WHAT IS AN ADVENTURER ?</h2>
        <div>
          <p className="intro-text">
            Adventurers are extraordinary people, driven by a thirst for
            excitement into a life that others would never dare lead. They are
            heroes, compelled to explore the dark places of the world and take
            on the challenges that lesser women and men can’t stand against.
          </p>
          <p className="intro-text">
            Class is the primary definition of what your character can do. It’s
            more than a profession; it’s your character’s calling.
          </p>
          <section className="class-results">
            {currentRace ? <ListItemDetails item={racesInfo} /> : null} 
            {currentClass ? <ListItemDetails item={classesInfo} /> : null}
          </section>
        </div>
        <h2>CHOOSE A RACE</h2>
        <section className="class-list">
          {classList.map((race) => (
            <ClassesBox
              key={race.name}
              itemName={race.name}
              setState={setCurrentRace}
              itemInfo={race}
            />
          ))}
        </section>
        <h2>CHOOSE A CLASS</h2>
        <section className="class-list">
          {result.results.map((classe) => (
            <ClassesBox
              key={classe.name}
              itemName={classe.name}
              setState={setCurrentClass}
              itemInfo={classe}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Classes;
