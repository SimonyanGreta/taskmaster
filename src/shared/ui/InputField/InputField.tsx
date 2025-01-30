import React from 'react';
import {FieldError} from "react-hook-form";
import styles from './Input.module.scss';

type InputFieldProps = {
  type?: string;
  value: string | number | undefined;
  onChange: (value: string) => void;
  onBlur?: any;
  placeholder?: string;
  title?: string;
  readonly?: boolean;
  required?: boolean;
  disable?: boolean;
  errors?: FieldError;
  errorMessage?: string | undefined;
  style?: any;
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  type = 'text', 
  onChange = () => {}, 
  onBlur, 
  placeholder = '',
  title, 
  readonly = false,
  required,
  disable = false, 
  errors,
  errorMessage,
  style 
}) => {
  return (
    <div className={styles.InputWrapper} style={style}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        {title && <span className={styles.placeholder}>{title}</span>}
        {required && <span style={{color: 'red'}}>*</span>}
      </div>
      <div className={styles.caretWrapper}>
        <input
          type={type}
          className={`${styles.input} ${readonly ? styles.readonly : ''}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          readOnly={readonly}
          required={required}
          placeholder={placeholder}
          disabled={disable}
        />
        {!readonly && <div className={styles.caret} />}
      </div>
      {errors ? (
        <div
          className={[
            styles['text-input__caption'],
            styles['text-input__caption-full'],
          ].join(' ')}
        >
          {errorMessage}
        </div>
      ) : null}
    </div>
  );
};
