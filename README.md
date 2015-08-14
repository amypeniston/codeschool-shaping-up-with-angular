codeschool-shaping-up-with-angular
==================================

Source code for the shaping up with angular course run by Codeschool at https://www.codeschool.com/courses/shaping-up-with-angular-js/


---

## Course Notes

**Modules**

Where our application components live. They make our code more maintainable, testable and readable. Also where we define dependencies for our app.

It's best to split modules up by functionality. For example, `app.js` includes the top level module which is attached to `<html>` via ng-app, whereas `products.js` includes all of the directives relating to products. Don't forget to link the addition modules via `<script>` tags and to require them as dependencies within the main app module definition. 

*Creating Modules*
    
Syntax: `var app = angular.module( 'store' , [ ] );`
    
    * 'store' = application name
    * [ ]     = list of dependencies

**Expressions**

Allow you to insert dynamic values into html using double curly braces: `{{ expression }}`

**Controllers**

Where we define our app's behavior by defining functions and values. 

**Filters**

Pipe result of expression 1 into expression 2. Ex: `{{ product.price | currency }}`

Filters are of the form: `{{ data | filter:options }}`

Other filters available include: date, uppercase, lowercase, limitTo:#, orderBy

**Validations**

Angular comes with great form validation functionality built in. Don't forget to turn off default HTML validations first. Mark each input that is required using the `required` attribute. To check whether a form contains valid input, see the `{{ formname.$valid }}` property.

`ng-pristine` & `ng-dirty`: angular marks inputs as "have not yet been touched" and "have been touched". This allows you to add special styles to form inputs that have been edited but do not contain correctly formatted text, for example: `.ng-invalid.ng-dirty { styles here }`.

`ng-valid` & `ng-invalid`: angular marks inputs are invalid if they are empty (and are required) or if their input does not match required pattern (for example, email address)

**Services**

Give your controllers additional functionality like:
    
    * Fetching JSON data from a web service via $http
    * Log messages to the javascript console with $log
    * Filter an array with $filter

*$http Service*
        
Using the $http as a function with an options object: `$http({ method: 'GET', url: '/products.json' });`
        
or using the shortcut method get: `$http.get('/products.json', { apiKey: 'myApiKey' });` 
        
Both methods return a promise with `.success()` and `.error()`.

Bonus: if we tell $http to fetch JSON, the result will automatically be decoded into Javascript objects and arrays.

The syntax for giving a controller a service is weirdly formatted: `app.controller('SomeController', [ '$http', function($http) { }]);` where the first argument in the [] is the service name and the second is a function taking the service name as an argument. This format and technique is called dependency injection. 

If you needed two services, the syntax would be: `app.controller('SomeController', ['$http', '$log', function($http,$log) { }]);`.

$http can also post(), put() and delete():
    
    * `$http.post('/path/to/resource.json', { param: 'value' });`
    * `$http.delete('/path/to/resource/json');`

The config object can also be used to allow $http to access other methods, for example 'OPTIONS', 'PATCH', 'TRACE'.

**Directives**

HTML annotations that trigger javascript behaviors

*Built In Directives*
    
    * ng-app: Attached to the html element. It creates an application by running the module set with the attribute when the document loads. For example, when the html document loads, the directive will run the store module.
    * ng-controller: use to attach a controller to an element, along with an alias. Controller names should include "Controller" and be in capital case. The scope of the controller is only within the dom element to which it is attached.
    * ng-show: only show if value of expression is true
    * ng-hide: hide if value of expression is true
    * ng-repeat: takes a special expression (in) and iterates through
    * ng-source: used to display images from URL
        * `<img src="{{product.images[0].full}}"/>` DOES NOT WORK becuase the browser tries to load the image before the expression evaluates.
        * Instead use: `<img ng-src="{{product.images[0].full}}"/>`
    * ng-click: can be used to do 2-way data binding, ex: tab clicking
    * ng-init: allows you to initialize values, for example the starting tab value
    * ng-class: specify a class that you want to set if an expression is true, `{ classname:expression }`
    * ng-model: binds the form element value to the property
    * ng-submit: allows us to call a function when the form is submitted
    * ng-include: triggers an ajax request to return html snippets from server. The purpose is to eliminate duplication of identical code blocks. Adds classes ng-binding and ng-scope to html elements. Note that this may require that you run on a local host (MAMP) to avoid cross site scripting errors. 

*Custom Directives*

Allow you to write html that expresses the behavior of your application, say for example turning `<h3 ng-include="'product-title.html'"></h3>` into `<product-title></product-title>`.

Syntax: `app.directive('name', function() { return { }; });`

Directives can either be Elements (for example `<product-title></product-title>`) or Attributes (for example `<h3 product-title></h3>`). Normally attribute directives are used for mixin behavior like tooltips.

Note that the html "-" translates to camelCase in javascript. So if you want a directive `<product-title>`, your directive should be named `productTitle`.
