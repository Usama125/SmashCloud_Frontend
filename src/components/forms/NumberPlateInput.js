import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import MaskedInput from 'react-maskedinput'

const NumberPlateInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <MaskedInput mask="AAA-1111" className={classNames("form-control",{ "is-invalid": meta.touched && meta.error })} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="invalid-feedback text-right-aligned">{meta.error}</div>
        ) : null}
      </>
    );
};

export default NumberPlateInput;