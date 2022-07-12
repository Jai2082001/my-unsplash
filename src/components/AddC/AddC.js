import classes from './AddC.module.css'
import {useRef} from 'react';

const AddC = (props) => {
    const nameRef = useRef()
    const photoUrlRef = useRef()
    const submitHandler = () => {
        const url = photoUrlRef.current.value
        const name = nameRef.current.value;
        if (url && name) {
            props.submitHandler(url, name)
        }
    }
    return (
    <div className={classes.parentAddC}>
        <h3>Add a new photo</h3>
        <div className={classes.inputContainer}>
            <label>Name</label>
                <input type='text' ref={ nameRef}/>
        </div>
            <div className={classes.inputContainer}>
            <label>Photo URL</label>
                <input type="text" ref={ photoUrlRef}/>
        </div>
        <div className={classes.buttonContainer}>
            <button>Cancel</button>
            <button onClick={submitHandler}>Submit</button>
        </div>
    </div>
    )
}

export default AddC