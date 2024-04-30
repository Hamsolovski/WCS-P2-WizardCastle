import "./ListItemRound.css"
import PropTypes from 'prop-types'

function ListItemRound({ itemName, setState, itemInfo }) {
    return (
        <a href="#list-item-details"><button type="button" className="ListItemRound" onClick={() => setState(itemInfo)}>{itemName}</button></a>
    )
}

ListItemRound.propTypes = {
    itemName: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    itemInfo: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default ListItemRound;