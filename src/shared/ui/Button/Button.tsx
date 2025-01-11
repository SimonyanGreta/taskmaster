import {
  FC,
  memo,
  ReactNode,
  ButtonHTMLAttributes,
} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  disabled?: boolean;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    children,
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
