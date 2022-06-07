import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
        options.map(name => <button 
        type="button" 
        key={name} 
        name={name} 
        onClick={onLeaveFeedback}
        className={s.btn}
        >
            {name}
        </button>)
        )

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}        

export default FeedbackOptions;