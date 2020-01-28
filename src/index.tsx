import React from "react";
import ReactDOM from "react-dom";

export const App = (props: {
  message: string;
  onClick?: (value: string) => void;
}): JSX.Element => (
  <button onClick={(): void => props?.onClick(props.message)}>Click me!</button>
);

ReactDOM.render(
  <App message="Hello, Electron!" />,
  document.getElementById("app")
);
