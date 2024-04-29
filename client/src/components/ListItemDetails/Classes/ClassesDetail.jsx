function classesDetail({ item }) {
  return (
    <section className="monster-detail">
      <p>Hit die: {item.hit_die}</p>
      <section className="monster-detail">
        <p>Skills:</p>
        <p className="classes-proficiencies">{item.proficiency_choices.map((choice) => (<p key={choice.desc}>{choice.desc}</p>))}</p>
        <p>Proficiencies: </p>
        <p className="classes-proficiencies">{item.proficiencies.map((choice) => (<p key={choice.name}>{choice.name}</p>))}</p>
      </section>
    </section>
  );
}

export default classesDetail;
