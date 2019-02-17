import React, { Component } from "react";

import "./styles.css";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      values: {}
    };

    this.goToNextStep = this.goToNextStep.bind(this);
    this.goToPreviousStep = this.goToPreviousStep.bind(this);
    this.saveWizardValue = this.saveWizardValue.bind(this);
    this.renderCurrentStep = this.renderCurrentStep.bind(this);
  }

  componentDidUpdate() {
    const { callBack } = this.props;
    if (callBack) {
      callBack(this.state);
    }
  }

  goToNextStep() {
    const { currentStep } = this.state;
    const { steps } = this.props;
    const nextStep = currentStep + 1;

    if (nextStep < steps.length) {
      this.setState({
        currentStep: nextStep
      });
    }
  }

  goToPreviousStep() {
    const { currentStep } = this.state;
    const nextStep = currentStep - 1;

    if (nextStep >= 0) {
      this.setState({
        currentStep: nextStep
      });
    }
  }

  saveWizardValue(name, value) {
    this.setState({
      values: {
        [name]: value
      }
    });
  }

  renderCurrentStep() {
    const { currentStep, values } = this.state;
    const { steps, children } = this.props;

    const DerivedWizardStep = steps[currentStep];

    return children({
      CurrentStep: DerivedWizardStep,
      wizardValues: values,
      actions: {
        back: this.goToPreviousStep,
        next: this.goToNextStep,
        saveValue: this.saveWizardValue
      }
    });
  }

  render() {
    const { currentStep, values } = this.state;
    const { children } = this.props;

    return (
      <div className="wizard-container">
        <div className="content">{this.renderCurrentStep()}</div>
      </div>
    );
  }
}

export default Wizard;
