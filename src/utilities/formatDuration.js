export default function (milliseconds) {
  let minutes = Math.floor(milliseconds / 1000 / 60);
  let seconds = Math.floor(milliseconds / 1000) % 60;

  return `${minutes}:${seconds > 10 ? seconds : '0' + seconds}`;
}
