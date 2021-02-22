import React, { FC } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  href?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    href,
    disabled,
    size,
    children,
    ...restProps
  } = props;
  // btn,btn-lg
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a href={href} className={classes} {...restProps}>{children}</a>
    )
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>{children}</button>
  )
}

export default Button
