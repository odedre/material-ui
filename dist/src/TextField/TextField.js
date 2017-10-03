'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedTextarea = require('./EnhancedTextarea');

var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

var _TextFieldHint = require('./TextFieldHint');

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = require('./TextFieldLabel');

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _TextFieldUnderline = require('./TextFieldUnderline');

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @description 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Text fields allow users to input text.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Also see http://www.material-ui.com/#/components/text-field
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @example 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import TextField from 'material-ui/TextField';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * const TextFieldExampleSimple = () => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      hintText="Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      hintText="The hint text can be as long as you want, it will wrap."
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      id="text-field-default"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      defaultValue="Default Value"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      hintText="Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      floatingLabelText="Floating Label Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      defaultValue="Default Value"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      floatingLabelText="Floating Label Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      hintText="Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      floatingLabelText="Fixed Floating Label Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     floatingLabelFixed={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      hintText="Password Field"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      floatingLabelText="Password"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      type="password"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      hintText="MultiLine with rows: 2 and rowsMax: 4"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      multiLine={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      rows={2}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      rowsMax={4}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      hintText="Message Field"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      floatingLabelText="MultiLine and FloatingLabel"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      multiLine={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      rows={2}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      hintText="Full width"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      fullWidth={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *    />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * export default TextFieldExampleSimple;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @example 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * // The errorText property used in combination with various other features.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import TextField from 'material-ui/TextField';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * const TextFieldExampleError = () => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       errorText="This field is required"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       errorText="The error text can be as long as you want, it will wrap."
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       errorText="This field is required"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       floatingLabelText="Floating Label Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Message Field"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       errorText="This field is required."
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       floatingLabelText="MultiLine and FloatingLabel"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       multiLine={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       rows={2}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * export default TextFieldExampleError;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @example 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * // Examples of styling various Text Field features.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import TextField from 'material-ui/TextField';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import {orange500, blue500} from 'material-ui/styles/colors';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * const styles = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   errorStyle: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     color: orange500,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   underlineStyle: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     borderColor: orange500,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   floatingLabelStyle: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     color: orange500,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   floatingLabelFocusStyle: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     color: blue500,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * const TextFieldExampleCustomize = () => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Styled Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintStyle={styles.errorStyle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Custom error color"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       errorText="This field is required."
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       errorStyle={styles.errorStyle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Custom Underline Color"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       underlineStyle={styles.underlineStyle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Custom Underline Focus Color"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       underlineFocusStyle={styles.underlineStyle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       floatingLabelText="Styled Floating Label Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       floatingLabelStyle={styles.floatingLabelStyle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * export default TextFieldExampleCustomize;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @example 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * // Various examples of disabled Text Fields.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import TextField from 'material-ui/TextField';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * const TextFieldExampleDisabled = () => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *      disabled={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Disabled Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       disabled={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       id="text-field-disabled"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       defaultValue="Disabled Value"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       disabled={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Disabled Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       floatingLabelText="Floating Label Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       disabled={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       hintText="Disabled Hint Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       defaultValue="Disabled With Floating Label"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       floatingLabelText="Floating Label Text"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * export default TextFieldExampleDisabled;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @example 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * // A controlled Text Field example.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * import TextField from 'material-ui/TextField';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * export default class TextFieldExampleControlled extends React.Component {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   constructor(props) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     super(props);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     this.state = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       value: 'Property Value',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   handleChange = (event) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     this.setState({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       value: event.target.value,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   render() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *         <TextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *           id="text-field-controlled"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *           value={this.state.value}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *           onChange={this.handleChange}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *         />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *       </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *     );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var getStyles = function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      _context$muiTheme$tex = _context$muiTheme.textField,
      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
      focusColor = _context$muiTheme$tex.focusColor,
      textColor = _context$muiTheme$tex.textColor,
      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
      backgroundColor = _context$muiTheme$tex.backgroundColor,
      errorColor = _context$muiTheme$tex.errorColor;


  var styles = {
    root: {
      fontSize: 16,
      lineHeight: '24px',
      width: props.fullWidth ? '100%' : 256,
      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
      display: 'inline-block',
      position: 'relative',
      backgroundColor: backgroundColor,
      fontFamily: baseTheme.fontFamily,
      transition: _transitions2.default.easeOut('200ms', 'height'),
      cursor: props.disabled ? 'not-allowed' : 'auto'
    },
    error: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: errorColor,
      transition: _transitions2.default.easeOut()
    },
    floatingLabel: {
      color: props.disabled ? disabledTextColor : floatingLabelColor,
      pointerEvents: 'none'
    },
    input: {
      padding: 0,
      position: 'relative',
      width: '100%',
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      color: props.disabled ? disabledTextColor : textColor,
      cursor: 'inherit',
      font: 'inherit',
      WebkitOpacity: 1,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' // Remove mobile color flashing (deprecated style).
    },
    inputNative: {
      appearance: 'textfield' // Improve type search style.
    }
  };

  styles.textarea = Object.assign({}, styles.input, {
    marginTop: props.floatingLabelText ? 36 : 12,
    marginBottom: props.floatingLabelText ? -36 : -12,
    boxSizing: 'border-box',
    font: 'inherit'
  });

  // Do not assign a height to the textarea as he handles it on his own.
  styles.input.height = '100%';

  if (state.isFocused) {
    styles.floatingLabel.color = focusColor;
  }

  if (props.floatingLabelText) {
    styles.input.boxSizing = 'border-box';

    if (!props.multiLine) {
      styles.input.marginTop = 14;
    }

    if (state.errorText) {
      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
    }
  }

  if (state.errorText) {
    if (state.isFocused) {
      styles.floatingLabel.color = styles.error.color;
    }
  }

  return styles;
};

/**
 * Check if a value is valid to be displayed inside an input.
 *
 * @param The value to check.
 * @returns True if the string provided is valid, false otherwise.
 */
function isValid(value) {
  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
}

var TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextField.__proto__ || Object.getPrototypeOf(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isFocused: false,
      errorText: undefined,
      hasValue: false
    }, _this.handleInputBlur = function (event) {
      _this.setState({ isFocused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleInputChange = function (event) {
      if (!_this.props.hasOwnProperty('value')) {
        _this.setState({ hasValue: isValid(event.target.value) });
      }
      if (_this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _this.handleInputFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ isFocused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleHeightChange = function (event, height) {
      var newHeight = height + 24;
      if (_this.props.floatingLabelText) {
        newHeight += 24;
      }
      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextField, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          name = _props.name,
          hintText = _props.hintText,
          floatingLabelText = _props.floatingLabelText,
          id = _props.id;


      var propsLeaf = children ? children.props : this.props;

      this.setState({
        errorText: this.props.errorText,
        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
      });

      (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.');

      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled && !this.props.disabled) {
        this.setState({
          isFocused: false
        });
      }

      if (nextProps.errorText !== this.props.errorText) {
        this.setState({
          errorText: nextProps.errorText
        });
      }

      if (nextProps.children && nextProps.children.props) {
        nextProps = nextProps.children.props;
      }

      if (nextProps.hasOwnProperty('value')) {
        var hasValue = isValid(nextProps.value);

        this.setState({
          hasValue: hasValue
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.input) {
        this.getInputNode().blur();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.input) {
        this.getInputNode().focus();
      }
    }
  }, {
    key: 'select',
    value: function select() {
      if (this.input) {
        this.getInputNode().select();
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.input ? this.getInputNode().value : undefined;
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
    }
  }, {
    key: '_isControlled',
    value: function _isControlled() {
      return this.props.hasOwnProperty('value');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          errorStyle = _props2.errorStyle,
          errorText = _props2.errorText,
          floatingLabelFixed = _props2.floatingLabelFixed,
          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
          floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
          floatingLabelStyle = _props2.floatingLabelStyle,
          floatingLabelText = _props2.floatingLabelText,
          fullWidth = _props2.fullWidth,
          hintText = _props2.hintText,
          hintStyle = _props2.hintStyle,
          id = _props2.id,
          inputStyle = _props2.inputStyle,
          multiLine = _props2.multiLine,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          onFocus = _props2.onFocus,
          style = _props2.style,
          type = _props2.type,
          underlineDisabledStyle = _props2.underlineDisabledStyle,
          underlineFocusStyle = _props2.underlineFocusStyle,
          underlineShow = _props2.underlineShow,
          underlineStyle = _props2.underlineStyle,
          rows = _props2.rows,
          rowsMax = _props2.rowsMax,
          textareaStyle = _props2.textareaStyle,
          other = _objectWithoutProperties(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var inputId = id || this.uniqueId;

      var errorTextElement = this.state.errorText && _react2.default.createElement(
        'div',
        { style: prepareStyles(Object.assign(styles.error, errorStyle)) },
        this.state.errorText
      );

      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
        _TextFieldLabel2.default,
        {
          muiTheme: this.context.muiTheme,
          style: Object.assign(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
          shrinkStyle: floatingLabelShrinkStyle,
          htmlFor: inputId,
          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
          disabled: disabled
        },
        floatingLabelText
      );

      var inputProps = {
        id: inputId,
        ref: function ref(elem) {
          return _this2.input = elem;
        },
        disabled: this.props.disabled,
        onBlur: this.handleInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus
      };

      var childStyleMerged = Object.assign(styles.input, inputStyle);

      var inputElement = void 0;
      if (children) {
        inputElement = _react2.default.cloneElement(children, Object.assign({}, inputProps, children.props, {
          style: Object.assign(childStyleMerged, children.props.style)
        }));
      } else {
        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, Object.assign({
          style: childStyleMerged,
          textareaStyle: Object.assign(styles.textarea, styles.inputNative, textareaStyle),
          rows: rows,
          rowsMax: rowsMax,
          hintText: hintText
        }, other, inputProps, {
          onHeightChange: this.handleHeightChange
        })) : _react2.default.createElement('input', Object.assign({
          type: type,
          style: prepareStyles(Object.assign(styles.inputNative, childStyleMerged))
        }, other, inputProps));
      }

      var rootProps = {};

      if (children) {
        rootProps = other;
      }

      return _react2.default.createElement(
        'div',
        Object.assign({}, rootProps, {
          className: className,
          style: prepareStyles(Object.assign(styles.root, style))
        }),
        floatingLabelTextElement,
        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
          muiTheme: this.context.muiTheme,
          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
          style: hintStyle,
          text: hintText
        }) : null,
        inputElement,
        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
          disabled: disabled,
          disabledStyle: underlineDisabledStyle,
          error: !!this.state.errorText,
          errorStyle: errorStyle,
          focus: this.state.isFocused,
          focusStyle: underlineFocusStyle,
          muiTheme: this.context.muiTheme,
          style: underlineStyle
        }) : null,
        errorTextElement
      );
    }
  }]);

  return TextField;
}(_react.Component);

TextField.propTypes = {
  /**
   * @property {PropTypes.node} children - The css class name of the root element.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.any} defaultValue - The text string to use for the default value.
   */
  defaultValue: _propTypes2.default.any,
  /**
   * @property {PropTypes.bool} disabled - Disables the text field if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} errorStyle - The style object to use to override error styles.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} errorText - The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} floatingLabelFixed - If true, the floating label will float even when there is no value.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} floatingLabelFocusStyle - The style object to use to override floating label styles when focused.
   */
  floatingLabelFocusStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} floatingLabelShrinkStyle - The style object to use to override floating label styles when shrunk.
   */
  floatingLabelShrinkStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} floatingLabelStyle - The style object to use to override floating label styles.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} floatingLabelText - The content to use for the floating label element.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} fullWidth - If true, the field receives the property width 100%.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} hintStyle - Override the inline-styles of the TextField's hint text element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} hintText - The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} id - The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} inputStyle - Override the inline-styles of the TextField's input element.
   * When multiLine is false: define the style of the input element.
   * When multiLine is true: define the style of the container of the textarea.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} multiLine - If true, a textarea element will be rendered.
   * The textarea also grows and shrinks according to the number of lines.
   */
  multiLine: _propTypes2.default.bool,
  /**
   * @property {PropTypes.string} name - Name applied to the input.
   */
  name: _propTypes2.default.string,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function that is fired when the textfield's value changes.
   *
   * @param {object} event Change event targeting the text field.
   * @param {string} newValue The new value of the text field.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * @property {PropTypes.number} rows - Number of rows to display when multiLine option is set to true.
   */
  rows: _propTypes2.default.number,
  /**
   * @property {PropTypes.number} rowsMax - Maximum number of rows to display when
   * multiLine option is set to true.
   */
  rowsMax: _propTypes2.default.number,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} textareaStyle - Override the inline-styles of the TextField's textarea element.
   * The TextField use either a textarea or an input,
   * this property has effects only when multiLine is true.
   */
  textareaStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.string} type - Specifies the type of input to display
   * such as "password" or "text".
   */
  type: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} underlineDisabledStyle - Override the inline-styles of the
   * TextField's underline element when disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} underlineFocusStyle - Override the inline-styles of the TextField's
   * underline element when focussed.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} underlineShow - If true, shows the underline for the text field.
   */
  underlineShow: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} underlineStyle - Override the inline-styles of the TextField's underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.any} value - The value of the text field.
   */
  value: _propTypes2.default.any
};
TextField.defaultProps = {
  disabled: false,
  floatingLabelFixed: false,
  multiLine: false,
  fullWidth: false,
  type: 'text',
  underlineShow: true,
  rows: 1
};
TextField.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = TextField;

//# sourceMappingURL=TextField.js.map