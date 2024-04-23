import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: true,
})
export class MyHeader {
  @Prop() imageUrl: string;
  @Prop() headerTitle: string;

  render() {
    return (
      <div class="my-header">
      <img src={this.imageUrl} alt="Header Image" />
      <span class="heading">{this.headerTitle}</span> {/* Wrapped text in a span for additional styling if necessary */}
    </div>
    );
  }
}
