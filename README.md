Angular Pretty Checkable
========================

Pure angular pretty checkbox / radio directive. Makes it incredibly simple to have pretty checkboxes / radios in angular.

Actions speak louder than words: [See THE DEMO here](http://itslenny.github.io/angular-pretty-checkable/).

## Acknowledgements 

Uses the un-altered css / images from [PrettyCheckable](http://arthurgouveia.com/prettyCheckable/)

Code based on [angular-ui](http://angular-ui.github.io/bootstrap/) buttons directive.

## Installation

Dependencies: Angular

Download and include angular-pretty-checkable.js and pretty-checkable.css

Create an angular app and inject pretty-checkable. That's about it.

**bower**
```bash
bower install angular-pretty-checkable
```

## Usage

**checkbox**
```html
<pretty-checkbox ng-model="myModel.one" label="'This is one'"></pretty-checkbox>
<pretty-checkbox ng-model="myModel.two" label="'This is two'"></pretty-checkbox>
<pretty-checkbox ng-model="myModel.three" label="'This is three'"></pretty-checkbox>
```

**radio**
```html
<pretty-radio value="'one'" ng-model="myModel.radio" label="'This is one'"></pretty-radio>
<pretty-radio value="'two'" ng-model="myModel.radio" label="'This is two'"></pretty-radio>
<pretty-radio value="'three'" ng-model="myModel.radio" label="'This is three'"></pretty-radio>
```

**html label**
```html
<pretty-checkbox ng-model="myModel.one" label="false">
    <label>My <i>custom label</i> goes here</label>
</pretty-checkbox>
```

**checkbox multiple**

Uses a single model for multiple checkboxes and stores the values in an array.

```html
<pretty-checkbox multiple ng-model="myModel.checks" label="'This is one'" value="'one'"></pretty-checkbox>
<pretty-checkbox multiple ng-model="myModel.checks" label="'This is two'" value="'two'"></pretty-checkbox>
<pretty-checkbox multiple ng-model="myModel.checks" label="'This is three'" value="'three'"></pretty-checkbox>
```

## Configuration

**States**

* disabled - add disable="true"
* checked - model matches value (for checks defaults to true)

**Options**

| Name | Values | Description |
|---|---|---|
|value|variable or single quoted text|Required for radio<br>Used as true value for checkbox|
|label|variable or single quoted text|Optional. Defaults to value if ommited.<br><br>Set to false remove label.|
|disabled|boolean|Disables checkbox if set to true. (also supports ng-disabled)|
|label-left|boolean|Puts the label before (left of) the control|
|multiple|property| If provided this allows multiple checkboxes to share a single model (stores data as an array) |

## Customization

The sprites can be customized simply by modifying the sprites files included here. CSS and images are the same as [PrettyCheckable](http://arthurgouveia.com/prettyCheckable/) see more details about customization on his page.

You can also download the PSD [here](http://itslenny.github.io/angular-pretty-checkable/prettyCheckable.psd) (thanks to [Bruno O. Barros](http://ilustrebob.com.br/) and [Arthur Gouveia](arthurgouveia)) for the graphics and css.


