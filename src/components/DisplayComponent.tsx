import { Time } from '../types';

export default function DisplayComponent(props: { time: Time }) {
  const { hours, minutes, seconds, milliseconds } = props.time;
  return (
    <div>
      <span>{hours >= 10 ? hours : '0' + hours}</span>&nbsp;
      <span>{minutes >= 10 ? minutes : '0' + minutes}</span>&nbsp;
      <span>{seconds >= 10 ? seconds : '0' + seconds}</span>&nbsp;
      <span>{milliseconds >= 10 ? milliseconds : '0' + milliseconds}</span>&nbsp;
    </div>
  );
}
