import React, { Component } from 'react';

import './Switch.less';

class Switch extends Component {

  static defaultProps = {
    checked: false, // 默认是否选中
    bgColor: '#323747', // 背景色
    color: '#404557', // 开关的颜色
    activeColor: '#0070FB', // 开关激活的时候的颜色
  };

  state = {
    checked: false
  };

  toggleCheck = () => {
    const { onChange } = this.props;
    if(onChange) {
      onChange && onChange(this.state.checked);
    } else {
      this.setState({
        checked: !this.state.checked
      });
    }
  };

  componentDidMount() {
    const { checked } = this.props;
    this.setState({
      checked
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked
      });
    }
  }

  render() {
    const { checked } = this.state;
    const { bgColor, color, activeColor } = this.props;
    return (
      <div className="Switch" onClick={this.toggleCheck}>
        <div className="switch-box" style={{ background: bgColor }}>
          <div className={`switch-point ${checked ? 'on' : 'off'}`} style={{ background: `${checked ? activeColor : color}` }} />
        </div>
      </div>
    );
  }
}

export default Switch;