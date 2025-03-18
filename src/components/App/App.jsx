import { useEffect, useState } from 'react';

import './App.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [options, setOptions] = useState(() => {
    try {
      const savedOptions = JSON.parse(localStorage.getItem('options'));

      if (savedOptions) return savedOptions;
    } catch (error) {
      console.log(error.message);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(options));
  }, [options]);

  const totalFeedback = options.good + options.neutral + options.bad;
  const positiveFeedback = Math.round((options.good / totalFeedback) * 100);

  const handleClick = option => {
    setOptions({ ...options, [option]: options[option] + 1 });
  };

  const handleReset = () => {
    setOptions({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
      </Description>

      <Options
        options={options}
        onClick={handleClick}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          options={options}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
