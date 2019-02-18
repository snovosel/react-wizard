### React Wizard

wizard navigation component for easy implementing step-by-step user experiences

## Installation

install the package using: `npm install @snovosel/react-wizard`

## Usage

```javascript
const testSteps = [
  () => <h4>step one</h4>,
  () => <h3>step two</h3>,
  () => <h2>step three</h2>,
  () => <h1>step four</h1>
];
```

```JSX
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
```
