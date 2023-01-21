import { useState } from 'react';
import BtnDisplayComponent from './components/BtnDisplayComponent';
import DisplayComponent from './components/DisplayComponent';

function App() {
  const [time, setTime] = useState({ milliseconds: 0, seconds: 0, minutes: 0, hours: 0 });

  const start = () => {
    //run();
    setInterval(run, 10);
  };

  let updatedMilliseconds = time.milliseconds;
  let updatedSeconds = time.seconds;
  let updatedMinutes = time.minutes;
  let updatedHours = time.hours;

  const run = () => {
    if (updatedMinutes === 60) {
      updatedHours++;
      updatedMinutes = 0;
    }

    if (updatedSeconds === 60) {
      updatedMinutes++;
      updatedSeconds = 0;
    }

    if (updatedMilliseconds === 100) {
      updatedSeconds++;
      updatedMilliseconds = 0;
    }

    updatedMilliseconds++;
    return setTime({ milliseconds: updatedMilliseconds, seconds: updatedSeconds, minutes: updatedMinutes, hours: updatedHours });
  };
  return (
    <div className='main-section'>
      <div className='clock-holder'>
        <div className='stopwatch'>
          <DisplayComponent time={time} />
          <BtnDisplayComponent start={start} />
        </div>
      </div>
    </div>
  );
}

export default App;
