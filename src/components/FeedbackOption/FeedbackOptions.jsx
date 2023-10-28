import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnFeedback}>
      {options.map(option => (
        <button 
        key={option} 
        onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
  
};
