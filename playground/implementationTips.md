<!-- Accordion CSS examples -->

Pure CSS Accordion:  https://codepen.io/raubaca/pen/PZzpVe
Better SASS version:   https://codepen.io/abergin/pen/ihlDf
Nested  Accordeons :  https://codepen.io/anon/pen/rjXNqR
See Discussion  regarding nested accordeons at:  https://stackoverflow.com/questions/42354819/pure-css-nested-accordion-doesnt-work-as-expected/42355325

<!--  CSS selectors :  Combinators-->
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators

<!-- CSS Centering Percentage Width/Height Elements -->
https://css-tricks.com/centering-percentage-widthheight-elements/

<!-- HTML Adaptive Images :  img , viewport , etc -->
https://html.spec.whatwg.org/multipage/images.html#adaptive-images

<!-- PostCSS  hints: -->
POSTCSS web site: http://postcss.org/
Options to process SASS:

1. Convert file .sass   via gulp task of postcss plugins
Post css plugins catalog:   https://www.postcss.parts/

Short List of POSTCSS plugins:
https://github.com/postcss/postcss

 SASS preprocessor-like plugin:   https://github.com/jonathantneal/precss  

Manual: http://julian.io/some-things-you-may-think-about-postcss-and-you-might-be-wrong/

2. Install Ruby sass  http://sass-lang.com/guide   and run sass gem:

The most direct way to make this happen is in your terminal. Once Sass is installed, you can run
                              sass input.scss output.css
 from your terminal. You can watch either individual files or entire directories. In addition, you can watch folders or directories with the --watch flag. An example of running Sass while watching an entire directory is the following:
sass --watch app/sass:public/stylesheets
