import React from "react";
// Importing react for the code to execute

import cx from "clsx"
// Importing clsx library for styles

import styles from "./input.module.css";

function Input({ type, placeholder, defaultValue, disabled, className, readonly }) {
  return <input
    type={type}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={disabled}
    className={cx(styles["input"], className)}
    readonly={readonly}>
  </input>
};

export { Input };