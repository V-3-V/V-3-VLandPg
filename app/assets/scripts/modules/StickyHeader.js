// Module StickyHeader
// Dependencies:
//  npm install jquery  jquery-smooth-scroll waypoints --save
//
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
// Waypoints lib does not have main entry (???)
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    // Supplemental fix to get "Lazyload" and "Waypoint" working together
    // idea: tell Waypoint to recalculate Wapoints upon loading of the images
    this.lazyImages = $(".lazyload");

    // feature: Sticky Header when scrolling up/down
    // alert('StickyHeader :  I am here !!! ');
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();

    // feature: Highlight Current Page Section
    this.pageSections = $(".page-section"); // all CSS class="page-section"
    this.headerLinks = $(".primary-nav a"); // list of all primary-nav elements  anchors
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();

    // Recalculate waypoints positions in "lazyloaded" context
    this.refreshWaypoints();
  }

  // Refresh - recalculate waypoints
  refreshWaypoints() {
    // When using current version of JQuery
    // this.lazyimages.load(<function>);
    // must be replaced by:
    //  this.lazyimages.on("load",<function> );
    // Discussion:  http://stackoverflow.com/questions/12643160/load-method-deprecated
    //
    this.lazyImages.on( "load" ,function() {
       Waypoint.refreshAll();
    });
  }

  // Smooth Scroll  npm package: npm install jquery-smooth-scroll --save
  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  // trigger Waypoint on the  first <h1> title
  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],  // pointer to DOM element
      handler: function( direction ) { // background color is darker when scrolling "down"
                // relative to the Waypoint, and lighter when scrolling other direction.
        if(direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  // Current page section Highlight feature
  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function( direction ) {
          if(direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            // Remove class="is-current-link" from the other Page sections first
            that.headerLinks.removeClass("is-current-link");
            // Add class="is-current-link" to the active section
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"  // by  default 0% - top of the window
      });

      new Waypoint( {   // Scrolling up waypoints
        element: currentPageSection,
        handler: function( direction ){
          if(direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            // Remove class="is-current-link" from the other Page sections first
            that.headerLinks.removeClass("is-current-link");
            // Add class="is-current-link" to the active section
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-41%"  // by  default 0% - top of the window
      });

    });

  } // class

}

export default StickyHeader;
