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

// type ITextInputProps = {
//   caption?: string;
//   helperPopup?: string;
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
//   rightButtons?: React.ReactNode;
//   addClass?: string;
//   size?: 'medium' | 'big';
//   errors?: FieldError;
//   fullMessage?: boolean;
//   type?: string;
//   checkString?: string;
// };
//
// export default function TextInputField({
//                                          title,
//                                          caption,
//                                          placeholder = '',
//                                          helperPopup,
//                                          required,
//                                          leftIcon,
//                                          rightIcon,
//                                          rightButtons,
//                                          addClass,
//                                          fullMessage = false,
//                                          size = 'medium',
//                                          errors,
//                                          onChange = () => {},
//                                          type = 'text',
//                                          onBlur = () => {},
//                                          checkString,
//                                          value = '',
//                                        }: ITextInputProps) {
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (checkString) {
//       let newString: string = event?.target?.value;
//       let newStringArr = newString.split('');
//       newStringArr.map((item: string) => {
//         if (!checkString.split('').includes(item.toLowerCase())) {
//           newString = newString.replace(item, '');
//         }
//       });
//       event.target.value = newString;
//     }
//     onChange(event?.target?.value);
//   };
//
//   return (
//     <div
//       className={[
//         styles['text-input'],
//         styles[text-input--${size}],
//         disable ? styles['text-input--disable'] : '',
//         errors ? styles['text-input--error'] : '',
//         addClass,
//         ].join(' ')}
//     >
//       <div className={styles['text-input__title']}>
//         {helperPopup ? (
//           <HelperPopup
//             text={helperPopup}
//             addClass={[styles['text-input--helper-popup'], 'ms-2'].join(' ')}
//             right
//           />
//         ) : null}
//       </div>
//       <div
//         className={[
//           styles['text-input__body'],
//           leftIcon ? styles['text-input__body--left-icon'] : '',
//           rightIcon ? styles['text-input__body--right-icon'] : '',
//         ].join(' ')}
//       >
//         <input
//           type={type}
//           placeholder={placeholder}
//           className={styles['text-input__input']}
//           required={required}
//           onChange={handleChange}
//           value={value}
//           onBlur={onBlur}
//         />
//         {leftIcon ? (
//           <div className={[styles['text-input__icon'], styles['text-input__icon--left']].join(' ')}>
//             {leftIcon}
//           </div>
//         ) : null}
//         {rightIcon ? (
//           <div className={[styles['text-input__icon'], styles['text-input__icon--right']].join(' ')}>
//             {rightIcon}
//           </div>
//         ) : null}
//         {rightButtons ? (
//           <div className={[styles['text-input__buttons'], styles['text-input__icon--right']].join(' ')}>
//             {rightButtons}
//           </div>
//         ) : null}
//       </div>
//       {caption && !errors ? (
//         <div className={[styles['text-input__caption'], 'caption-11'].join(' ')}>{caption}</div>
//       ) : null}
//
//
//       {errors ? (
//         <div
//           className={[
//             styles['text-input__caption'],
//             fullMessage ? styles['text-input__caption-full'] : '',
//             'caption-11',
//           ].join(' ')}
//         >
//           {errorMessage}
//         </div>
//       ) : null}
//     </div>
//   );
// }