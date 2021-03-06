### React Wizard

wizard navigation component for easy implementing step-by-step user experiences

## Installation

install the package using: `npm install @snovosel/react-wizard`

## Usage

Using the wizard component can be very easy. Define the steps you wish to be iterated through using an array.
The array can contain functions to pure JSX or specified components.

I recommend using pre-constructed components for the steps but in this example we will use pure jsx.

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

### Exposed values

React-wizard exposes several values and functions (represented in the above example with "restWizardValues") within its render method to pass to the current step. From there, the developer will have access to all component methods and values from within the current step component. Here is the list of the list of exposed values/actions from react-wizard:

- `CurrentStep` - The current step to be rendered from the array passed into as a prop.
- `wizardValues` - the current object of values saved to the state of the wizard
- `back()` - navigate to the previous step.
- `next()` - navigate to the next step.
- `saveValue(String name, any value)` - save a value on the wizard. This function takes in a name and a value and will save them as a key/pair value within the value object of the component's state.

The actions defined above have all been separated to allow full flexibility to the developer. For example, a developer can save a value to the wizard without changing the current step, or change the current step without saving a value.

### Props

The props for this component are simple, the steps you want to iterate through, and the action you want to take on each step/update. The rest is taken care of by you! Styles, side-effects, actions, etc. The power is in your hands!

- `steps` - `Array[]` - An array of functions returning pure JSX or individual components. Recommended to use components for styling purposes.
- `callBack` - `function()` - function to be called on each wizard update.

