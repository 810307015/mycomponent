import React from 'react';
import PropType from 'prop-types';

class Dragable extends React.Component {

  static propType = {
    children: PropType.func
  }

  startX = 0;
  startY = 0;

  getCommon = (e, isX) => {
    if(isX) {
      return e.clientX || e.changedTouches && e.changedTouches[0].clientX || 0;
    }
    return e.clientY || e.changedTouches && e.changedTouches[0].clientY || 0;
  }

  handleStart = (e) => {
    this.startX = this.getCommon(e, true);
    this.startY = this.getCommon(e, false);
  }

  move = (e) => {
    const deltaX = this.getCommon(e, true) - this.startX;
    const deltaY = this.getCommon(e, false) - this.startY;
    let top = this.drag.style.top;
    let left = this.drag.style.left;
    top = top ? top.slice(0, top.length - 2) : 0;
    left = left ? left.slice(0, left.length - 2) : 0;
    this.drag.style.top = `${Number(top) + deltaY}px`;
    this.drag.style.left = `${Number(left) + deltaX}px`;
  }

  handleEnd = (e) => {
    this.move(e);
  }

  handleMove = (e) => {
    this.move(e);
    this.startX = this.getCommon(e, true);
    this.startY = this.getCommon(e, false);
  }

  render() {
    const { children } = this.props;
    return (
      <div 
        style={{ position: "absolute" }}
        ref={drag => this.drag = drag}
        className="Dragable"
        draggable={true}
        onDrag={this.handleMove}
        onDragStart={this.handleStart}
        onDragEnd={this.handleEnd}
        onTouchMove={this.handleMove}
        onTouchStart={this.handleStart}
        onTouchEnd={this.handleEnd}
      >
        { children && typeof children === 'function' ? children(this.props) : children }
      </div>
    );
  }
}

export default Dragable;