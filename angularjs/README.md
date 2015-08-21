# HTML
### controllerAs View Syntax
Use the controllerAs syntax over the classic controller with $scope syntax.

$scope
```javascript
app.controller('GraphController', function($scope) {
    $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    $scope.data = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];
});
```

```html
<div ng-controller="GraphController">
    <canvas id="radar" class="chart chart-radar" data="data" labels="labels"></canvas>
</div>
```

as
```html
<div ng-controller="GraphController as graphCtrl">
    <canvas id="radar" class="chart chart-radar" data="graphCtrl.data" labels="graphCtrl.labels"></canvas>
</div>
```

```javascript
app.controller('GraphController', function() {
    var vm = this;
    vm.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    vm.data = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];
});
```
### Multiple ngControllers
Use two levels of <div>

To bind 2 models to one input field - ngChange (only works for changes):
```html
<input type="text" 
       ng-model="sn_number" 
       ng-change="id=sn_number"/> 
```

### ngBind ngModel
**ng-bind** has one-way data binding ($scope --> view). It has a shortcut {{ val }} which displays the scope value 
$scope.val inserted into html where val is a variable name.

**ng-model** is intended to be put inside of form elements and has two-way data binding ($scope --> view and view --> 
$scope) e.g. <input ng-model="val"/>.



# Directives
## Built-in
### ngShow and ngHide
When using `$scope.variable` for `ng-show` and `ng-hide`, please access the variable through a **getter method** to avoid 
 call `$scope.$apply();`
 
You can also use `data-ng-click`, `data-ng-show`. 