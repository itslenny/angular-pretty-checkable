Angular Pretty Checkable
========================

Pure angular pretty checkbox / radio directive. Makes it incredibly simple to have pretty checkboxes / radios in angular.

Actions speak louder than words: [See THE DEMO here](http://itslenny.github.io/angular-pretty-checkable/).

##Acknowledgements 

Uses the un-altered css / images from [PrettyCheckable](http://arthurgouveia.com/prettyCheckable/)

Code based on [angular-ui](http://angular-ui.github.io/bootstrap/) buttons directive.

##Installation

Dependencies: Angular

Download and include angular-pretty-checkable.js and pretty-checkable.css

Create an angular app and inject pretty-checkable. That's about it.

**bower**
```bash
bower install angular-pretty-checkable
```

##Usage

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
<pretty-checkbox ng-model="myModel.one" label="false"><label>My <i>custom label</i> goes here</label></pretty-checkbox>
```

##Configuration

**States**
* disabled - add disable="true"
* checked - model matches value (for checks defaults to true)

**Options**
<table>
  <thead>
    <tr>
      <th align="left" valign="top">Name</td>
      <th align="left" valign="top">Values</td>
      <th align="left" valign="top">Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left" valign="top">value</td>
      <td align="left" valign="top">variable or single quoted text</td>
      <td align="left" valign="top">Required for radio<br>Used as true value for checkbox</td>
    </tr>
    <tr>
      <td align="left" valign="top">label</td>
      <td align="left" valign="top">variable or single quoted text</td>
      <td align="left" valign="top">Optional. Defaults to value if ommited.<br><br>Set to false remove label.</td>
    </tr>
    <tr>
      <td align="left" valign="top">disabled</td>
      <td align="left" valign="top">boolean</td>
      <td align="left" valign="top">Disables checkbox if set to true.</td>
    </tr>
    <tr>
      <td align="left" valign="top">label-left</td>
      <td align="left" valign="top">boolean</td>
      <td align="left" valign="top">Puts the label before (left of) the control</td>
    </tr>
  </tbody>
</table>


##Customization

The sprites can be customized simply by modifying the sprites files included here. CSS and images are the same as [PrettyCheckable](http://arthurgouveia.com/prettyCheckable/) see more details about customization on his page.

You can also download the PSD [here](http://itslenny.github.io/angular-pretty-checkable/prettyCheckable.psd) (thanks to [Bruno O. Barros](http://ilustrebob.com.br/) and [Arthur Gouveia](arthurgouveia)) for the graphics and css.


