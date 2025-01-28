import {
  FC,
  memo,
  ReactNode,
  ButtonHTMLAttributes,
} from 'react';
import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  disabled?: boolean;
  children?: ReactNode;
  size?: 'small' | 'medium' | 'big';
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (...rest: any) => void;
  variant?: 'primary' | 'ghost' | 'alternate' | 'outline';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  addClass?: string;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    children,
    disabled,
    size = 'medium',
    type = 'button',
    onClick,
    variant = 'primary',
    leftIcon,
    rightIcon,
    addClass = '',
    ...otherProps
  } = props;

  return (
    <button
      className={[
        styles['button'],
        styles[`button--${size}`],
        styles[`button--${variant}`],
        disabled ? styles['button__disable'] : '',
        addClass,
      ].join(' ')}
      onClick={onClick}
      type={type}
      {...otherProps}
    >
      {leftIcon ? (
        <div className={[styles['button__icon'], styles['button__icon--left']].join(' ')}>{leftIcon}</div>
      ) : null}
      {children}
      {rightIcon ? (
        <div className={[styles['button__icon'], styles['button__icon--right']].join(' ')}>{rightIcon}</div>
      ) : null}
    </button>
  );
});
