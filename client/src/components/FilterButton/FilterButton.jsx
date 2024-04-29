import PropTypes from 'prop-types'
import aberration from '../../assets/icons/monsters/aberration-icon.svg'
import beast from '../../assets/icons/monsters/beast-icon.svg'
import celestial from '../../assets/icons/monsters/celestial-icon.svg'
import construct from '../../assets/icons/monsters/construct-icon.svg'
import dragon from '../../assets/icons/monsters/dragon-icon.svg'
import elemental from '../../assets/icons/monsters/elemental-icon.svg'
import fey from '../../assets/icons/monsters/fey-icon.svg'
import fiend from '../../assets/icons/monsters/fiend-icon.svg'
import giant from '../../assets/icons/monsters/giant-icon.svg'
import humanoid from '../../assets/icons/monsters/humanoid-icon.svg'
import monstrosity from '../../assets/icons/monsters/monstrosity-icon.svg'
import ooze from '../../assets/icons/monsters/ooze-icon.svg'
import plant from '../../assets/icons/monsters/plant-icon.svg'
import undead from '../../assets/icons/monsters/undead-icon.svg'

import "./FilterButton.css"

const monsters = {
    aberration,
    beast,
    celestial,
    construct,
    dragon,
    elemental,
    fey,
    fiend,
    giant,
    humanoid,
    monstrosity,
    ooze,
    plant,
    undead
}

function FilterButton( { filterType, list, handleList, handleDetails }) {
    return (
        <button type="button" className="filter-button" onClick={() => {
            handleList(list.filter((element) => (element.type.toLowerCase() === filterType.toLowerCase())))
            handleDetails(null)
        }}><a href="#search-result">
            <img src={monsters[filterType]} alt=""/>
            {filterType !== "monstrosity" ? `${filterType}s` : "monstrosities"}
        </a>
        </button>
    )
}

FilterButton.propTypes = {
    filterType: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleList: PropTypes.func.isRequired,
    handleDetails: PropTypes.func.isRequired
}

export default FilterButton;