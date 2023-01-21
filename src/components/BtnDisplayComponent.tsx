export default function BtnDisplayComponent(props: { start: () => void; stop: () => void; reset: () => void; status: number }) {
  return (
    <div>
      {props.status === 0 ? (
        <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.start}>
          Start
        </button>
      ) : null}

      {props.status === 1 ? (
        <div>
          <button className='stopwatch-btn stopwatch-btn-red' onClick={props.stop}>
            Stop
          </button>
          <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : null}

      {props.status === 2 ? (
        <div>
          <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.start}>
            Resume
          </button>
          <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
