# Angular basics
These lessons are intended as an introduction to Angular.

###### menu
* [lessons](#lessons)
* [terms](#terms)
* [code samples](#code-snippets)
* [license](#license)


---
# lessons
###### [top](#menu)
- 1 intro to data binding
- 2 intro to using controllers
- 3 simple mouse events and changing styles
- 4 using out-of-box filtering
- 5 using simple HTML form with todo list
- 6 creating a custom directive to alter a styles
- 7 an example of templates using ng-include
- 8 implementing partial views using ng-view
- 9 basic AJAX examples that consume web services


---
# terms
###### [top](#menu)

- [data binding](#data-binding)
- [handlerbars](#handlebars)
- ng-app
- ng-controller
- ng-repeat
- ng-model
- ng-bind
- ng-click
- ng-view
- ng-submit
- ng-class
- Module
- Controller
- Directive
- Config
- Filtering
- ng-class
- ng-show/ng-hide
- $scope
- $rootScope
- $routeProvider
- $http
- $index
- $window

# data binding
```
ability to manipulate data between HTML pages and JavaScript code
- ng-model : for 2-way data binding, used for sharing data between HTML and JavaScript
- ng-bind : for 1-way data binding, used to initialize data in HTML markup page
```
# handlebars
```
called mustaches or double brackets is used like 1-way binding
- syntax : 
{{ expression }}
Angular will evaluate expressions such as equations, conditional statements, function calls, and/or display a $scope variable.
unlike ng-bind, expressions can be more useful and embedded in the HTML markup
- example :
<div class=".col-md-{{i+1}}"> hi </div>**
```


---
# license
###### [top](#menu)
MIT (http://www.opensource.org/licenses/mit-license.php)


---
# coda
</>
