import React, { Fragment } from "react";
import { render } from "react-dom";

import "./styles.css";
import Wizard from "../../src";

const testSteps = [
  () => <h4>step one</h4>,
  () => <h3>step two</h3>,
  () => <h2>step three</h2>,
  () => <h1>step four</h1>
];

const App = () => (
  <div className="app">
    <div className="container">
      <Wizard
        steps={testSteps}
        callBack={state => console.log("state callback", state)}
      >
        {({
          CurrentStep,
          wizardValues,
          actions: { back, next, saveValue }
        }) => (
          <Fragment>
            <CurrentStep />
            <button onClick={() => back()}>back</button>
            <button onClick={() => next(saveValue("test", "my name is earl"))}>
              next
            </button>
          </Fragment>
        )}
      </Wizard>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
