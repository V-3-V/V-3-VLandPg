//
// ES6 mobile menu implementation
//  Dependencies:
//      npm install  jquery --save
//
import $ from 'jquery';

class MobileMenu {
  constructor() {
  // alert("Testing from Mobile Menue");

//////////////////////////  OLD way of coding: "jQuery spagetti"
// Example of the jQuery  "spagetti code". Because In one statement:
// A. Select element from the DOM
// B. Event Handling
// C. Defining functionality
//
//   $(".site-header__menu-icon").click( function () {
//      console.log("Top right icon was clicked ");
//   });
//
/////////////////////////  New way of proper coding.

      // A. Select  elements in DOM
      //  Element  object reference stored in this object.
      this.siteHeader = $(".site-header");
      this.menuIcon = $(".site-header__menu-icon") ;
      this.menuContent = $(".site-header__menu-content");
     // Register events listener.
      this.events();
    } //  constructor()

    // B. Event Handling
    // Event listener, Method to call for watch for the ervents, related to this object
    events() {
        //  console.log('events function this : ',this);
         // .bind creates new function with "this" keyword,
         // "binded" to the object, provided as an argument ( i.e. class MobileMenu )
         // Therefore, when the new function  will be called from registered "click" event,
         //  it will call toggleTheMenu function with "this" pointing to  class MobileMenu
         // similar way  a closure works.
            this.menuIcon.click( this.toggleTheMenu.bind(this));
    }

     // C. Defining functionality
     // Action method to responce to registered events.
     //  Note: As of 10/04/2017  ES7  syntax like:  toggleTheMenu = () => {}
     //  still does not pass through webpack babel-loader:
     //       npm install --save-dev babel-loader babel-core babel-preset-env webpack
     //  Probably will work with  yarn   package manager?
     //  Babel DEMO  ES7 transpiler ( http://babeljs.io )
     //  process  toggleTheMenu = () => {} method's syntax just fine.
     //

  toggleTheMenu () {
        // console.log('Something was clicked ! toggleTheMenu function this : ',this);
         this.menuContent.toggleClass("site-header__menu-content--is-visible");
         this.siteHeader.toggleClass("site-header--is-expanded");
         this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }

}

export default MobileMenu;
