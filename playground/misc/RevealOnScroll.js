//
// Dependencies:
//        npm install jquery --save
//   lib to deal with page scroll, fade-out effect
//        npm install  npm  jquery-smooth-scroll --save
//    Waypoints:
//     npm install waypoints --save


import $ from 'jquery';
// Lib does not have main, Therefore taking from node_modules folder.
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

// attempt to reuse "fade out" effect on other items class="testimonial"
// by adding .testimonial class to the list of items.
// However what if we want slightly different fade-out effect.
// In such a case we need second object RevealOnScroll and constructor
// with parameters.

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    // Attention! sequence does matter,
    // because createWaypoints() is using this.offsetPercentage
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;  // keep that pointing to the RevealOnScroll obj.
    this.itemsToReveal.each( function() {
       // alert("testing waypoints");
       var currentItem = this; // current DOM element, looping through .each()
       new Waypoint( {
         element: currentItem,
         handler: function() {
           $(currentItem).addClass("reveal-item--is-visible");
         },   // Waypoint triggered when invisible item hits top of browser window
              // while scrolling
         offset: that.offsetPercentage   // Offset from top of the window to trigger the Waypoint
       });
    });
  }
}

export default RevealOnScroll;
