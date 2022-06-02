import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
        options.map(name => <button 
        type="button" 
        key={name} 
        name={name} 
        onClick={onLeaveFeedback}
        >
            {name}
        </button>)
        )

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}        

export default FeedbackOptions;