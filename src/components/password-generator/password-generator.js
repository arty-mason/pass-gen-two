import React from "react";

import { Input } from '../../ui/input';
import { Select } from '../../ui/select'
import { Checkbox } from '../../ui/checkbox';
import { Button } from '../../ui/button'

import styles from "./password-generator.module.css";
function PasswordGenerator() {
  const passwordLengthValues = [12, 13, 14, 15, 16];
  return (
    <div className={styles['root']}>
      <h1 className={styles['title']}>Password generator</h1>
      <div className={styles['result']}>
        {/* Creating an element to store the result */}
        <Input type="text" readonly={true}></Input>
        {/* Setting the input with "type" value & assging 'true' boolean to 'readonly' property*/}
        {/* Why exactly do we need readonly? */}
        <button className={styles['copy']}></button>
        {/* Creating a button to copy the password into clipboard*/}
        <span className={styles['copied']}>Copied!</span>
        {/* Creating a notification when the password is copied to clipboard */}
      </div>
      <div className={styles['option']}>
        {/* Creating a block of options for user to choose */}
        <span className={styles['option-name']}>Password length</span>
        {/* One of the options to choose password length */}
        <Select options={passwordLengthValues}></Select>
        {/* Using the "Select" component, attributing the array of password length to it */}
      </div>
      <div className={styles['option']}>
        {/* Another option for user to include symbols in the password */}
        <label className={styles['option-label']} htmlFor='symbols'>Use symbols</label>
        {/* Attributing the label to html element and naming it */}
        <Checkbox defaultChecked={false} id='symbols'></Checkbox>
        {/* Setting the default checked value to 'false' and attributing id */}
      </div>
      <Button type="button">Generate password</Button>

    </div>
  )
}

export { PasswordGenerator };