import css from './Statistics.module.css'

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.listStatistics}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>

      <li><span className={css.totalStatistics}>Total: {total}</span></li>
      <li><span className={css.positiveStatistics}>Positive feedback: {positivePercentage}</span></li>
    </ul>
  );
};
