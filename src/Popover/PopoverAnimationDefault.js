import transitions from '../styles/transitions';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import propTypes from '../utils/propTypes';
import Paper from '../Paper';

function getStyles(props, context, state) {
  const {targetOrigin} = props;
  const {open} = state;
  const {muiTheme} = context;
  const horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
      transformOrigin: `${horizontal} ${targetOrigin.vertical}`,
      transition: transitions.easeOut('250ms', ['transform', 'opacity']),
      maxHeight: '100%',
    },
    horizontal: {
      maxHeight: '100%',
      overflowY: 'auto',
      transform: open ? 'scaleX(1)' : 'scaleX(0)',
      opacity: open ? 1 : 0,
      transformOrigin: `${horizontal} ${targetOrigin.vertical}`,
      transition: transitions.easeOut('250ms', ['transform', 'opacity']),
    },
    vertical: {
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: `${horizontal} ${targetOrigin.vertical}`,
      transition: transitions.easeOut('500ms', ['transform', 'opacity']),
    },
  };
}

class PopoverAnimationDefault extends Component {
  static propTypes = {
    /**
     * @property {PropTypes.node} children
     */
    children: PropTypes.node,
    /**
     * @property {PropTypes.string} className - The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * @property {PropTypes.bool.isRequired} open
     */
    open: PropTypes.bool.isRequired,
    /**
     * @property {PropTypes.object} style - Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @property {PropTypes.origin} targetOrigin
     */
    targetOrigin: propTypes.origin.isRequired,
    /**
     * @property {PropTypes.zDepth} zDepth
     */
    zDepth: propTypes.zDepth,
  };

  static defaultProps = {
    style: {},
    zDepth: 1,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    open: false,
  };

  componentDidMount() {
    this.setState({open: true}); // eslint-disable-line react/no-did-mount-set-state
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
    });
  }

  render() {
    const {
      className,
      style,
      zDepth,
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    return (
      <Paper
        style={Object.assign(styles.root, style)}
        zDepth={zDepth}
        className={className}
      >
        <div style={prepareStyles(styles.horizontal)}>
          <div style={prepareStyles(styles.vertical)}>
            {this.props.children}
          </div>
        </div>
      </Paper>
    );
  }
}

export default PopoverAnimationDefault;
