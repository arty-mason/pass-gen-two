import React from "react";
// Importing react for the code to execute

import cx from "clsx"
// Importing clsx library for styles

import styles from "./checkbox.module.css";

function Checkbox({ name, id, className, defaultChecked, onChange }) {
  // defaultChecked is used to set the default checkbox state to either checked or unchecked
  // onChange is used to handle the behaviour of the code after changing the state
  return <input
    type="checkbox"
    name={name}
    id={id}
    className={cx(styles["checkbox"], className)}
    defaultChecked={defaultChecked}
    onChange={onChange}>
  </input>
  // Putting a static checkbox type since we will always have a checkbox type
};

export { Checkbox }