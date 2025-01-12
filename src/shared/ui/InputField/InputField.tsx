import React from 'react';
import styles from './Input.module.scss';

type InputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readonly?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder, readonly = false }) => {
  return (
    <div className={styles.InputWrapper}>
      {placeholder && <span className={styles.placeholder}>{placeholder}</span>}
      <div className={styles.caretWrapper}>
        <input
          type="text"
          className={`${styles.input} ${readonly ? styles.readonly : ''}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readonly}
        />
        {!readonly && <div className={styles.caret}></div>}
      </div>
    </div>
  );
};
