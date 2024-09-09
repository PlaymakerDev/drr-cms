import React, { useCallback, useContext, useMemo } from 'react';
import { Input } from 'antd';
import { FormContext } from '@olapat/react-useform';
import {
  getValues,
  getRequired,
  getDisabled,
  getError,
  getOnChange,
} from '@olapat/react-useform/dist/utils/field';
import styles from '@/styles/components/form/Field.module.css';
import { useRouter } from 'next/router';
import { getErrorWithLocalKey } from './utils'
import useTrans from '@/utils/hooks/useTrans'

const InputPassword = (props) => {
  const {
    name,
    label,
    value,
    required,
    error,
    disabled,
    onChange,
    strictMode,
    ...propsInput
  } = props;
  const { locale } = useRouter();
  const formContext = useContext(FormContext);
  const tran = useTrans()

  const _value = useMemo(() => {
    return getValues(formContext, name, value);
  }, [formContext, name, value]);

  const _required = useMemo(() => {
    return getRequired(formContext, name, required);
  }, [formContext, name, required]);

  const _error = useMemo(() => {
    return getError(formContext, name, error);
  }, [formContext, name, error]);

  const _errorWithLocal = useMemo(() => {
    return getErrorWithLocalKey(formContext, name, error);
  }, [formContext, name, error]);

  const _disabled = useMemo(() => {
    return getDisabled(formContext, name, disabled);
  }, [formContext, name, disabled]);

  const _onChange = useCallback(
    (event) => {
      let value
      const funChange = getOnChange(formContext, onChange);

      if (strictMode) {
        let regex = /^[a-zA-Z0-9@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/
        if (regex.test(event?.target?.value)) {
          value = event?.target?.value || ''
          funChange(name, value)
        }
      } else {
        value = event?.target?.value || ''
        funChange(name, value)
      }
    },
    [formContext, name, onChange, strictMode]
  );

  return (
    <div className={`${styles.container} ${_error ? 'a-error' : ''}`}>
      {!!label && (
        <label className={`${styles.label}`} htmlFor={name} title={label}>
          {!!_required && <span className={`${styles.star}`}>*</span>}
          {label}
        </label>
      )}
      <div>
        <Input.Password
          name={name}
          value={_value}
          disabled={_disabled}
          onChange={_onChange}
          size="large"
          {...propsInput}
        />
      </div>
      <span className={`${styles.error}`}>{tran[_errorWithLocal]}</span>
    </div>
  );
};

export default InputPassword;
