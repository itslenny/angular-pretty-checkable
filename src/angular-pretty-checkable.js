/* @preserve
 *
 * angular-pretty-checkable
 * https://github.com/itslenny/angular-pretty-checkable
 *
 * Version: 0.1.7 - 02/22/2015
 * License: MIT
 */

//init module
angular.module('pretty-checkable', [])
  
  //config
  .constant('prettyCheckableConfig', {
    activeClass: 'checked',
    disabledClass: 'disabled',
    toggleEvent: 'click'
  })

  //controller
  .controller('PrettyCheckableController', ['prettyCheckableConfig', function(prettyCheckableConfig) {
    this.activeClass = prettyCheckableConfig.activeClass || 'checked';
    this.disabledClass = prettyCheckableConfig.disabledClass || 'disabled';
    this.toggleEvent = prettyCheckableConfig.toggleEvent || 'click';
  }])

  //pretty radio directive
  .directive('prettyRadio', function () {
    return {
      restrict: 'E',
      require: ['prettyRadio', 'ngModel'],
      controller: 'PrettyCheckableController',
      link: function (scope, element, attrs, ctrls) {
        var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

        //set element class
        element.addClass('prettyradio');
        
        //add anchor
        element.prepend(angular.element('<a></a>'));        
        
        //add label if we need one
        if(attrs.label!=='false'){        
            //set label text to label if available otherwise default to value
            var labelText = scope.$eval(attrs.label ? attrs.label : attrs.value);
            var label = angular.element('<label>'+labelText+'</label>');
        
            //add label before or after depending on label-left value 
            if(attrs.labelLeft){
              element.prepend(label);
            }else{
              element.append(label);
            }
        }

        // listen to changes on disabled attribute
        // support for disabled and ngDisabled
        attrs.$observe('disabled', function(value) {
          ngModelCtrl.$render();
        });        

        //model -> UI
        ngModelCtrl.$render = function () {
          var disabledAttr = (attrs.disabled === 'true' || attrs.disabled === 'false') ? attrs.disabled : scope.$eval(attrs.disabled);
          var ngDisabledAttr = (attrs.ngDisabled === 'true' || attrs.ngDisabled === 'false') ? attrs.ngDisabled : scope.$eval(attrs.ngDisabled);
          element.find('a').toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.value)));
          element.find('a').toggleClass(buttonsCtrl.disabledClass, (disabledAttr || ngDisabledAttr) ? true : false);
        };

        //ui->model
        element.bind(buttonsCtrl.toggleEvent, function () {
          if (!element.find('a').hasClass(buttonsCtrl.activeClass) && !element.find('a').hasClass(buttonsCtrl.disabledClass)) {
            scope.$apply(function () {
              ngModelCtrl.$setViewValue(scope.$eval(attrs.value));
              ngModelCtrl.$render();
            });
          }
        });
      },
      template:'<div ng-transclude></div>',
      replace: true,
      transclude: true
    };
  })

  //pretty checkbox diretive
  .directive('prettyCheckbox', function () {
    return {
      restrict: 'E',
      require: ['prettyCheckbox', 'ngModel'],
      controller: 'PrettyCheckableController',
      link: function (scope, element, attrs, ctrls) {
        var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
        var isRequired = false;
        var isMultiple = false;

        //set element class
        element.addClass('prettycheckbox');
        
        //add anchor
        element.prepend(angular.element('<a></a>'));

        // listen to changes on required attribute
        // support for required and ngRequired
        attrs.$observe('required', function(value) {
          isRequired = !!value;
          validate(isChecked()); // revalidate when attribute "required" changed
        });

        // listen to changes on disabled attribute
        // support for disabled and ngDisabled
        attrs.$observe('disabled', function(value) {
          ngModelCtrl.$render();
        });

        // multiple mode?
        if(angular.isDefined(attrs.multiple)) {
          isMultiple = true;
        }

        //add label if we need one
        if(attrs.label!=='false'){
            //set label text to label if available otherwise default to value        
            var labelText = scope.$eval(attrs.label ? attrs.label : attrs.value);
            var label = angular.element('<label>'+labelText+'</label>');
            //add label before or after depending on label-left value 
            if(attrs.labelLeft){
              element.prepend(label);
            }else{
              element.append(label);
            }
        }

        function getTrueValue() {
          return getCheckboxValue(attrs.value, true);
        }

        function getCheckboxValue(attributeValue, defaultValue) {
          var val = scope.$eval(attributeValue);
          return angular.isDefined(val) ? val : defaultValue;
        }

        function validate(isChecked) {
          ngModelCtrl.$setValidity('require', (isChecked || !isRequired)); // should be checked or not required
        }

        function isChecked() {
        	return element.find('a').hasClass(buttonsCtrl.activeClass);
        }

        function modelIsArray() {
          return angular.isArray(ngModelCtrl.$modelValue);
        }

        function modelIsChecked(trueValue) {
          if(modelIsArray()) {
            return (ngModelCtrl.$modelValue.indexOf(trueValue) > -1);
          }
          return angular.equals(ngModelCtrl.$modelValue, trueValue);
        }

        function updateViewValue(value, remove) {
          var model = ngModelCtrl.$modelValue;

          if(isMultiple) {
            // we have to create a new array, otherwise angular can't detect a model change
            var newModel = [];

            // copy data from existing model
            if(modelIsArray()) {
              angular.copy(model, newModel);
            }

            model = newModel;
            var index = model.indexOf(value); 

            if(remove && index > -1) { 
              model.splice(index, 1);
            } else if (!remove && index === -1) {
              model.push(value);
            }
          } else {
            model = remove ? false : value;
          }

          // update view value
          ngModelCtrl.$setViewValue(model); 
        }

        //model -> UI
        ngModelCtrl.$render = function () {
          var disabledAttr = (attrs.disabled === 'true' || attrs.disabled === 'false') ? attrs.disabled : scope.$eval(attrs.disabled);
          var ngDisabledAttr = (attrs.ngDisabled === 'true' || attrs.ngDisabled === 'false') ? attrs.ngDisabled : scope.$eval(attrs.ngDisabled);

          element.find('a').toggleClass(buttonsCtrl.activeClass, modelIsChecked(getTrueValue()));          
          element.find('a').toggleClass(buttonsCtrl.disabledClass, (disabledAttr || ngDisabledAttr) ? true : false);
        };

        //ui->model
        element.bind(buttonsCtrl.toggleEvent, function () {
          if(!element.find('a').hasClass(buttonsCtrl.disabledClass)) {
            scope.$apply(function () {
              var wasChecked = isChecked();
              updateViewValue(getTrueValue(), wasChecked);
              validate(!wasChecked);
              ngModelCtrl.$render();
            });
          }
        });

      },
      template:'<div ng-transclude></div>',
      replace: true,
      transclude: true

    };
  });
