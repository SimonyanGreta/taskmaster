import React  from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps {
  label?: string | null;
  disable?: boolean;
  leftLabel?: boolean;
  onChange: (...event: any) => void;
  addClass?: string;
  checked: boolean;
  onClick?: any;
}

export default function Checkbox({
    label = null,
    disable = false,
    leftLabel = false,
    onChange = () => {},
    addClass = '',
    checked = false,
    onClick = () => {},
}: CheckboxProps) {
  return (
    <label
      className={[
        styles['checkbox'],
        disable ? styles['checkbox--disable'] : '',
        leftLabel ? styles['checkbox--left-label'] : '',
        addClass,
      ].join(' ')}
    >
      {label !== null && leftLabel ? (
        <span className={[styles['checkbox__label'], 'p2'].join(' ')}>{label}</span>
      ) : null}
      <input
        type="checkbox"
        className={styles['checkbox__check']}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
        checked={Boolean(checked)}
        onClick={onClick}
      />
      {label !== null && !leftLabel ? (
        <span className={[styles['checkbox__label'], 'p2'].join(' ')}>{label}</span>
      ) : null}
    </label>
  );
}
