'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StepConnector = require('./StepConnector');

var _StepConnector2 = _interopRequireDefault(_StepConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getStyles = function getStyles(props) {
  var orientation = props.orientation;

  return {
    root: {
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      alignContent: 'center',
      alignItems: orientation === 'horizontal' ? 'center' : 'stretch',
      justifyContent: 'space-between'
    }
  };
};

/**
 * 
 * @description 
 * 
 * A stepper is an interface for users to show numbered steps or for navigation. It just provides views, not handling logic (when the step is active, or when the step is completed, or how to move to the next step).
 * Also see http://www.material-ui.com/#/components/stepper
 * 
 * The <Stepper> can be controlled by passing the current step index (zero based) as the activeStep prop. <Stepper> orientation is set using the orientation prop. Below are basic implementations of both the horizontal and vertical stepper.
 * 
 * Note: In the linear examples we're using <StepLabel> to display the icon and heading. But in other types of Steppers (or other situations), you may want to use the <StepButton> component to make your step clickable.
 *
 * @example 
 *
 * // Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * 
 * // Avoid using long step names in horizontal steppers.
 *
 * // Linear steppers require users to complete one step in order to move on to the next.
 *  
 * 
 * import React from 'react';
 * import {
 *   Step,
 *   Stepper,
 *   StepLabel,
 * } from 'material-ui/Stepper';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import FlatButton from 'material-ui/FlatButton';
 *  
 * class HorizontalLinearStepper extends React.Component {
 *   
 *     state = {
 *       finished: false,
 *       stepIndex: 0,
 *     };
 *   
 *     handleNext = () => {
 *       const {stepIndex} = this.state;
 *       this.setState({
 *         stepIndex: stepIndex + 1,
 *         finished: stepIndex >= 2,
 *       });
 *     };
 *   
 *     handlePrev = () => {
 *       const {stepIndex} = this.state;
 *       if (stepIndex > 0) {
 *         this.setState({stepIndex: stepIndex - 1});
 *       }
 *     };
 *   
 *     getStepContent(stepIndex) {
 *       switch (stepIndex) {
 *         case 0:
 *           return 'Select campaign settings...';
 *         case 1:
 *           return 'What is an ad group anyways?';
 *         case 2:
 *           return 'This is the bit I really care about!';
 *         default:
 *           return 'You\'re a long way from home sonny jim!';
 *       }
 *     }
 *   
 *     render() {
 *       const {finished, stepIndex} = this.state;
 *       const contentStyle = {margin: '0 16px'};
 *   
 *       return (
 *         <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
 *           <Stepper activeStep={stepIndex}>
 *             <Step>
 *               <StepLabel>Select campaign settings</StepLabel>
 *             </Step>
 *             <Step>
 *               <StepLabel>Create an ad group</StepLabel>
 *             </Step>
 *             <Step>
 *               <StepLabel>Create an ad</StepLabel>
 *             </Step>
 *           </Stepper>
 *           <div style={contentStyle}>
 *             {finished ? (
 *               <p>
 *                 <a
 *                   href="#"
 *                   onClick={(event) => {
 *                     event.preventDefault();
 *                     this.setState({stepIndex: 0, finished: false});
 *                   }}
 *                 >
 *                   Click here
 *                 </a> to reset the example.
 *               </p>
 *             ) : (
 *               <div>
 *                 <p>{this.getStepContent(stepIndex)}</p>
 *                 <div style={{marginTop: 12}}>
 *                   <FlatButton
 *                     label="Back"
 *                     disabled={stepIndex === 0}
 *                     onClick={this.handlePrev}
 *                     style={{marginRight: 12}}
 *                   />
 *                   <RaisedButton
 *                     label={stepIndex === 2 ? 'Finish' : 'Next'}
 *                     primary={true}
 *                     onClick={this.handleNext}
 *                   />
 *                 </div>
 *               </div>
 *             )}
 *           </div>
 *         </div>
 *       );
 *     }
 *   }
 *   
 *   export default HorizontalLinearStepper;
 * 
 * @example 
 * 
 * // Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * // To use the vertical stepper with the contained content as seen in spec examples,
 * // you must use the `<StepContent>` component inside the `<Step>`.
 *
 * // <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 * 
 * import React from 'react';
 * import {
 *   Step,
 *   Stepper,
 *   StepLabel,
 *   StepContent,
 * } from 'material-ui/Stepper';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 *  
 * class VerticalLinearStepper extends React.Component {
 *   
 *     state = {
 *       finished: false,
 *       stepIndex: 0,
 *     };
 *   
 *     handleNext = () => {
 *       const {stepIndex} = this.state;
 *       this.setState({
 *         stepIndex: stepIndex + 1,
 *         finished: stepIndex >= 2,
 *       });
 *     };
 *   
 *     handlePrev = () => {
 *       const {stepIndex} = this.state;
 *       if (stepIndex > 0) {
 *         this.setState({stepIndex: stepIndex - 1});
 *       }
 *     };
 *   
 *     renderStepActions(step) {
 *       const {stepIndex} = this.state;
 *   
 *       return (
 *         <div style={{margin: '12px 0'}}>
 *           <RaisedButton
 *             label={stepIndex === 2 ? 'Finish' : 'Next'}
 *             disableTouchRipple={true}
 *             disableFocusRipple={true}
 *             primary={true}
 *             onClick={this.handleNext}
 *             style={{marginRight: 12}}
 *           />
 *           {step > 0 && (
 *             <FlatButton
 *               label="Back"
 *               disabled={stepIndex === 0}
 *               disableTouchRipple={true}
 *               disableFocusRipple={true}
 *               onClick={this.handlePrev}
 *             />
 *           )}
 *         </div>
 *       );
 *     }
 *   
 *     render() {
 *       const {finished, stepIndex} = this.state;
 *   
 *       return (
 *         <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
 *           <Stepper activeStep={stepIndex} orientation="vertical">
 *             <Step>
 *               <StepLabel>Select campaign settings</StepLabel>
 *               <StepContent>
 *                 <p>
 *                   For each ad campaign that you create, you can control how much
 *                   you're willing to spend on clicks and conversions, which networks
 *                   and geographical locations you want your ads to show on, and more.
 *                 </p>
 *                 {this.renderStepActions(0)}
 *               </StepContent>
 *             </Step>
 *             <Step>
 *               <StepLabel>Create an ad group</StepLabel>
 *               <StepContent>
 *                 <p>An ad group contains one or more ads which target a shared set of keywords.</p>
 *                 {this.renderStepActions(1)}
 *               </StepContent>
 *             </Step>
 *             <Step>
 *               <StepLabel>Create an ad</StepLabel>
 *               <StepContent>
 *                 <p>
 *                   Try out different ad text to see what brings in the most customers,
 *                   and learn how to enhance your ads using features like ad extensions.
 *                   If you run into any problems with your ads, find out how to tell if
 *                   they're running and how to resolve approval issues.
 *                 </p>
 *                 {this.renderStepActions(2)}
 *               </StepContent>
 *             </Step>
 *           </Stepper>
 *           {finished && (
 *             <p style={{margin: '20px 0', textAlign: 'center'}}>
 *               <a
 *                 href="#"
 *                 onClick={(event) => {
 *                   event.preventDefault();
 *                   this.setState({stepIndex: 0, finished: false});
 *                 }}
 *               >
 *                 Click here
 *               </a> to reset the example.
 *             </p>
 *           )}
 *         </div>
 *       );
 *     }
 *   }
 *   
 *   export default VerticalLinearStepper;
 * 
 * 
 * @example 
 * 
 * // Non-linear steppers allow users to enter a multi-step flow at any point.
 *
 * // This example is similar to the regular horizontal stepper, except steps are no longer automatically set to disabled={true} based on the activeStep prop.
 *
 * // We've used the <StepButton> here to demonstrate clickable step labels.
 * 
 * import React from 'react';
 * import {
 *   Step,
 *   Stepper,
 *   StepButton,
 * } from 'material-ui/Stepper';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 * class HorizontalNonLinearStepper extends React.Component {
 * 
 *   state = {
 *     stepIndex: 0,
 *   };
 * 
 *   handleNext = () => {
 *     const {stepIndex} = this.state;
 *     if (stepIndex < 2) {
 *       this.setState({stepIndex: stepIndex + 1});
 *     }
 *   };
 * 
 *   handlePrev = () => {
 *     const {stepIndex} = this.state;
 *     if (stepIndex > 0) {
 *       this.setState({stepIndex: stepIndex - 1});
 *     }
 *   };
 * 
 *   getStepContent(stepIndex) {
 *     switch (stepIndex) {
 *       case 0:
 *         return 'Select campaign settings...';
 *       case 1:
 *         return 'What is an ad group anyways?';
 *       case 2:
 *         return 'This is the bit I really care about!';
 *       default:
 *         return 'You\'re a long way from home sonny jim!';
 *     }
 *   }
 * 
 *   render() {
 *     const {stepIndex} = this.state;
 *     const contentStyle = {margin: '0 16px'};
 * 
 *     return (
 *       <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
 *         <Stepper linear={false} activeStep={stepIndex}>
 *           <Step>
 *             <StepButton onClick={() => this.setState({stepIndex: 0})}>
 *               Select campaign settings
 *             </StepButton>
 *           </Step>
 *           <Step>
 *             <StepButton onClick={() => this.setState({stepIndex: 1})}>
 *               Create an ad group
 *             </StepButton>
 *           </Step>
 *           <Step>
 *             <StepButton onClick={() => this.setState({stepIndex: 2})}>
 *               Create an ad
 *             </StepButton>
 *           </Step>
 *         </Stepper>
 *         <div style={contentStyle}>
 *           <p>{this.getStepContent(stepIndex)}</p>
 *           <div style={{marginTop: 12}}>
 *             <FlatButton
 *               label="Back"
 *               disabled={stepIndex === 0}
 *               onClick={this.handlePrev}
 *               style={{marginRight: 12}}
 *             />
 *             <RaisedButton
 *               label="Next"
 *               disabled={stepIndex === 2}
 *               primary={true}
 *               onClick={this.handleNext}
 *             />
 *           </div>
 *         </div>
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default HorizontalNonLinearStepper;
 * 
 * 
 * @example 
 * 
 * // A basic vertical non-linear implementation
 * 
 * import React from 'react';
 * import {
 *   Step,
 *   Stepper,
 *   StepButton,
 *   StepContent,
 * } from 'material-ui/Stepper';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 * class VerticalNonLinear extends React.Component {
 * 
 *   state = {
 *     stepIndex: 0,
 *   };
 * 
 *   handleNext = () => {
 *     const {stepIndex} = this.state;
 *     if (stepIndex < 2) {
 *       this.setState({stepIndex: stepIndex + 1});
 *     }
 *   };
 * 
 *   handlePrev = () => {
 *     const {stepIndex} = this.state;
 *     if (stepIndex > 0) {
 *       this.setState({stepIndex: stepIndex - 1});
 *     }
 *   };
 * 
 *   renderStepActions(step) {
 *     return (
 *       <div style={{margin: '12px 0'}}>
 *         <RaisedButton
 *           label="Next"
 *           disableTouchRipple={true}
 *           disableFocusRipple={true}
 *           primary={true}
 *           onClick={this.handleNext}
 *           style={{marginRight: 12}}
 *         />
 *         {step > 0 && (
 *           <FlatButton
 *             label="Back"
 *             disableTouchRipple={true}
 *             disableFocusRipple={true}
 *             onClick={this.handlePrev}
 *           />
 *         )}
 *       </div>
 *     );
 *   }
 * 
 *   render() {
 *     const {stepIndex} = this.state;
 * 
 *     return (
 *       <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
 *         <Stepper
 *           activeStep={stepIndex}
 *           linear={false}
 *           orientation="vertical"
 *         >
 *           <Step>
 *             <StepButton onClick={() => this.setState({stepIndex: 0})}>
 *               Select campaign settings
 *             </StepButton>
 *             <StepContent>
 *               <p>
 *                 For each ad campaign that you create, you can control how much
 *                 you're willing to spend on clicks and conversions, which networks
 *                 and geographical locations you want your ads to show on, and more.
 *               </p>
 *               {this.renderStepActions(0)}
 *             </StepContent>
 *           </Step>
 *           <Step>
 *             <StepButton onClick={() => this.setState({stepIndex: 1})}>
 *               Create an ad group
 *             </StepButton>
 *             <StepContent>
 *               <p>An ad group contains one or more ads which target a shared set of keywords.</p>
 *               {this.renderStepActions(1)}
 *             </StepContent>
 *           </Step>
 *           <Step>
 *             <StepButton onClick={() => this.setState({stepIndex: 2})}>
 *               Create an ad
 *             </StepButton>
 *             <StepContent>
 *               <p>
 *                 Try out different ad text to see what brings in the most customers,
 *                 and learn how to enhance your ads using features like ad extensions.
 *                 If you run into any problems with your ads, find out how to tell if
 *                 they're running and how to resolve approval issues.
 *               </p>
 *               {this.renderStepActions(2)}
 *             </StepContent>
 *           </Step>
 *         </Stepper>
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default VerticalNonLinear;
 * 
 * @example 
 * // Advanced Usage:
 *
 * //  The <Stepper> can also be controlled by interfacing directly with the <Step> components placed inside <Stepper>. These individual props are also compatible with the activeStep prop, and will take precedence if found on the component.
 * 
 * //  You can also place completely custom components inside <Step> if required and they will be passed the same props as the other <Step> children.
 * 
 * //  These features allows for all sorts of usage scenarios -- the world is your oyster.
 * 
 * 
 * // Granular control:
 * 
 * //  This is similar to the horizontal non-linear example, except the <Step> components are being controlled manually via individual props.
 *
 * //  An enhancement made possible by this functionality (shown below), is to permanently mark steps as complete once the user has satisfied the application's required conditions (in this case, once it has visited the step).
 * 
 * import React from 'react';
 * import {
 *   Step,
 *   Stepper,
 *   StepButton,
 * } from 'material-ui/Stepper';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 * const getStyles = () => {
 *   return {
 *     root: {
 *       width: '100%',
 *       maxWidth: 700,
 *       margin: 'auto',
 *     },
 *     content: {
 *       margin: '0 16px',
 *     },
 *     actions: {
 *       marginTop: 12,
 *     },
 *     backButton: {
 *       marginRight: 12,
 *     },
 *   };
 * };
 * 
 * class GranularControlStepper extends React.Component {
 * 
 *   state = {
 *     stepIndex: null,
 *     visited: [],
 *   };
 * 
 *   componentWillMount() {
 *     const {stepIndex, visited} = this.state;
 *     this.setState({visited: visited.concat(stepIndex)});
 *   }
 * 
 *   componentWillUpdate(nextProps, nextState) {
 *     const {stepIndex, visited} = nextState;
 *     if (visited.indexOf(stepIndex) === -1) {
 *       this.setState({visited: visited.concat(stepIndex)});
 *     }
 *   }
 * 
 *   handleNext = () => {
 *     const {stepIndex} = this.state;
 *     if (stepIndex < 2) {
 *       this.setState({stepIndex: stepIndex + 1});
 *     }
 *   };
 * 
 *   handlePrev = () => {
 *     const {stepIndex} = this.state;
 *     if (stepIndex > 0) {
 *       this.setState({stepIndex: stepIndex - 1});
 *     }
 *   };
 * 
 *   getStepContent(stepIndex) {
 *     switch (stepIndex) {
 *       case 0:
 *         return 'Select campaign settings...';
 *       case 1:
 *         return 'What is an ad group anyways?';
 *       case 2:
 *         return 'This is the bit I really care about!';
 *       default:
 *         return 'Click a step to get started.';
 *     }
 *   }
 * 
 *   render() {
 *     const {stepIndex, visited} = this.state;
 *     const styles = getStyles();
 * 
 *     return (
 *       <div style={styles.root}>
 *         <p>
 *           <a
 *             href="#"
 *             onClick={(event) => {
 *               event.preventDefault();
 *               this.setState({stepIndex: null, visited: []});
 *             }}
 *           >
 *             Click here
 *           </a> to reset the example.
 *         </p>
 *         <Stepper linear={false}>
 *           <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
 *             <StepButton onClick={() => this.setState({stepIndex: 0})}>
 *               Select campaign settings
 *             </StepButton>
 *           </Step>
 *           <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
 *             <StepButton onClick={() => this.setState({stepIndex: 1})}>
 *               Create an ad group
 *             </StepButton>
 *           </Step>
 *           <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
 *             <StepButton onClick={() => this.setState({stepIndex: 2})}>
 *               Create an ad
 *             </StepButton>
 *           </Step>
 *         </Stepper>
 *         <div style={styles.content}>
 *           <p>{this.getStepContent(stepIndex)}</p>
 *           {stepIndex !== null && (class GranularControlStepper extends React.Component {
 * 
 *   state = {
 *     stepIndex: null,
 *     visited: [],
 *   };
 * 
 *   componentWillMount() {
 *     const {stepIndex, visited} = this.state;
 *     this.setState({visited: visited.concat(stepIndex)});
 *   }
 * 
 *   componentWillUpdate(nextProps, nextState) {
 *     const {stepIndex, visited} = nextState;
 *     if (visited.indexOf(stepIndex) === -1) {
 *       this.setState({visited: visited.concat(stepIndex)});
 *     }
 *   }
 * 
 *   handleNext = () => {
 *     const {stepIndex} = this.state;
 *     if (stepIndex < 2) {
 *       this.setState({stepIndex: stepIndex + 1});
 *     }
 *   };
 * 
 *   handlePrev = () => {
 *     const {stepIndex} = this.state;
 *     if (stepIndex > 0) {
 *       this.setState({stepIndex: stepIndex - 1});
 *     }
 *   };
 * 
 *   getStepContent(stepIndex) {
 *     switch (stepIndex) {
 *       case 0:
 *         return 'Select campaign settings...';
 *       case 1:
 *         return 'What is an ad group anyways?';
 *       case 2:
 *         return 'This is the bit I really care about!';
 *       default:
 *         return 'Click a step to get started.';
 *     }
 *   }
 * 
 *   render() {
 *     const {stepIndex, visited} = this.state;
 *     const styles = getStyles();
 * 
 *     return (
 *       <div style={styles.root}>
 *         <p>
 *           <a
 *             href="#"
 *             onClick={(event) => {
 *               event.preventDefault();
 *               this.setState({stepIndex: null, visited: []});
 *             }}
 *           >
 *             Click here
 *           </a> to reset the example.
 *         </p>
 *         <Stepper linear={false}>
 *           <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
 *             <StepButton onClick={() => this.setState({stepIndex: 0})}>
 *               Select campaign settings
 *             </StepButton>
 *           </Step>
 *           <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
 *             <StepButton onClick={() => this.setState({stepIndex: 1})}>
 *               Create an ad group
 *             </StepButton>
 *           </Step>
 *           <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
 *             <StepButton onClick={() => this.setState({stepIndex: 2})}>
 *               Create an ad
 *             </StepButton>
 *           </Step>
 *         </Stepper>
 *         <div style={styles.content}>
 *           <p>{this.getStepContent(stepIndex)}</p>
 *           {stepIndex !== null && (
 *             <div style={styles.actions}>
 *               <FlatButton
 *                 label="Back"
 *                 disabled={stepIndex === 0}
 *                 onClick={this.handlePrev}
 *                 style={styles.backButton}
 *               />
 *               <RaisedButton
 *                 label="Next"
 *                 primary={true}
 *                 onClick={this.handleNext}
 *               />
 *             </div>
 *           )}
 *         </div>
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default GranularControlStepper;
 *             <div style={styles.actions}>
 *               <FlatButton
 *                 label="Back"
 *                 disabled={stepIndex === 0}
 *                 onClick={this.handlePrev}
 *                 style={styles.backButton}
 *               />
 *               <RaisedButton
 *                 label="Next"
 *                 primary={true}
 *                 onClick={this.handleNext}
 *               />
 *             </div>
 *           )}
 *         </div>
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default GranularControlStepper;
 * 
 * 
 * @example 
 * 
 * // Custom icons can be used to create different visual states.
 * 
 * 
 * import React from 'react';
 * import {
 *   Step,
 *   Stepper,
 *   StepLabel,
 * } from 'material-ui/Stepper';
 * import WarningIcon from 'material-ui/svg-icons/alert/warning';
 * import {red500} from 'material-ui/styles/colors';
 * 
 * 
 * class CustomIcon extends React.Component {
 *  
 *    state = {
 *      stepIndex: 0,
 *    };
 *  
 *    handleNext = () => {
 *      const {stepIndex} = this.state;
 *      if (stepIndex < 2) {
 *        this.setState({stepIndex: stepIndex + 1});
 *      }
 *    };
 *  
 *    handlePrev = () => {
 *      const {stepIndex} = this.state;
 *      if (stepIndex > 0) {
 *        this.setState({stepIndex: stepIndex - 1});
 *      }
 *    };
 *  
 *    getStepContent(stepIndex) {
 *      switch (stepIndex) {
 *        case 0:
 *          return 'Select campaign settings...';
 *        case 1:
 *          return 'What is an ad group anyways?';
 *        case 2:
 *          return 'This is the bit I really care about!';
 *        default:
 *          return 'You\'re a long way from home sonny jim!';
 *      }
 *    }
 *  
 *    render() {
 *      return (
 *        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
 *          <Stepper linear={false}>
 *            <Step completed={false}>
 *              <StepLabel>
 *                Select campaign settings
 *              </StepLabel>
 *            </Step>
 *            <Step completed={false}>
 *              <StepLabel
 *                icon={<WarningIcon color={red500} />}
 *                style={{color: red500}}
 *              >
 *                Create an ad group
 *              </StepLabel>
 *            </Step>
 *            <Step completed={false}>
 *              <StepLabel>
 *                Create an ad
 *              </StepLabel>
 *            </Step>
 *          </Stepper>
 *        </div>
 *      );
 *    }
 * }
 *  
 *  export default CustomIcon;
 * 
 * 
 * 
 * @example 
 * // Horizontal step transition example:
 * 
 * //  A contrived example using a transition between steps
 * 
 *
 * import React from 'react';
 * import {
 *  Step,
 *  Stepper,
 *  StepLabel,
 * } from 'material-ui/Stepper';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import FlatButton from 'material-ui/FlatButton';
 * import ExpandTransition from 'material-ui/internal/ExpandTransition';
 * import TextField from 'material-ui/TextField';
 *
 *
 * class HorizontalTransition extends React.Component {
 *  
 *    state = {
 *      loading: false,
 *      finished: false,
 *      stepIndex: 0,
 *    };
 *  
 *    dummyAsync = (cb) => {
 *      this.setState({loading: true}, () => {
 *        this.asyncTimer = setTimeout(cb, 500);
 *      });
 *    };
 *  
 *    handleNext = () => {
 *      const {stepIndex} = this.state;
 *      if (!this.state.loading) {
 *        this.dummyAsync(() => this.setState({
 *          loading: false,
 *          stepIndex: stepIndex + 1,
 *          finished: stepIndex >= 2,
 *        }));
 *      }
 *    };
 *  
 *    handlePrev = () => {
 *      const {stepIndex} = this.state;
 *      if (!this.state.loading) {
 *        this.dummyAsync(() => this.setState({
 *          loading: false,
 *          stepIndex: stepIndex - 1,
 *        }));
 *      }
 *    };
 *  
 *    getStepContent(stepIndex) {
 *      switch (stepIndex) {
 *        case 0:
 *          return (
 *            <p>
 *              Select campaign settings. Campaign settings can include your budget, network, bidding
 *              options and adjustments, location targeting, campaign end date, and other settings that
 *              affect an entire campaign.
 *            </p>
 *          );
 *        case 1:
 *          return (
 *            <div>
 *              <TextField style={{marginTop: 0}} floatingLabelText="Ad group name" />
 *              <p>
 *                Ad group status is different than the statuses for campaigns, ads, and keywords, though the
 *                statuses can affect each other. Ad groups are contained within a campaign, and each campaign can
 *                have one or more ad groups. Within each ad group are ads, keywords, and bids.
 *              </p>
 *              <p>Something something whatever cool</p>
 *            </div>
 *          );
 *        case 2:
 *          return (
 *            <p>
 *              Try out different ad text to see what brings in the most customers, and learn how to
 *              enhance your ads using features like ad extensions. If you run into any problems with your
 *              ads, find out how to tell if they're running and how to resolve approval issues.
 *            </p>
 *          );
 *        default:
 *          return 'You\'re a long way from home sonny jim!';
 *      }
 *    }
 *  
 *    renderContent() {
 *      const {finished, stepIndex} = this.state;
 *      const contentStyle = {margin: '0 16px', overflow: 'hidden'};
 *  
 *      if (finished) {
 *        return (
 *          <div style={contentStyle}>
 *            <p>
 *              <a
 *                href="#"
 *                onClick={(event) => {
 *                  event.preventDefault();
 *                  this.setState({stepIndex: 0, finished: false});
 *                }}
 *              >
 *                Click here
 *              </a> to reset the example.
 *            </p>
 *          </div>
 *        );
 *      }
 *  
 *      return (
 *        <div style={contentStyle}>
 *          <div>{this.getStepContent(stepIndex)}</div>
 *          <div style={{marginTop: 24, marginBottom: 12}}>
 *            <FlatButton
 *              label="Back"
 *              disabled={stepIndex === 0}
 *              onClick={this.handlePrev}
 *              style={{marginRight: 12}}
 *            />
 *            <RaisedButton
 *              label={stepIndex === 2 ? 'Finish' : 'Next'}
 *              primary={true}
 *              onClick={this.handleNext}
 *            />
 *          </div>
 *        </div>
 *      );
 *    }
 *  
 *    render() {
 *      const {loading, stepIndex} = this.state;
 *  
 *      return (
 *        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
 *          <Stepper activeStep={stepIndex}>
 *            <Step>
 *              <StepLabel>Select campaign settings</StepLabel>
 *            </Step>
 *            <Step>
 *              <StepLabel>Create an ad group</StepLabel>
 *            </Step>
 *            <Step>
 *              <StepLabel>Create an ad</StepLabel>
 *            </Step>
 *          </Stepper>
 *          <ExpandTransition loading={loading} open={true}>
 *            {this.renderContent()}
 *          </ExpandTransition>
 *        </div>
 *      );
 *    }
 * }
 *  
 * export default HorizontalTransition;
 * 
 * 
 * @example 
 * // Custom step connector
 *
 * //   It is possible to specify your own step connector by passing an element to the connector prop. If you want to remove the connector, pass null to the connector prop.
 * 
 * import React from 'react';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import {
 *   Step,
 *   Stepper,
 *   StepLabel,
 * } from 'material-ui/Stepper';
 * import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
 * 
 * 
 * class CustomStepConnector extends React.Component {
 *   constructor(props) {
 *     super(props);
 * 
 *     this.handleNext = this.handleNext.bind(this);
 *     this.handlePrev = this.handlePrev.bind(this);
 *   }
 * 
 *   state = {
 *     stepIndex: 0,
 *   };
 * 
 *   getStepContent(stepIndex) {
 *     switch (stepIndex) {
 *       case 0:
 *         return (
 *           <p>
 *             {'For each ad campaign that you create, you can control how much you\'re willing to ' +
 *             'spend on clicks and conversions, which networks and geographical locations you want ' +
 *             'your ads to show on, and more.'}
 *           </p>
 *         );
 * 
 *       case 1:
 *         return (
 *           <p>
 *             {'An ad group contains one or more ads which target a shared set of keywords.'}
 *           </p>
 *         );
 * 
 *       case 2:
 *         return (
 *           <p>
 *             {'Try out different ad text to see what brings in the most customers, and learn ' +
 *             'how to enhance your ads using features like ad extensions. If you run into any ' +
 *             'problems with your ads, find out how to tell if they\'re running and how to ' +
 *             'resolve approval issues.'}
 *           </p>
 *         );
 *     }
 *   }
 * 
 *   handleNext() {
 *     const {stepIndex} = this.state;
 * 
 *     if (stepIndex < 2) {
 *       this.setState({stepIndex: stepIndex + 1});
 *     }
 *   }
 * 
 *   handlePrev() {
 *     const {stepIndex} = this.state;
 * 
 *     if (stepIndex > 0) {
 *       this.setState({stepIndex: stepIndex - 1});
 *     }
 *   }
 * 
 *   render() {
 *     const {stepIndex} = this.state;
 * 
 *     return (
 *       <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
 *         <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
 *           <Step>
 *             <StepLabel>Select campaign settings</StepLabel>
 *           </Step>
 * 
 *           <Step>
 *             <StepLabel>Create an ad group</StepLabel>
 *           </Step>
 * 
 *           <Step>
 *             <StepLabel>Create an ad</StepLabel>
 *           </Step>
 *         </Stepper>
 * It is possible to specify your own step connector by passing an element to the connector prop. If you want to remove the connector, pass null to the connector prop.
 *         {this.getStepContent(stepIndex)}
 * 
 *         <div style={{marginTop: 24, marginBottom: 12}}>
 *           <FlatButton
 *             label="Back"
 *             disabled={stepIndex === 0}
 *             onClick={this.handlePrev}
 *             style={{marginRight: 12}}
 *           />
 *           <RaisedButton
 *             label={stepIndex === 2 ? 'Finish' : 'Next'}
 *             primary={true}
 *             onClick={this.handleNext}
 *           />
 *         </div>
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default CustomStepConnector;
 *
 */

var Stepper = function (_Component) {
  _inherits(Stepper, _Component);

  function Stepper() {
    _classCallCheck(this, Stepper);

    return _possibleConstructorReturn(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).apply(this, arguments));
  }

  _createClass(Stepper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var orientation = this.props.orientation;

      return { stepper: { orientation: orientation } };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          activeStep = _props.activeStep,
          children = _props.children,
          connector = _props.connector,
          linear = _props.linear,
          style = _props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      /**
       * One day, we may be able to use real CSS tools
       * For now, we need to create our own "pseudo" elements
       * and nth child selectors, etc
       * That's what some of this garbage is for :)
       */
      var numChildren = _react.Children.count(children);
      var steps = _react.Children.map(children, function (step, index) {
        var controlProps = { index: index };

        if (activeStep === index) {
          controlProps.active = true;
        } else if (linear && activeStep > index) {
          controlProps.completed = true;
        } else if (linear && activeStep < index) {
          controlProps.disabled = true;
        }

        if (index + 1 === numChildren) {
          controlProps.last = true;
        }

        return [index > 0 && connector, _react2.default.cloneElement(step, Object.assign(controlProps, step.props))];
      });

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(Object.assign(styles.root, style)) },
        steps
      );
    }
  }]);

  return Stepper;
}(_react.Component);

Stepper.propTypes = {
  /**
   * @property {PropTypes.number} activeStep - Set the active step (zero based index). This will enable `Step` control helpers.
   */
  activeStep: _propTypes2.default.number,
  /**
   * @property {PropTypes.node} children - Should be two or more `<Step />` components.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.node} connector - A component to be placed between each step.
   */
  connector: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} linear - If set to `true`, the `Stepper` will assist in controlling steps for linear flow
   */
  linear: _propTypes2.default.bool,
  /**
   * @property {'horizontal' | 'vertical'} orientation - The stepper orientation (layout flow direction)
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /**
   * @property {PropTypes.object} style - Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
};
Stepper.defaultProps = {
  connector: _react2.default.createElement(_StepConnector2.default, null),
  orientation: 'horizontal',
  linear: true
};
Stepper.contextTypes = { muiTheme: _propTypes2.default.object.isRequired };
Stepper.childContextTypes = { stepper: _propTypes2.default.object };
exports.default = Stepper;

//# sourceMappingURL=Stepper.js.map