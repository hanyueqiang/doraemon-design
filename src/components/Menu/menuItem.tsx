import React from 'react'
import classNames from 'classnames'

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, children } = props;
  const classes = classNames('dorae-item', className)
  return (
    <li className={classes}>{children}</li>
  )
}

export default MenuItem
