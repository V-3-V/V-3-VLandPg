//
// JS for Overlay, aka Modal, aka light box
//  Dependencies:   "npm install jquery --save"
//
import $ from 'jquery';

class Modal {
  constructor() {
    // alert("Modal : Hello there !");
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");

    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));
    // click the close modal
    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes the esape key, or any key
    $(document).keyup( this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if(e.keyCode == 27 ) {  // ESC keyCode
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;  // prevent default behavior scroll up
  }

  closeModal() {
      this.modal.removeClass("modal--is-visible");
  }

}

export default Modal;
