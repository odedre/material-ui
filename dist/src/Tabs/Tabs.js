'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _TabTemplate = require('./TabTemplate');

var _TabTemplate2 = _interopRequireDefault(_TabTemplate);

var _InkBar = require('./InkBar');

var _InkBar2 = _interopRequireDefault(_InkBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context) {
  var tabs = context.muiTheme.tabs;


  return {
    tabItemContainer: {
      width: '100%',
      backgroundColor: tabs.backgroundColor,
      whiteSpace: 'nowrap',
      display: 'flex'
    }
  };
}

/**
* @description 
* 
* Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets.
*
* Tabs can operate in two different modes: controlled and uncontrolled.
*
* The uncontrolled mode takes over automatically if no value prop is passed to your Tabs and Tab components.
* If you want controllable tabs, passing a value to both the Tabs and Tab elements will let you programmatically adjust which one is selected.
* Also see http://www.material-ui.com/#/components/tabs
* 
* @example 
* 
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
* import Slider from 'material-ui/Slider';
*
* const styles = {
*   headline: {
*     fontSize: 24,
*     paddingTop: 16,
*     marginBottom: 12,
*     fontWeight: 400,
*   },
* };
*
* function handleActive(tab) {
*   alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
* }
*
* const TabsExampleSimple = () => (
*   <Tabs>
*     <Tab label="Item One" >
*      <div>
*         <h2 style={styles.headline}>Tab One</h2>
*         <p>
*           This is an example tab.
*         </p>
*         <p>
*           You can put any sort of HTML or react component in here. It even keeps the component state!
*         </p>
*         <Slider name="slider0" defaultValue={0.5} />
*       </div>
*     </Tab>
*     <Tab label="Item Two" >
*       <div>
*         <h2 style={styles.headline}>Tab Two</h2>
*         <p>
*           This is another example tab.
*         </p>
*       </div>
*     </Tab>
*     <Tab
*       label="onActive"
*       data-route="/home"
*       onActive={handleActive}
*     >
*       <div>
*         <h2 style={styles.headline}>Tab Three</h2>
*         <p>
*           This is a third example tab.
*         </p>
*       </div>
*     </Tab>
*   </Tabs>
* );
*
* export default TabsExampleSimple;
* 
* 
* @example 
*
*
* // An example of controlled tabs. The selected tab is handled through state and callbacks in the parent (example) component.
*
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
*
* const styles = {
*  headline: {
*    fontSize: 24,
*    paddingTop: 16,
*    marginBottom: 12,
*    fontWeight: 400,
*  },
* };
*
* export default class TabsExampleControlled extends React.Component {
*
*  constructor(props) {
*    super(props);
*    this.state = {
*      value: 'a',
*    };
*  }
*
*  handleChange = (value) => {
*    this.setState({
*      value: value,
*    });
*  };
*
*  render() {
*    return (
*      <Tabs
*        value={this.state.value}
*        onChange={this.handleChange}
*      >
*        <Tab label="Tab A" value="a">
*          <div>
*            <h2 style={styles.headline}>Controllable Tab A</h2>
*            <p>
*              Tabs are also controllable if you want to programmatically pass them their values.
*              This allows for more functionality in Tabs such as not
*              having any Tab selected or assigning them different values.
*            </p>
*          </div>
*        </Tab>
*        <Tab label="Tab B" value="b">
*          <div>
*            <h2 style={styles.headline}>Controllable Tab B</h2>
*            <p>
*              This is another example of a controllable tab. Remember, if you
*              use controllable Tabs, you need to give all of your tabs values or else
*              you wont be able to select them.
*            </p>
*          </div>
*        </Tab>
*      </Tabs>
*    );
*  }
* }
* 
* 
* @example 
*
* This example integrates the react-swipeable-views component with Tabs, animating the Tab transition, and allowing tabs to be swiped on touch devices.
*
* 
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
* // From https://github.com/oliviertassinari/react-swipeable-views
* import SwipeableViews from 'react-swipeable-views';
*
* const styles = {
*  headline: {
*    fontSize: 24,
*    paddingTop: 16,
*    marginBottom: 12,
*    fontWeight: 400,
*  },
*  slide: {
*    padding: 10,
*  },
* };
*
* export default class TabsExampleSwipeable extends React.Component {
*
*  constructor(props) {
*    super(props);
*    this.state = {
*      slideIndex: 0,
*    };
*  }
*
*  handleChange = (value) => {
*    this.setState({
*      slideIndex: value,
*    });
*  };
*
*  render() {
*    return (
*      <div>
*        <Tabs
*          onChange={this.handleChange}
*          value={this.state.slideIndex}
*        >
*          <Tab label="Tab One" value={0} />
*          <Tab label="Tab Two" value={1} />
*          <Tab label="Tab Three" value={2} />
*        </Tabs>
*        <SwipeableViews
*          index={this.state.slideIndex}
*          onChangeIndex={this.handleChange}
*        >
*          <div>
*            <h2 style={styles.headline}>Tabs with slide effect</h2>
*            Swipe to see the next slide.<br />
*          </div>
*          <div style={styles.slide}>
*            slide n°2
*          </div>
*          <div style={styles.slide}>
*            slide n°3
*          </div>
*        </SwipeableViews>
*      </div>
*    );
*  }
* }
* 
* @example 
* 
* An example of tabs with icon.
*
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
* import FontIcon from 'material-ui/FontIcon';
* import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
*
* const TabsExampleIcon = () => (
*   <Tabs>
*     <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
*     <Tab icon={<ActionFlightTakeoff />} />
*     <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
*   </Tabs>
* );
*
* export default TabsExampleIcon;
* 
* @example 
* 
* Icon and text example
*
* import React from 'react';
* import {Tabs, Tab} from 'material-ui/Tabs';
* import FontIcon from 'material-ui/FontIcon';
* import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
*
* const TabsExampleIconText = () => (
*   <Tabs>
*    <Tab
*      icon={<FontIcon className="material-icons">phone</FontIcon>}
*      label="RECENTS"
*    />
*    <Tab
*      icon={<FontIcon className="material-icons">favorite</FontIcon>}
*      label="FAVORITES"
*    />
*    <Tab
*      icon={<MapsPersonPin />}
*      label="NEARBY"
*    />
*  </Tabs>
* );
*
* export default TabsExampleIconText;
*
*/

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = { selectedIndex: 0 }, _this.handleTabTouchTap = function (value, event, tab) {
      var valueLink = _this.getValueLink(_this.props);
      var index = tab.props.index;

      if (valueLink.value && valueLink.value !== value || _this.state.selectedIndex !== index) {
        valueLink.requestChange(value, event, tab);
      }

      _this.setState({ selectedIndex: index });

      if (tab.props.onActive) {
        tab.props.onActive(tab);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var valueLink = this.getValueLink(this.props);
      var initialIndex = this.props.initialSelectedIndex;

      this.setState({
        selectedIndex: valueLink.value !== undefined ? this.getSelectedIndex(this.props) : initialIndex < this.getTabCount() ? initialIndex : 0
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps, nextContext) {
      var valueLink = this.getValueLink(newProps);
      var newState = {
        muiTheme: nextContext.muiTheme || this.context.muiTheme
      };

      if (valueLink.value !== undefined) {
        newState.selectedIndex = this.getSelectedIndex(newProps);
      }

      this.setState(newState);
    }
  }, {
    key: 'getTabs',
    value: function getTabs() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var tabs = [];

      _react.Children.forEach(props.children, function (tab) {
        if ((0, _react.isValidElement)(tab)) {
          tabs.push(tab);
        }
      });

      return tabs;
    }
  }, {
    key: 'getTabCount',
    value: function getTabCount() {
      return this.getTabs().length;
    }

    // Do not use outside of this component, it will be removed once valueLink is deprecated

  }, {
    key: 'getValueLink',
    value: function getValueLink(props) {
      return props.valueLink || {
        value: props.value,
        requestChange: props.onChange
      };
    }
  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex(props) {
      var valueLink = this.getValueLink(props);
      var selectedIndex = -1;

      this.getTabs(props).forEach(function (tab, index) {
        if (valueLink.value === tab.props.value) {
          selectedIndex = index;
        }
      });

      return selectedIndex;
    }
  }, {
    key: 'getSelected',
    value: function getSelected(tab, index) {
      var valueLink = this.getValueLink(this.props);
      return valueLink.value ? valueLink.value === tab.props.value : this.state.selectedIndex === index;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          contentContainerClassName = _props.contentContainerClassName,
          contentContainerStyle = _props.contentContainerStyle,
          initialSelectedIndex = _props.initialSelectedIndex,
          inkBarStyle = _props.inkBarStyle,
          onChange = _props.onChange,
          style = _props.style,
          tabItemContainerStyle = _props.tabItemContainerStyle,
          tabTemplate = _props.tabTemplate,
          tabTemplateStyle = _props.tabTemplateStyle,
          other = _objectWithoutProperties(_props, ['contentContainerClassName', 'contentContainerStyle', 'initialSelectedIndex', 'inkBarStyle', 'onChange', 'style', 'tabItemContainerStyle', 'tabTemplate', 'tabTemplateStyle']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var valueLink = this.getValueLink(this.props);
      var tabValue = valueLink.value;
      var tabContent = [];
      var width = 100 / this.getTabCount();

      var tabs = this.getTabs().map(function (tab, index) {
        (0, _warning2.default)(tab.type && tab.type.muiName === 'Tab', 'Material-UI: Tabs only accepts Tab Components as children.\n        Found ' + (tab.type.muiName || tab.type) + ' as child number ' + (index + 1) + ' of Tabs');

        (0, _warning2.default)(!tabValue || tab.props.value !== undefined, 'Material-UI: Tabs value prop has been passed, but Tab ' + index + '\n        does not have a value prop. Needs value if Tabs is going\n        to be a controlled component.');

        tabContent.push(tab.props.children ? (0, _react.createElement)(tabTemplate || _TabTemplate2.default, {
          key: index,
          selected: _this2.getSelected(tab, index),
          style: tabTemplateStyle
        }, tab.props.children) : undefined);

        return (0, _react.cloneElement)(tab, {
          key: index,
          index: index,
          selected: _this2.getSelected(tab, index),
          width: width + '%',
          onClick: _this2.handleTabTouchTap
        });
      });

      var inkBar = this.state.selectedIndex !== -1 ? _react2.default.createElement(_InkBar2.default, {
        left: width * this.state.selectedIndex + '%',
        width: width + '%',
        style: inkBarStyle
      }) : null;

      var inkBarContainerWidth = tabItemContainerStyle ? tabItemContainerStyle.width : '100%';

      return _react2.default.createElement(
        'div',
        Object.assign({ style: prepareStyles(Object.assign({}, style)) }, other),
        _react2.default.createElement(
          'div',
          { style: prepareStyles(Object.assign(styles.tabItemContainer, tabItemContainerStyle)) },
          tabs
        ),
        _react2.default.createElement(
          'div',
          { style: { width: inkBarContainerWidth } },
          inkBar
        ),
        _react2.default.createElement(
          'div',
          {
            style: prepareStyles(Object.assign({}, contentContainerStyle)),
            className: contentContainerClassName
          },
          tabContent
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  /**
   * @property {PropTypes.node} children - Should be used to pass `Tab` components.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.string} contentContainerClassName - The css class name of the content's container.
   */
  contentContainerClassName: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} contentContainerStyle - Override the inline-styles of the content's container.
   */
  contentContainerStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.number} initialSelectedIndex - Specify initial visible tab index.
   * If `initialSelectedIndex` is set but larger than the total amount of specified tabs,
   * `initialSelectedIndex` will revert back to default.
   * If `initialSelectedIndex` is set to any negative value, no tab will be selected intially.
   */
  initialSelectedIndex: _propTypes2.default.number,
  /**
   * @property {PropTypes.object} inkBarStyle - Override the inline-styles of the InkBar.
   */
  inkBarStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.func} onChange - Called when the selected value change.
   */
  onChange: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} tabItemContainerStyle - Override the inline-styles of the tab-labels container.
   */
  tabItemContainerStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.func} tabTemplate - Override the default tab template used to wrap the content of each tab element.
   */
  tabTemplate: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} tabTemplateStyle - Override the inline-styles of the tab template.
   */
  tabTemplateStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.any} value - Makes Tabs controllable and selects the tab whose value prop matches this prop.
   */
  value: _propTypes2.default.any
};
Tabs.defaultProps = {
  initialSelectedIndex: 0,
  onChange: function onChange() {}
};
Tabs.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = Tabs;

//# sourceMappingURL=Tabs.js.map