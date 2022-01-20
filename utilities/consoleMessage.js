const consoleMessage = () => {
  const message =
    '%c Hi programmers 👋! \n Welcome to my Spotify app, for collaborations shoot me an email: \n andrpham@gmail.com ';

  const style = [
    `font-size: 14px`,
    `font-family: monospace`,
    `background: white`,
    `display: inline-block`,
    `color: green`,
    `padding: 8px 19px`,
    `border: 1px dashed;`,
  ].join(';');

  console.log(message, style);
};

export default consoleMessage;
