import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnWrap}>
      {options.map(option => (
        <button 
        key={option}
        className={css.btnFeedback} 
        onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
  
};
