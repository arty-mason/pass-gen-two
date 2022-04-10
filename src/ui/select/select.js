import React from "react";
// Importing react for the code to execute

import styles from "./select.module.css";

function Select({ options, onBlur }) {
  // Options is an array of values, which will use to create password
  // onBlur is an event used read values from select
  return (
    <select onBlur={onBlur} className={styles["select"]}>
      {options && options.map((option, index) => {
        // Using .map to iterate through options using an index as search parameter
        // Using double ampersand to create a condition when there is nothing to render if the array is empty
        return <option key={index}>{option}</option>;
        // Iterarting through options using index as a key
      })}
    </select>
  );
};

export { Select };