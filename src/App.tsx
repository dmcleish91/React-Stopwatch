import { useState } from 'react';
import BtnDisplayComponent from './components/BtnDisplayComponent';
import DisplayComponent from './components/DisplayComponent';

function App() {
  const [time, setTime] = useState({ milliseconds: 0, seconds: 0, minutes: 0, hours: 0 });
  const [myinterval, setMyInterval] = useState<number | undefined>();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setMyInterval(setInterval(run, 10));
    setStatus(1);
  };

  const stop = () => {
    clearInterval(myinterval);
    setStatus(2);
  };

  const reset = () => {
    console.log('reset');
    clearInterval(myinterval);
    setTime({ milliseconds: 0, seconds: 0, minutes: 0, hours: 0 });
    setStatus(0);
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
          <BtnDisplayComponent start={start} stop={stop} reset={reset} status={status} />
        </div>
      </div>
    </div>
  );
}

export default App;
