### React Wizard

wizard navigation component for easy implementing step-by-step user experiences

## Installation

install the package using: `npm install @snovosel/react-wizard`

## Usage

Using the wizard component can be very easy. Define the steps you wish to be iterated through using an array.
The array can contain functions to pure JSX or specified components.

- I recommend using pre-constructed components for the steps.

```javascript
const testSteps = [
  () => <h4>step one</h4>,
  () => <h3>step two</h3>,
  () => <h2>step three</h2>,
  () => <h1>step four</h1>
];
```

Then, the wizard component will expose the current step as a variable, along with several other component methods and values.

```JSX
<Wizard
  steps={testSteps}
  callBack={state => console.log("state callback", state)}
>
  {({
    CurrentStep,
    ...restWizardValues
  }) => (
    <CurrentStep
      {...restWizardValues}
    />
  )}
</Wizard>
```
