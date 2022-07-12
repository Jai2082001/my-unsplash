import { useState } from 'react'
import classes from './Image.module.css'
const Image = (props) => {
    let string
    if (!props.url) {
         string = 'images/' + props.name + '.jpg'
    } else {
         string = props.url    
    }
    let [focused, setFocused] = useState(false)
    const focusedHandler = () => {
        setFocused(true)
    }
    const blurHandler = () => {
        setFocused(false)
    }
    const deleteHandler = () => {
        props.deleteHandler(props.id)    
    }
    if (focused) {
        return (
            <div className={classes.imgContainer} onMouseOver={focusedHandler} onMouseOut={blurHandler}>
                <button onClick={ deleteHandler }>delete</button>
                <img src={string} alt={'simple'}></img>
                <label>{props.name}</label>
            </div>
        )
    } else {
        return (
            <div className={classes.imgContainer} onMouseOver={focusedHandler} onMouseOut={blurHandler}>
                <img src={string} alt={'simple'}></img>
            </div>
        )
    }
}

export default Image