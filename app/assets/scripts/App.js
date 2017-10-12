//   Main App.js application file.
//  Dependencies :
//   npm install jquery --save
//   npm install  normalize.css  --save
//
// jQuery for browsers compatibility sake
// Drawback:  ~10,000 lines of jQuery code are injected
/// into the App.js bundle, use the library always :-(
// future TODO:  refactor the classes, using new DOM methods
//
import $ from 'jquery';

// Mobile menu (sandwich)
import MobileMenu from './modules/MobileMenu';
// "fade out" effect
import RevealOnScroll from './modules/RevealOnScroll';
// Sticky Header feature for  Medium to larger screens
import StickyHeader from './modules/StickyHeader';
//
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();

// var revealOnScroll = new RevealOnScroll();
// attempt to reuse "fade out" effect on other items class="testimonial"
// by adding .testimonial class to the list of items.
// However what if we want slightly different fade-out effect.
// In such a case we need second object RevealOnScroll and constructor
// with parameters.
var revealOnScrollFeatires = new RevealOnScroll($(".feature-item"), "85%");
var revealOnScrollTestimonial = new RevealOnScroll($(".testimonial"), "60%");

var stickyHeader = new StickyHeader();
var modal = new Modal();

///////////////////////////////////////////////////////////////////////////////////////////////////
/// Experimental part of the application
/////////////////////////////////////////////////////////////////////////////////////////////////
import {Person,  Adult} from './modules/Person';

// alert("this is a test for our webpack automation !");
// Demonstration of  ES6 classes inheritance and jQuery mutating the DOM
//
var john = new Person("John Doe", "blue");
var jane = new Adult("Jane Swiss", "green");


// $("h1").after("<p>" + john.greet() + "</p>"  + "<p>" +  jane.greet() + " </br> " + jane.payTaxes() + "</p>"  )
//             .css({ 'color': 'red', 'font-size': '100%'  });
// $("p").first().css({ 'background-color': 'yellow', 'font-size': '100%'  });
// $("p").last().css({ 'color': 'green',  'background-color': 'pink', 'font-size': '100%' });
