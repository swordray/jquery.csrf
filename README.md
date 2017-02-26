jquery.csrf
===========

Set CSRF token header for jQuery.

## Installation

* NPM

  ```bash
  npm install -g jquery.csrf
  ```

* Bower

  ```bash
  bower install jquery.csrf
  ```

## Usage

1. Include jQuery and jquery.csrf.js:

  ```html
  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="jquery.csrf.js"></script>
  ```

2. Include `meta` tag in your page with the CSRF-token:

  ```html
  <meta name="csrf-token" content="myCSRFtoken">
  ```

3. Now, whenever you make AJAX request using jQuery, `X-CSRF-Token` will be set to `myCSRFtoken`.

  ```js
  // Example:
  $("body").load("ajax/test.html");
  ```

## License

Copyright © 2017 Jianqiu Xiao <swordray@gmail.com> under The [MIT License](http://opensource.org/licenses/MIT).
