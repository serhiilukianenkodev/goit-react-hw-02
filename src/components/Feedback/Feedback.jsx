import css from './Feedback.module.css';

export default function Feedback({ options, totalFeedback, positiveFeedback }) {
  return (
    <ul className={css.feedbackList}>
      {Object.keys(options).map(key => (
        <li className={css.feedbackItem} key={key}>
          <p>
            {key}: {options[key]}
          </p>
        </li>
      ))}
      <li className={css.feedbackItem}>
        <p>Total: {totalFeedback}</p>
      </li>
      <li className={css.feedbackItem}>
        <p>Positive: {positiveFeedback}%</p>
      </li>
    </ul>
  );
}
