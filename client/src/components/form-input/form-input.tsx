import React from "react";

import "./form-input.scss";

interface IFormInput {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  label?: string;
  name: string;
  type: string;
  value: string | undefined;
  required: boolean;
}

export const FormInput = ({ onChange, label, ...otherProps }: IFormInput) => (
  <div className="group">
    <input className="form-input" onChange={onChange} {...otherProps} />
    {label ? (
      <label
        htmlFor=""
        className={`${
          otherProps.value?.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
