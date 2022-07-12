import { useRef, useState } from 'react'
import classes from './Header.module.css'

const Header = (props) => {
    const inputRef = useRef()
    const addPhotoHandler = () => {
        props.addPhotoHandler()
    }
    const inputChangeHandler = () => {
        props.onChangeHandler(inputRef.current.value)
    }
    return (
        <div className={classes.headerDiv}>
            <div className={classes.firstDiv}>
                <div className={ classes.titleIcon }>
                    <i className="fab fa-unsplash"></i>
                    <div className={ classes.title }>
                    <p style={{fontSize: '24px'}}>My Unsplash</p>
                    <p style={{fontSize: '13px'}}>devchallenges.io</p>
                    </div>
                </div>
                <div className={classes.inputDiv}>
                    <input onChange={inputChangeHandler} ref={inputRef} placeholder='Search Your Image' type="text" name="" id="" />
                </div>
            </div>
            <div className={ classes.secondDiv }>
                <button onClick={addPhotoHandler}>Add a Photo</button>
            </div>
        </div>
    )
}

export default Header