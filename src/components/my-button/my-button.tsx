import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() buttonName: string = "";

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <button>{this.buttonName}</button>
      </div>
    )
  }
}
