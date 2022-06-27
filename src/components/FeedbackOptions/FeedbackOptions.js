import PropTypes from 'prop-types';
import { FeedBackButton } from './FeedBackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
        options.map(name => <FeedBackButton 
        type="button" 
        key={name} 
        name={name} 
        onClick={onLeaveFeedback}
        >
            {name}
        </FeedBackButton>)
        )

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}        

export default FeedbackOptions;