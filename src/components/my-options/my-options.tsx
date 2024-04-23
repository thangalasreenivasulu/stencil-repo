import { Component, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'my-options',
  styleUrl: 'my-options.css',
  shadow: true,
})
export class MyOptions {
  @Prop() options: string;
  @State() newOptions: string[];
  @State() selectedOption: string | null = null; // Track the selected option

  @Watch('options')
  parseMyArrayProp(newValue: string) {
    if (newValue) this.newOptions = JSON.parse(newValue);
  }

  @Watch('newOptions')
  printNewOptions() {
    console.log('New options:', this.newOptions);
  }

  componentWillLoad() {
    console.log('Initial options:', this.options);
    this.parseMyArrayProp(this.options);
  }

  handleSelectOption(option: string) {
    this.selectedOption = option;
  }

  render() {
    return (
      <div>
        <div class="heading">
          <p>Choose one from below</p>
        </div>
        <div class="options">
          {this.newOptions.map(option => (
            <p
              class={{
                'option-item': true,
                'selected': this.selectedOption === option,
              }}
              onClick={() => this.handleSelectOption(option)}
            >
              {option}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
