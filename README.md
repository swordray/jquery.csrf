jquery.csrf
===========

Set CSRF token header for jQuery.

##Usage
First, Include jQuery Then **jquery.csrf.js**:
```js
<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script src="jquery.csrf.js"></script>
```
Then, Include `meta` Tag In Your Page With The CSRF-Token In It:
```html
<meta name="csrf-token" content="myCSRFtoken">
```
Now, Whenever You Make AJAX Request Using jQuery .. `X-CSRF-Token` Will Be Set To `myCSRFtoken`.
Example:
```js
$( "body" ).load( "ajax/test.html" );
```

## License

Copyright © 2015 Jianqiu Xiao <swordray@gmail.com> under The [MIT License](http://opensource.org/licenses/MIT).
