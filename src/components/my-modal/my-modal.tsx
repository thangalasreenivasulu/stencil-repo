import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css',
  shadow: true,
})
export class MyModal {
  @Element() el: HTMLElement;
  @Prop() showCloseBtn: boolean;
  @Prop() closeByClickingOutside: boolean;

  componentDidLoad() {
    const dialog: HTMLDialogElement = this.el.shadowRoot.querySelector('dialog');
    dialog.showModal();

    window.addEventListener('click', e => {
      if (!this.el.contains(e.target as Node)) {
        console.log('event listener', e.target);
      } else {
        console.log('not working out');
      }

      // this.closeModal();
    });
    console.log(dialog);
    console.log('this.element', this.el);
  }

  closeModal() {
    const dialog: HTMLDialogElement = this.el.shadowRoot.querySelector('dialog');
    dialog.close();
  }

  render() {
    return (
      <dialog>
        {this.showCloseBtn && (
          <button aria-label="close" formmethod="dialog" formnovalidate onClick={this.closeModal.bind(this)}>
            X
          </button>
        )}
        <slot name="header"></slot>
        <slot name="options"></slot>
        <slot name="customButton"></slot>
        {/* <my-header headerTitle={this.headerTitle} imageUrl={this.imageUrl}></my-header>
        <my-options options={this.options}></my-options>
        <my-button buttonName={this.buttonName}></my-button> */}
      </dialog>
    );
  }
}
