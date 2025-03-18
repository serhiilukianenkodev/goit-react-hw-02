import css from './Options.module.css';

export default function Options({ options, onClick, totalFeedback, handleReset }) {
  return (
    <ul className={css.optionsList}>
      {Object.keys(options).map(option => (
        <li key={option}>
          <button
            className={css.optionItem}
            type="button"
            onClick={() => {
              onClick(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
      {totalFeedback !== 0 && (
        <li>
          <button className={css.optionItem} type="button" onClick={handleReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
