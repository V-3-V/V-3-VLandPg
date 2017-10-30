//   Main App.js application file.
//  Dependencies :
//   npm install jquery --save
//   npm install  normalize.css  --save
//   And some other modules whern needed... 
//
// jQuery for browsers compatibility sake
// Drawback:  ~10,000 lines of jQuery code are injected
/// into the App.js bundle, use the library always
//
import $ from 'jquery';

// Mobile menu (sandwich)
import MobileMenu from './modules/MobileMenu';

// Sticky Header feature for  Medium to larger screens
import StickyHeader from './modules/StickyHeader';

// Modal aka LightHouse
import Modal from './modules/Modal';

// Accordion element and CSS control
import Accordion from './modules/Accordion';

////////////////////////////////////////////////////////////////////////
////// Dynamic modules, that are used in App.js
////////////////////////////////////////////////////////////////////////
var accordion = new Accordion();

var mobileMenu = new MobileMenu();

var stickyHeader = new StickyHeader();

var modal = new Modal();

///////////////////////////////////////////////////////////////////////////////////////////////////
/// Experimental part of the application
////////////////////////////////////////////////////////////////////////////////////////////////////
