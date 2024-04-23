import { Component, Element, h, Listen, Prop } from '@stencil/core';

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
    dialog.addEventListener('click', (event: MouseEvent) => {
      let rect = dialog.getBoundingClientRect();
      console.log(event.clientX, event.clientY);

      console.log(rect);

      let isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        this.closeModal();
      }
    });
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
