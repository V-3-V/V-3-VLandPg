//
// Accordion element squize - expand behavior
//  Inspired by https://codepen.io/team/css-tricks/pen/EaJEBZ
//  Elements  to click  class="accordion--js-title"
//  Elements  to hide/display in response to click on the parent   have HTML  class="accordion--js-copy"
//

import $ from 'jquery';


class Accordion {
  constructor(parentClassSelector = ".accordion--js-title" , copyClassSelector =".accordion--js-copy" ) {
    this.parentClassSelector = parentClassSelector  ;
    this.copyClassSelector = copyClassSelector;
    console.log(`Accordion : parentClassSelector= ${parentClassSelector}, copyClassSelector  = ${copyClassSelector}`);
    // Init  events on the Elements
    this.events();
  }


  events() {
    //  Register click event on accordion Titles
    var thisClass = this;
    var $title = $( thisClass.parentClassSelector );
    var copy   = thisClass.copyClassSelector;

        $title.click(function () {
                  $(this).next(copy).slideToggle();
                  $(this).parent().siblings().children().next().slideUp();
                  return false;
                });
     }

  } // class

export default Accordion;
