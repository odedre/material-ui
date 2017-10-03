'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _DropDownMenu = require('../DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props) {
  return {
    label: {
      paddingLeft: 0,
      top: props.floatingLabelText ? 6 : -4
    },
    icon: {
      right: 0,
      top: props.floatingLabelText ? 8 : 0
    },
    hideDropDownUnderline: {
      borderTop: 'none'
    },
    dropDownMenu: {
      display: 'block'
    }
  };
}

/**
 * 
 * @description 
 * SelectField is implemented as a controlled component, with the current selection set through the value property.
 * To learn more about SelectField please visit the specifications here: https://material.io/guidelines/components/menus.html#menus-usage.
 * 
 * 
 * @example 
 * // SelectField is implemented as a controlled component, with the current selection set through the value property. The SelectField can be disabled with the disabled property.
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const styles = {
 *   customWidth: {
 *     width: 150,
 *   },
 * };
 * 
 * export default class SelectFieldExampleSimple extends Component {
 *   state = {
 *     value: 1,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <div>
 *         <SelectField
 *           floatingLabelText="Frequency"
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *         >
 *           <MenuItem value={1} primaryText="Never" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </SelectField>
 *         <br />
 *         <SelectField floatingLabelText="Frequency" value={1} disabled={true}>
 *           <MenuItem value={1} primaryText="Disabled" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           floatingLabelText="Frequency"
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           style={styles.customWidth}
 *         >
 *           <MenuItem value={1} primaryText="Custom width" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           floatingLabelText="Frequency"
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           autoWidth={true}
 *         >
 *           <MenuItem value={1} primaryText="Auto width" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </SelectField>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * // SelectField can also be nullable. In this case, just specify a MenuItem with no text and with a null value. For instance, for a boolean:
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class SelectFieldExampleNullable extends Component {
 *   state = {
 *     value: null,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <div>
 *         <SelectField
 *           floatingLabelText="Ready?"
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *         >
 *           <MenuItem value={null} primaryText="" />
 *           <MenuItem value={false} primaryText="No" />
 *           <MenuItem value={true} primaryText="Yes" />
 *         </SelectField>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // With the `maxHeight` property set, the Select Field will be scrollable
 * // if the number of items causes the height to exceed this limit.
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const items = [];
 * for (let i = 0; i < 100; i++ ) {
 *   items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
 * }
 * 
 * export default class DropDownMenuLongMenuExample extends Component {
 *   state = {
 *     value: 10,
 *   };
 * 
 *   handleChange = (event, index, value) => {
 *     this.setState({value});
 *   };
 * 
 *   render() {
 *     return (
 *       <SelectField
 *         value={this.state.value}
 *         onChange={this.handleChange}
 *         maxHeight={200}
 *       >
 *         {items}
 *       </SelectField>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // With a `label` applied to each `MenuItem`, `SelectField` displays a complementary description of the selected item.
 * 
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class SelectFieldExampleCustomLabel extends Component {
 *   state = {
 *     value: 1,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <SelectField value={this.state.value} onChange={this.handleChange}>
 *         <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
 *         <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
 *         <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
 *         <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
 *       </SelectField>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * // Floating label example
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const items = [
 *   <MenuItem key={1} value={1} primaryText="Never" />,
 *   <MenuItem key={2} value={2} primaryText="Every Night" />,
 *   <MenuItem key={3} value={3} primaryText="Weeknights" />,
 *   <MenuItem key={4} value={4} primaryText="Weekends" />,
 *   <MenuItem key={5} value={5} primaryText="Weekly" />,
 * ];
 * 
 * export default class SelectFieldExampleFloatingLabel extends Component {
 *   state = {
 *     value: null,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <div>
 *         <SelectField
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           floatingLabelText="Floating Label Text"
 *         >
 *           {items}
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           floatingLabelText="Floating Label Text"
 *           floatingLabelFixed={true}
 *           hintText="Hint text"
 *         >
 *           {items}
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           floatingLabelText="Styled Floating Label Text"
 *           floatingLabelStyle={{color: 'red'}}
 *         >
 *           {items}
 *         </SelectField>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // The `errorText` property displays an error message below the Select Field.
 * // This can be customised with the `errorStyle` property.
 * 
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const items = [
 *   <MenuItem key={1} value={1} primaryText="Never" />,
 *   <MenuItem key={2} value={2} primaryText="Every Night" />,
 *   <MenuItem key={3} value={3} primaryText="Weeknights" />,
 *   <MenuItem key={4} value={4} primaryText="Weekends" />,
 *   <MenuItem key={5} value={5} primaryText="Weekly" />,
 * ];
 * 
 * export default class SelectFieldExampleError extends Component {
 *   state = {
 *     value: null,
 *   };
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     const {value} = this.state;
 *     const night = value === 2 || value === 3;
 * 
 *     return (
 *       <div>
 *         <SelectField
 *           value={value}
 *           onChange={this.handleChange}
 *           errorText={!night && 'Should be Night'}
 *         >
 *           {items}
 *         </SelectField>
 *         <br />
 *         <SelectField
 *           value={value}
 *           onChange={this.handleChange}
 *           errorText={night && 'Should not be Night (Custom error style)'}
 *           errorStyle={{color: 'orange'}}
 *         >
 *           {items}
 *         </SelectField>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 * 
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const names = [
 *   'Oliver Hansen',
 *   'Van Henry',
 *   'April Tucker',
 *   'Ralph Hubbard',
 *   'Omar Alexander',
 *   'Carlos Abbott',
 *   'Miriam Wagner',
 *   'Bradley Wilkerson',
 *   'Virginia Andrews',
 *   'Kelly Snyder',
 * ];
 * 
 * export default class SelectFieldExampleMultiSelect extends Component {
 *   state = {
 *     values: [],
 *   };
 * 
 *   handleChange = (event, index, values) => this.setState({values});
 * 
 *   menuItems(values) {
 *     return names.map((name) => (
 *       <MenuItem
 *         key={name}
 *         insetChildren={true}
 *         checked={values && values.indexOf(name) > -1}
 *         value={name}
 *         primaryText={name}
 *       />
 *     ));
 *   }
 * 
 *   render() {
 *     const {values} = this.state;
 *     return (
 *       <SelectField
 *         multiple={true}
 *         hintText="Select a name"
 *         value={values}
 *         onChange={this.handleChange}
 *       >
 *         {this.menuItems(values)}
 *       </SelectField>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // The rendering of selected items can be customized by providing a `selectionRenderer`.
 * 
 * 
 * import React, {Component} from 'react';
 * import SelectField from 'material-ui/SelectField';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const persons = [
 *   {value: 0, name: 'Oliver Hansen'},
 *   {value: 1, name: 'Van Henry'},
 *   {value: 2, name: 'April Tucker'},
 *   {value: 3, name: 'Ralph Hubbard'},
 *   {value: 4, name: 'Omar Alexander'},
 *   {value: 5, name: 'Carlos Abbott'},
 *   {value: 6, name: 'Miriam Wagner'},
 *   {value: 7, name: 'Bradley Wilkerson'},
 *   {value: 8, name: 'Virginia Andrews'},
 *   {value: 9, name: 'Kelly Snyder'},
 * ];
 * 
 * export default class SelectFieldExampleSelectionRenderer extends Component {
 *   state = {
 *     values: [],
 *   };
 * 
 *   handleChange = (event, index, values) => this.setState({values});
 * 
 *   selectionRenderer = (values) => {
 *     switch (values.length) {
 *       case 0:
 *         return '';
 *       case 1:
 *         return persons[values[0]].name;
 *       default:
 *         return `${values.length} names selected`;
 *     }
 *   }
 * 
 *   menuItems(persons) {
 *     return persons.map((person) => (
 *       <MenuItem
 *         key={person.value}
 *         insetChildren={true}
 *         checked={this.state.values.indexOf(person.value) > -1}
 *         value={person.value}
 *         primaryText={person.name}
 *       />
 *     ));
 *   }
 * 
 *   render() {
 *     return (
 *       <SelectField
 *         multiple={true}
 *         hintText="Select a name"
 *         value={this.state.values}
 *         onChange={this.handleChange}
 *         selectionRenderer={this.selectionRenderer}
 *       >
 *         {this.menuItems(persons)}
 *       </SelectField>
 *     );
 *   }
 * }
 * 
 */

var SelectField = function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField() {
    _classCallCheck(this, SelectField);

    return _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).apply(this, arguments));
  }

  _createClass(SelectField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoWidth = _props.autoWidth,
          multiple = _props.multiple,
          children = _props.children,
          style = _props.style,
          labelStyle = _props.labelStyle,
          iconStyle = _props.iconStyle,
          id = _props.id,
          underlineDisabledStyle = _props.underlineDisabledStyle,
          underlineFocusStyle = _props.underlineFocusStyle,
          menuItemStyle = _props.menuItemStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          underlineStyle = _props.underlineStyle,
          dropDownMenuProps = _props.dropDownMenuProps,
          errorStyle = _props.errorStyle,
          disabled = _props.disabled,
          floatingLabelFixed = _props.floatingLabelFixed,
          floatingLabelText = _props.floatingLabelText,
          floatingLabelStyle = _props.floatingLabelStyle,
          hintStyle = _props.hintStyle,
          hintText = _props.hintText,
          fullWidth = _props.fullWidth,
          errorText = _props.errorText,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          menuStyle = _props.menuStyle,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          selectionRenderer = _props.selectionRenderer,
          value = _props.value,
          other = _objectWithoutProperties(_props, ['autoWidth', 'multiple', 'children', 'style', 'labelStyle', 'iconStyle', 'id', 'underlineDisabledStyle', 'underlineFocusStyle', 'menuItemStyle', 'selectedMenuItemStyle', 'underlineStyle', 'dropDownMenuProps', 'errorStyle', 'disabled', 'floatingLabelFixed', 'floatingLabelText', 'floatingLabelStyle', 'hintStyle', 'hintText', 'fullWidth', 'errorText', 'listStyle', 'maxHeight', 'menuStyle', 'onFocus', 'onBlur', 'onChange', 'selectionRenderer', 'value']);

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        _TextField2.default,
        Object.assign({}, other, {
          style: style,
          disabled: disabled,
          floatingLabelFixed: floatingLabelFixed,
          floatingLabelText: floatingLabelText,
          floatingLabelStyle: floatingLabelStyle,
          hintStyle: hintStyle,
          hintText: !hintText && !floatingLabelText ? ' ' : hintText,
          fullWidth: fullWidth,
          errorText: errorText,
          underlineStyle: underlineStyle,
          errorStyle: errorStyle,
          onFocus: onFocus,
          onBlur: onBlur,
          id: id,
          underlineDisabledStyle: underlineDisabledStyle,
          underlineFocusStyle: underlineFocusStyle
        }),
        _react2.default.createElement(
          _DropDownMenu2.default,
          Object.assign({
            disabled: disabled,
            style: Object.assign(styles.dropDownMenu, menuStyle),
            labelStyle: Object.assign(styles.label, labelStyle),
            iconStyle: Object.assign(styles.icon, iconStyle),
            menuItemStyle: menuItemStyle,
            selectedMenuItemStyle: selectedMenuItemStyle,
            underlineStyle: styles.hideDropDownUnderline,
            listStyle: listStyle,
            autoWidth: autoWidth,
            value: value,
            onChange: onChange,
            maxHeight: maxHeight,
            multiple: multiple,
            selectionRenderer: selectionRenderer
          }, dropDownMenuProps),
          children
        )
      );
    }
  }]);

  return SelectField;
}(_react.Component);

SelectField.propTypes = {
  /**
   * @property {PropTypes.bool} autoWidth - If true, the width will automatically be set according to the
   * items inside the menu.
   * To control the width in CSS instead, leave this prop set to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} children - The `MenuItem` elements to populate the select field with.
   * If the menu items have a `label` prop, that value will
   * represent the selected menu item in the rendered select field.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} disabled - If true, the select field will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} dropDownMenuProps - Object that can handle and override any property of component DropDownMenu.
   */
  dropDownMenuProps: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} errorStyle - Override the inline-styles of the error element.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} errorText - The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} floatingLabelFixed - If true, the floating label will float even when no value is selected.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} floatingLabelStyle - Override the inline-styles of the floating label.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} floatingLabelText - The content of the floating label.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} fullWidth - If true, the select field will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} hintStyle - Override the inline-styles of the hint element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} hintText - The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * @property {PropTypes.object} iconStyle - Override the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.string} id - The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} labelStyle - Override the label style when the select field is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} listStyle - Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.number} maxHeight - Override the default max-height of the underlying `DropDownMenu` element.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * @property {PropTypes.object} menuItemStyle - Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} menuStyle - Override the inline-styles of the underlying `DropDownMenu` element.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} multiple - If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onChange - Callback function fired when a menu item is selected.
   *
   * @param {object} event TouchTap event targeting the menu item
   * that was selected.
   * @param {number} key The index of the selected menu item, or undefined
   * if `multiple` is true.
   * @param {any} payload If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} selectedMenuItemStyle - Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.func} selectionRenderer - Customize the rendering of the selected item.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   * @param {any} menuItem The selected `MenuItem`.
   * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} underlineDisabledStyle - Override the inline-styles of the underline element when the select
   * field is disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} underlineFocusStyle - Override the inline-styles of the underline element when the select field
   * is focused.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} underlineStyle - Override the inline-styles of the underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.any} value - If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
};
SelectField.defaultProps = {
  autoWidth: false,
  disabled: false,
  fullWidth: false,
  multiple: false
};
SelectField.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = SelectField;

//# sourceMappingURL=SelectField.js.map