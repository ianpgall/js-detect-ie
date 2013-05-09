DetectIE
========

A tiny JavaScript library that helps to detect Internet Explorer, its current version, and its native version.

Conditional Comments are [no longer supported in IE 10](http://www.sitepoint.com/microsoft-drop-ie10-conditional-comments/), making them an invalid way to detect IE and its versions.

Conditional Compilation, a different [feature](http://www.javascriptkit.com/javatutors/conditionalcompile.shtml), also only supported in IE, allows you to find the version of the IE browser.


Use of DetectIE
===============

A global variable (`Object`), called `IE`, is available (also by `window.IE`).

This object has 3 properties:

 - isTheBrowser
 - actualVersion
 - currentVersion

`isTheBrowser` is a boolean, telling whether the current browser is IE or not.

`actualVersion` is a string, telling the true version of the browser. For example, if IE 10 is being used, but the browser/document mode (changed in Developer Tools) is for IE 9, this will still return "10".

`currentVersion` is a string, telling the current acting version of the browser. In the previous example, this will return "9".
