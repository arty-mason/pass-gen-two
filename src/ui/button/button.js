import React from "react";
// Importing react for the code to execute

import cx from "clsx"
// Importing clsx library for styles

import styles from "./button.module.css";
// Importing the styles

function Button({ type, className, onClick, children }) {
  // Creating a function with the name, and return a jsx component that will be rendered on the page
  //Inserting {type} into props to make the dynamic button type (i.e. to be able to change button type every time without creating new component)
  // Doing the same for "className" & "onClick"
  // Passing {children} into the props allows us to dynamicly change the content of the component in the future
  return <button type={type} className={cx(styles['button'], className)} onClick={onClick}>
    {/* Using cx to import a specific class + className variable to accept any props in future */}
    {/* Using square brackets and string in className allows us to use hyphenated syntax (e.g. button-red) */}
    {children}
    {/* Passing children in the component's content */}
  </button>
  // We may not use brackets if the code fits into one line
  // Putting {type} varible inside the 'type' to accept any button type in future
  // Doing the same for "className" & "onClick"
}

export { Button }
// Exporting component