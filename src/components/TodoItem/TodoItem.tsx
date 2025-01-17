import React from 'react';
import {InputField} from "../../shared/ui/InputField";
import {Button} from "../../shared/ui/Button";
import {useForm, Controller} from "react-hook-form";

export const TodoItem: React.FC<any> = () => {
  const {control} = useForm();
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '10px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
        flexWrap: 'wrap',
        gap: '10px',
        maxWidth: '80%',
      }}>
        <Controller
          name="title"
          control={control}
          render={({field: {onChange, value}}) => (
            <InputField
              title="Название"
              onChange={onChange}
              value={value}
              style={{flexBasis: '45%'}}

            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({field: {onChange, value}}) => (
            <InputField
              title="Описание"
              onChange={onChange}
              value={value}
              style={{flexBasis: '45%'}}
            />
          )}
        />
      </div>
      <Button onClick={() => {}} style={{alignSelf: 'center'}}>
        ADD
      </Button>
    </div>
  );
};
