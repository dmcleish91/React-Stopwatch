export default function BtnDisplayComponent(props: { start: () => void }) {
  return (
    <div>
      <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.start}>
        Start
      </button>
    </div>
  );
}
