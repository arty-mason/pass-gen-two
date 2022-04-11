import React from "react";

import { Input } from '../../ui/input';
import { Select } from '../../ui/select'
import { Checkbox } from '../../ui/checkbox';
import { Button } from '../../ui/button'

import styles from "./password-generator.module.css";
function PasswordGenerator() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Creating a variable to store chars
  const symbols = "!@#$%^&()\_+?<>:{}[]";
  // Creating a variable to store symbols
  const passwordLengthValues = [12, 13, 14, 15, 16];
  // Creating an array to store password length options
  const [result, setResult] = React.useState("");
  // Creating a pair of variables for having current result and changing it using destructuring method and assigning them to React useState hook
  // Setting a default value of the variable to equal an empty string to accept the value later
  const [passwordLength, setPasswordLength] = React.useState(passwordLengthValues[0]);
  // Creating a pair of variables for having current password length and changing it using destructuring method and assigning them to React useState hook
  // Setting the default password length to 12 (the first element of passwordLengthValues array with a 0 index)
  const [isSymbolsUsed, setIsSymbolsUsed] = React.useState(false);
  // Defining variables to handle the checkbox that enables\disables using symbols
  const [isPasswordCopied, setIsPasswordCopied] = React.useState(false);
  //Creating variables to handle the password copying 

  function handlePasswordGenerator() {
    let currentResult = "";
    if (isSymbolsUsed) {
      chars += symbols;
      // Via conditional we concatenate chars variable with symbols if the isSymbolsUsed value is true
    }

    for (let i = 0; i < passwordLength; i += 1) {
      // Using a for loop to iterate while the index is less than the password length and incremening the index by 1 each iteration
      const randomNumber = Math.floor(Math.random() * chars.length)
      // Getting a random number by using Math.random function, & multiplying it with the length of chars variable, rounding the result & storing it in the variable
      currentResult += chars.substring(randomNumber, randomNumber + 1)
      // Getting a substring from chars variable using substring (starting from randomNumber and ending by adding + 1 to the same variable)
      // ? Needs proper point by point explanation since its a little confusing
    }
    setResult(currentResult);
  }

  function handleBlur(event) {
    // Creating a function to handle onBlur & giving event prop
    setPasswordLength(event.target.value);
    // Using the function to read the value of the event element
  }

  function handleSymbolsUsed() {
    setIsSymbolsUsed(!isSymbolsUsed)
    // Creating a function to handle setIsSymbolsUsed
  }

  function handlePasswordCopy() {
    if (result) {
      let timerId = null;
      navigator.clipboard.writeText(result).then(() => {
        // Creating a function to copy the password to clipboard and use the text by attributing result variable to it
        setIsPasswordCopied(true);
        // Afterward using a promise (.then) to make setIsPasswordCopied to true for the message to be rendered on the screen
        timerId = setTimeout(() => {
          setIsPasswordCopied(false);
          // Using a setTimeout to make the message dissapear after 2 seconds (2000 ms)
          clearTimeout(timerId);
        }, 2000)
      })
    }
  }

  return (
    <div className={styles['root']}>
      <h1 className={styles['title']}>Password generator</h1>
      <div className={styles['result']}>
        {/* Creating an element to store the result */}
        <Input type="text" readOnly={true} defaultValue={result}></Input>
        {/* Setting the input with "type" value & assging 'true' boolean to 'readonly' property*/}
        {/* Attributing the result of handlePasswordGenerator to defaultValue */}
        {/* Why exactly do we need readonly? */}
        <button className={styles['copy']} onClick={handlePasswordCopy}></button>
        {/* Creating a button to copy the password into clipboard & assigning the function to it*/}
        {isPasswordCopied && <span className={styles['copied']}>Copied!</span>}
        {/* Creating a notification when the password is copied to clipboard only when its copied*/}
      </div>
      <div className={styles['option']}>
        {/* Creating a block of options for user to choose */}
        <span className={styles['option-name']}>Password length</span>
        {/* One of the options to choose password length */}
        <Select options={passwordLengthValues} onBlur={handleBlur}></Select>
        {/* Using the "Select" component, attributing the array of password length to it */}
      </div>
      <div className={styles['option']}>
        {/* Another option for user to include symbols in the password */}
        <label className={styles['option-label']} htmlFor='symbols'>Use symbols</label>
        {/* Attributing the label to html element and naming it */}
        <Checkbox defaultChecked={false} id='symbols' onChange={handleSymbolsUsed}></Checkbox>
        {/* Setting the default checked value to 'false' and attributing id */}
        {/* Using onChange to handle the usage of symbols by attributing the function handleSymbolsUsed to it*/}
      </div>
      <Button type="button" onClick={handlePasswordGenerator}>Generate password</Button>
      {/* Using onClick even handle to use the handlePasswordGenerator function */}
    </div>
  )
}

export { PasswordGenerator };