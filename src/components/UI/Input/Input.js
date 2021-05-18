import React, { useEffect, useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css'
const Input = React.forwardRef((props,ref) => {

  const inputRef = useRef();

  const activate = () =>{
    console.log("in activate")
    inputRef.current.focus();
  }

  useImperativeHandle(ref,()=>{
    return({
      focus:activate
    })
  })
  // useEffect(() => {
  //   emailInputRef.current.focus();
  // }, []) // this does it after input is endered

  return <div
    className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
      }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input  ref={inputRef} type={props.type || 'text'} value={props.value} onChange={props.onChange} onBlur={props.onBlur} id={props.id} />
  </div>
})
export default Input