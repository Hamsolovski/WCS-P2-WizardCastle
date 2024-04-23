import PropTypes from 'prop-types';
import "./MonstersDetail.css";

function MonstersDetail({item}) {
    return(
        <section className="monster_detail">
            <img src={`/src/assets/icons/monsters/${item.type.toLowerCase()}-icon.svg`} alt=""/>
            <section className="monster-info">
            {item.desc ? <p className="item-desc">{item.desc}</p> : <p className="item-desc">Our adventurers didn't survive long enough to see this monster...<br/> We're not sure what it looks like, sorry !</p>}
            </section>
            <section className="stats-block">
                <section className="diverse-stats">
                    <p>Armor class : {item.armor_class.map(((ac) => (<p key={ac.type}>{ac.type} : {ac.value}</p>)))}</p>
                    <p>Hit Points : {item.hit_points}</p>
                    <p>XP : {item.xp}</p>
                    <p>Challenge rating : {item.challenge_rating}</p>
                    <p>Proficiency Bonus : {item.proficiency_bonus}</p>
                    <p>Hit Dice : {item.charisma}</p>
                </section>
                <section className="prime-stats">
                    <p>Strength : {item.strength}</p>
                    <p>Dexterity : {item.dexterity}</p>
                    <p>Constitution : {item.constitution}</p>
                    <p>Intelligence : {item.intelligence}</p>
                    <p>Wisdom : {item.wisdom}</p>
                    <p>Charisma : {item.charisma}</p>
                </section>
            </section>
                {item.special_abilities.length !== 0 ?
                <section>
                    <h4>Special Abilities</h4>
                    <ul className="special-attacks">
                        {item.special_abilities.map((ability) => (<p key={ability.name} >{ability.name} : {ability.desc}</p>))}
                    </ul>
                </section>
                 : null
                }
            
        </section>
    )
}

MonstersDetail.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        desc: PropTypes.string,
        armor_class: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })).isRequired,
        hit_points: PropTypes.number.isRequired,
        xp: PropTypes.number.isRequired,
        challenge_rating: PropTypes.number.isRequired,
        proficiency_bonus: PropTypes.number.isRequired,
        hit_dice: PropTypes.string.isRequired,
        strength: PropTypes.number.isRequired,
        dexterity: PropTypes.number.isRequired,
        constitution: PropTypes.number.isRequired,
        intelligence: PropTypes.number.isRequired,
        wisdom: PropTypes.number.isRequired,
        charisma: PropTypes.number.isRequired,
        special_abilities: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired
        }))
    }).isRequired
}

export default MonstersDetail;