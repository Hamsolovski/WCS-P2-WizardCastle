import PropTypes from 'prop-types'
import './FilterList.css'
import range from '../../utils/range'


function FilterList({ setChallengeRating, challengeRating }) {    
    return(
            <select value={challengeRating} onChange={({target: { value }}) => setChallengeRating(value)}>
                <option>🔻Select challenge rating 🔻</option>
                    {range(1, 22).map((num) => <option key={num} value={num.toString()}>{num}</option>)}
            </select>

    );
}

FilterList.propTypes = {
    challengeRating: PropTypes.string.isRequired,
    setChallengeRating: PropTypes.func.isRequired,
}

export default FilterList;